---
description: This guide is designed to teach Cardano SPOs how to set up cardano-db-sync on Oracle cloud.
keywords: [guides, cardano relay, cardano node, Oracle Cloud Ampere, armada alliance, ubuntu]
---

import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Oracle Cloud Ampere db-sync

:::note



:::

## Setting up the ARM instance.

:::caution

Make sure to pay close attention to get it right the first time! I had a rough time with customer support.

After setting up the free account it is important to upgrade it to a regular account. You will not be charged anything as long as you stay within the free tier. If you do not upgrade the account you run the risk of Oracle deleting your server. We have seen this happen a few times.

:::

Set up an [account with Oracle](https://signup.cloud.oracle.com/)

:::warning

Pay attention to any information regarding Ampere region availability. I used Osaka (availability of Ampere A.1 instances appears to vary depending on demand, so be aware availability by location will change over time).

:::

### Create an Ampere A.1 Instance by doing the following:

Click 'Create Instance' on the dashboard.

![create Oracle instance](/img/oracle-create-instance.png)

### Configure

The first input is the instance name. This is the hostname of the machine, use a FQDN if possible or leave it as is. You can always change the hostname from within Ubuntu at any time.

For placement create the instance in your root compartment. This is most likely already set but if it asks to set it choose the root compartment.

Click on 'Change image' and choose 'Canonical Ubuntu'.

Go to 'Change shape' and choose 'Ampere' ARM-based processor then VM.Standard.A1.Flex shape. The always free tier allows for 4 OCPU's and 24gb of RAM. Anything more than that will incur a charge.

:::info

It is also possible to split the free tier into two servers (2 OCPU's/12gb RAM with a 100gb boot volume) but with the chain already 70gb's it is not recommended as you will soon run out of space on the boot volume. Also 4 OCPU's will sync up faster.

:::

![create Oracle instance](/img/oracle-choose-image-shape.png)

Leave the network section as is.

Under 'Add SSH Keys' choose 'Paste public keys' then paste your **public** ssh key into the 'SSH keys' input. If you need/want to create a new password protected ed25519 key pair you can. Give it a unique name.

### Optionally create a new SSH key pair if needed

If you want to create a new SSH password protected ED25519 key pair.

```bash title=">_ Terminal"
ssh-keygen -a 64 -t ed25519 -f ~/.ssh/<unique_keyname>
```

:::info

[`-a`](https://man.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man1/ssh-keygen.1#a) rounds When saving a private key, this option specifies the number of KDF \(key derivation function, currently [bcrypt_pbkdf\(3\)](https://man.openbsd.org/bcrypt_pbkdf.3)\) rounds used.

Higher numbers result in slower passphrase verification and increased resistance to brute-force password cracking \(should the keys be stolen\). The default is 16 rounds.

[https://flak.tedunangst.com/post/new-openssh-key-format-and-bcrypt-pbkdf](https://flak.tedunangst.com/post/new-openssh-key-format-and-bcrypt-pbkdf)

:::

Your new key pair will be located in ~/.ssh. Use cat to print out the key.

```bash title=">_ Terminal"
cd $HOME/.ssh
ls -al
cat <unique_keyname>.pub
```

Paste your public key into the input field.

Under Boot volume section click on 'Specify a custom boot volume size' and enter 600gb. I increased IOPs by one notch. 
Near as I can tell this will be around 30 cents a day.


That's it go ahead and click 'Create' at the bottom left of the page. Provisioning the new instance will take a minute or two.

## SSH into your new instance

Once the instance is created you will be presented with the instance details. Copy the 'Public IP address' under 'Instance access'. Open up a terminal and ssh into your new machine.

:::warning

With MacOS you may have to specify which key to use with the -i flag and path to private key.

:::

```bash title=">_ Terminal"
ssh ubuntu@<instance public ip> -i ~/.ssh/<unique_keyname>
```

Upgrade the system

```bash title=">_ Terminal"
sudo apt update;sudo apt upgrade -y
```

Install Packages to build and run cardano-node/cardano-cli.

```bash title=">_ Terminal"
sudo apt install build-essential libssl-dev tcptraceroute python3-pip flex \
    make automake unzip net-tools pkg-config g++ bison \
    libffi-dev libgmp-dev libssl-dev libtinfo-dev libsystemd-dev autoconf \
    zlib1g-dev libncursesw5 llvm-12 numactl libnuma-dev libtool \
    liburing-dev protobuf-compiler libsnappy-dev -y
```

## Optionally install ZRAM

ZRAM works incredibly well with both cardano-node and db-sync. ZRAM swap can absorb the brunt of running the internal leader log schedule. I highly recommend using it over disk swap and to save money.

:::info zram further reading

[https://haydenjames.io/raspberry-pi-performance-add-zram-kernel-parameters/](https://haydenjames.io/raspberry-pi-performance-add-zram-kernel-parameters/)

[https://lists.ubuntu.com/archives/lubuntu-users/2013-October/005831.html](https://lists.ubuntu.com/archives/lubuntu-users/2013-October/005831.html)

:::

```bash title=">_ Terminal"
sudo apt install linux-modules-extra-$(uname -r) zram-config
```

Open /usr/bin/init-zram-swapping.

```bash title=">_ Terminal"
sudo nano /usr/bin/init-zram-swapping
```

Switch compression algorithm to lz4. Multiply the default mem variable by 3 like below. This will give the instance 35gb of compressed virtual swap in RAM. Increase vm.swappiness to 150.

```bash title="/usr/bin/init-zram-swapping"
#!/bin/sh

modprobe zram

# Calculate memory to use for zram (1/2 of ram)
totalmem=`LC_ALL=C free | grep -e "^Mem:" | sed -e 's/^Mem: *//' -e 's/  *.*//'`
echo lz4 > /sys/block/zram0/comp_algorithm
mem=$((totalmem / 2 * 1024 * 3))

# initialize the devices
echo $mem > /sys/block/zram0/disksize
mkswap /dev/zram0
swapon -p 150 /dev/zram0
```

## Build a static binary of jq

:::tip
It's handy to have a statically linked aarch64 jq binary that you can move to an ARM cold machine.

A Raspberry Pi 400 makes a great cold machine for signing pool transactions or rotating KES. This allows you to have a truly never online cold machine, and it's fairly portable and compact.
:::

```bash title=">_ Terminal"
mkdir $HOME/git
cd $HOME/git
git clone https://github.com/stedolan/jq.git
cd jq/
git submodule update --init
autoreconf -fi
./configure --with-oniguruma=builtin
make LDFLAGS=-all-static
make check
sudo make install
```

Confirm.

```bash title=">_ Terminal"
jq -V
# jq-1.6-145-ga9f97e9-dirty
which jq
# /usr/local/bin/jq
```

## Build Libsodium

This is Intersect's fork of Libsodium. It is needed for the dynamic build binary of cardano-node.

```bash title=">_ Terminal"
mkdir -p $HOME/git
cd $HOME/git
git clone https://github.com/IntersectMBO/libsodium
cd libsodium
git checkout 66f017f1
./autogen.sh
./configure
make
sudo make install
```

Echo library paths into your .bashrc file and source it.

```bash title=">_ Terminal"
echo "export LD_LIBRARY_PATH="/usr/local/lib:$LD_LIBRARY_PATH"" >> ~/.bashrc
echo "export PKG_CONFIG_PATH="/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH"" >> ~/.bashrc
. ~/.bashrc
```

Update link cache for shared libraries and confirm.

```bash title=">_ Terminal"
sudo ldconfig; ldconfig -p | grep libsodium
```

## Build libsecp256k1

```bash title=">_ Terminal"
cd $HOME/git
git clone https://github.com/bitcoin-core/secp256k1.git
cd secp256k1
git reset --hard $SECP256K1_REF
./autogen.sh
./configure  --enable-module-schnorrsig --enable-experimental
make
sudo make install
```

Confirm linked secp256k1 library.

```bash title=">_ Terminal"
sudo ldconfig -p | grep secp256k1
```

## GHCUP, GHC & Cabal

Install ghcup use defaults when asked.

```bash title=">_ Terminal"
curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh
```

```bash title=">_ Terminal"
. ~/.bashrc
ghcup upgrade
ghcup install cabal 3.12.1.0
ghcup set cabal 3.12.1.0

ghcup install ghc 9.6.7
ghcup set ghc 9.6.7
```

Confirm.

```bash title=">_ Terminal"
cabal --version
ghc --version
```

## Build cardano-node

```bash title=">_ Terminal"
cd $HOME/git
git clone https://github.com/IntersectMBO/cardano-node.git
cd cardano-node
git fetch --all --recurse-submodules --tags
git checkout $(curl -s https://api.github.com/repos/IntersectMBO/cardano-node/releases/latest | jq -r .tag_name)
```

Configure with GHC 9.6.

```bash title=">_ Terminal"
cabal configure -O0 -w ghc-9.6.7

sed -i $HOME/.cabal/config -e "s/overwrite-policy:/overwrite-policy: always/g"
rm -rf dist-newstyle/build/aarch64-linux/ghc-9.6.7
```

Build cardano-cli, cardano-node, cardano-submit-api and bech32.

:::info

If Ubuntu complains about LLVM try the below commands. This happened to me once. The library paths should be linked automatically though.

```bash title=">_ Terminal"
export PATH=/usr/lib/llvm-12/bin:$PATH
export CPLUS_INCLUDE_PATH=$(llvm-config --includedir):$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$(llvm-config --libdir):$LD_LIBRARY_PATH
```

:::


```bash title=">_ Terminal"
cabal build cardano-cli cardano-node cardano-submit-api bech32
```

Add them to your PATH.

<Tabs groupId="BINARY_PATH">
  <TabItem value="~/.local/bin/" label="Stake Pool Scripts" default>

```bash title=">_ Terminal"
mkdir ~/.local/bin
cp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-cli") $HOME/.local/bin/
cp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-node") $HOME/.local/bin/
cp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-submit-api") $HOME/.local/bin/
cp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "bech32") $HOME/.local/bin/
```

  </TabItem>
  <TabItem value="~/.cabal/bin" label="CNTools">

```bash title=">_ Terminal"
mkdir ~/.cabal/bin
cp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-cli") $HOME/.cabal/bin/
cp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-node") $HOME/.cabal/bin/
cp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-submit-api") $HOME/.cabal/bin/
cp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "bech32") $HOME/.cabal/bin/
```

  </TabItem>
</Tabs>

## Instance Firewall

:::info

Oracle Cloud images are incompatible with UFW, so we're going to go with firewalld instead, which is a firewall management solution available for many Linux distributions which acts as a frontend for the iptables packet filtering system provided by the Linux kernel (see https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7).

:::

Install Firewalld, enable the service to start on boot and start it now.

```bash title=">_ Terminal"
 sudo apt-get install firewalld 
 sudo systemctl enable firewalld
 sudo systemctl start firewalld 
 ```

### Relay

Opening tcp port 6000. Permanent means it will be open after a reboot or Firewalld service restart.

 ```bash title=">_ Terminal"
sudo firewall-cmd --zone=public --add-port=6000/tcp --permanent
sudo firewall-cmd --reload
 ```

You can print a list of any Firewalld rules like so.

 ```bash title=">_ Terminal"
sudo firewall-cmd --list-all
 ```

 ### Block producer

 Open a port to a block producer only allowing connections from a specific IP address.

:::warning

It is preferable to use a VPN like Wireguard to communicate with your other relays. Wireguard creates a network interface that you can control with Firewalld or UFW. Shaping which ports are opened or allowing one way traffic. Please see our <Link to="/docs/stake-pool-guides/wireguard-guide">Wireguard guide</Link> for setup.

:::

  ```bash title=">_ Terminal"
firewall-cmd --permanent --zone=public --add-rich-rule='rule family="ipv4" source address="<your ip address>" port protocol="tcp" port="6002" accept'

#Reload firewalld
sudo firewall-cmd --reload

#Verify the rich rule was added
sudo firewall-cmd --list-all
 ```

 ## Oracle Ingress

 ### Open relay

Log into Oracle Cloud and click on your instance name link.

 ![create Oracle instance](/img/oracle-instance.png)

 On the next page under instance details click on the 'Virtual cloud network' link.
 
 Click on the existing subnet.

 ![create Oracle instance](/img/oracle-subnet.png)

Click into the existing security list.

 ![create Oracle instance](/img/oracle-security-list.png)

You will be presented with the default ingress rules. Click 'Add Ingress Rules'.

 ![create Oracle instance](/img/oracle-default-ingress.png)

 Make it look like below for a relay running on port 6000.

 ![create Oracle instance](/img/oracle-add-ingress.png)

 It should look like this.

 ![create Oracle instance](/img/oracle-completed-ingress.png)

Your Oracle instance should now have everything you need to set up a relay or block producer with CNTools or Stake Pool Operator scripts. If using CNTools just be aware that the prebuilt binaries the prerequisites script downloads are x86 binaries. CNTools will not overwrite any existing aarch64 binaries. If you have any questions you can ask in our Telegram group.