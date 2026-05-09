# Apple Silicon Asahi Linux

## Prerequisites

Asahi Linux (Fedora Asahi Remix is the primary supported distro) installed on your M1, M2, M3, or M4. You can also use the Asahi installer to create a UEFI boot partition that allows installing other distributions. A list of alternative distros can be found here.
https://github.com/AsahiLinux/docs/wiki/SW%3AAlternative-Distros

:::info
Asahi Linux is no longer in alpha. **Fedora Asahi Remix** is now the recommended and most actively maintained distribution. This guide uses Asahi Arch Linux; adapt package manager commands (`pacman` → `dnf`) if using Fedora Asahi Remix.
:::

:::tip
Be sure to log in and fully update macOS before starting. Open this guide in macOS.
:::

:::info

Desktop version does not have the default alarm user, the user of your choice is setup on first boot. For ease with this guide choose ada as the username. Else pay attention to username when setting up systemd services.

:::

### Start by installing Asahi Linux by following the link below
[Asahi Linux](https://asahilinux.org)

:::info

Follow this guide on youtube if you want to delete the partitions the Asahi installer creates.

[uninstall Asahi](https://www.youtube.com/watch?v=nMnWTq2H-N0)

:::

Log in to both alarm and root. Change the passwords. 

#### Defaults: alarm/alarm & root/root.


### Update the system


### Log in and change default passwords
Log in as root and update the system.

```bash title=">_ Terminal"
pacman -Syu
```

Start and enable sshd. pw auth is disabled for root, login with alarm user.

```bash title=">_ Terminal"
systemctl start sshd.service
systemctl enable sshd.service
```

Install pacman-contrib which includes some useful packages and open the sudoers file with visudo and enable the wheel group.

```bash title=">_ Terminal"
pacman -S pacman-contrib sudo git curl wget htop rsync numactl
sudo EDITOR=nano visudo
```

Remove the # like below.

```bash title=">_ visudo"
## Uncomment to allow members of group wheel to execute any command
%wheel ALL=(ALL:ALL) ALL

```

Add a new user to the wheel group, give it a password.

```bash title=">_ Terminal"
useradd -m -G wheel -s /bin/bash ada
passwd ada
```

Log out and back in as your new user(ada) with SSH. Test sudo by upgrading the system again.

```bash title=">_ Terminal"
ssh ada@<M1 private IP addr>
sudo pacman -Syu
```

:::caution
Remember to copy your ssh key with ssh-copy-id and disable password authentication in sshd_config.
:::

## Bash completion
:::tip
The Arch Bash shell is boring. Optionally install [Bash-it](https://bash-it.readthedocs.io/en/latest/installation/) for a fancy shell.
:::

Add 'complete -cf sudo' to the bottom of .bash_profile and source.

```bash title=">_ Terminal"
echo complete -cf sudo >> $\{%HOME}/.bash_profile; . $HOME/.bash_profile
```

## Locales

Generate the [locales](https://wiki.archlinux.org/title/locale) by uncommenting (en_US.UTF-8 UTF-8 for example) and generating.

```bash title=">_ Terminal"
sudo nano /etc/locale.gen
sudo locale-gen
sudo localectl set-locale LANG=en_US.UTF-8
```

## Time

Set your timezone

```bash title=">_ Terminal"
sudo timedatectl set-timezone America/New_York
```

:::caution
No more daylight savings, possible to set RTC to local? Testing, might not want to do this.

```bash title=">_ Terminal"
sudo timedatectl set-local-rtc 1
# set to 0 for UTC
```
:::

## Chrony

While we are messing with time.. Install Chrony and open chrony.conf and replace contents with below (use ctrl+k to cut whole lines).


```bash title=">_ Terminal"
sudo pacman -S chrony
sudo nano /etc/chrony.conf
```

Replace contents of the file with below.

```bash title="/etc/chrony.conf"
pool time.google.com       iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3
pool time.euro.apple.com   iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3
pool time.apple.com        iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3
pool ntp.ubuntu.com        iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3

# This directive specify the location of the file containing ID/key pairs for
# NTP authentication.
keyfile /etc/chrony/chrony.keys

# This directive specify the file into which chronyd will store the rate
# information.
driftfile /var/lib/chrony/chrony.drift

# Uncomment the following line to turn logging on.
#log tracking measurements statistics

# Log files location.
logdir /var/log/chrony

# Stop bad estimates upsetting machine clock.
maxupdateskew 5.0

# This directive enables kernel synchronisation (every 11 minutes) of the
# real-time clock. Note that it can’t be used along with the 'rtcfile' directive.
rtcsync

# Step the system clock instead of slewing it if the adjustment is larger than
# one second, but only in the first three clock updates.
makestep 0.1 -1

# Get TAI-UTC offset and leap seconds from the system tz database
leapsectz right/UTC

# Serve time even if not synchronized to a time source.
local stratum 10
```

:::caution
Note: systemd-timesyncd.service is in conflict with chronyd, so you need to disable it first if you want to enable chronyd properly.
:::

Disable systemd-timesyncd and enable Chrony

```bash title=">_ Terminal"
sudo systemctl stop systemd-timesyncd.service
sudo systemctl disable systemd-timesyncd.service
# enable and start chrony
sudo systemctl start chronyd.service
sudo systemctl enable chronyd.service
```

## Packages

Add the following packages to build and run cardano-node.

```bash title=">_ Terminal"
sudo pacman -S --needed base-devel
sudo pacman -S openssl libtool unzip jq bc xz numactl
```

## zram swap

Install and create a conf file with following.

```bash title=">_ Terminal"
sudo pacman -S zram-generator
sudo nano /usr/lib/systemd/zram-generator.conf
```

You may want to read up on zram. I always set 1.5 times the amount of system ram. [github](https://github.com/systemd/zram-generator/blob/main/man/zram-generator.conf.md) | [Hayden James](https://haydenjames.io/raspberry-pi-performance-add-zram-kernel-parameters/) |
[lubuntu mailing list](https://lists.ubuntu.com/archives/lubuntu-users/2013-October/005831.html)

```bash title="/usr/lib/systemd/zram-generator.conf"
[zram0]
zram-size = min(24 * 1024)
```
This will give you 24gb of zram swap and will absorb the brunt of running the built-in leaderlogs. Reboot and check htop to confirm.


## Prometheus

Install Prometheus and Prometheus-node-exporter

```bash title=">_ Terminal"
sudo pacman -S prometheus prometheus-node-exporter
```

## Yay AUR package manager

Yay (Yet Another Yogurt) – An AUR Helper Written in Go for Arch Linux distributions. Automate the usage of the Arch User Repository for searching packages published on the AUR, resolving dependencies, downloading, and building AUR packages.

```bash title=">_ Terminal"
mkdir ~/git
cd ~/git
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### Grafana-bin AUR

```bash title=">_ Terminal"
yay -S grafana-bin
sudo systemctl start grafana.service
sudo systemctl enable grafana.service

```

## Static ip

:::info
You can also set a static IP on your router if you wish and skip this section.
:::

[systemd](https://wiki.archlinux.org/title/Systemd-networkd#Wired_adapter_using_a_static_IP)

Create a network service file, make sure you edit it to your network.

```bash title=">_ Terminal"
sudo nano /etc/systemd/network/20-wired.network
```

```bash title="/etc/systemd/network/20-wired.network"
[Match]
Name=enp3s0

[Network]
Address=192.168.1.151/24
Gateway=192.168.1.1
DNS=192.168.1.1
```

Make sure no other network service is running like netctl, then enable and start the service. If there is a network service running stop and disable it.

```bash title=">_ Terminal"
sudo systemctl --type=service
```

```bash title=">_ Terminal"
sudo systemctl enable systemd-networkd.service
sudo systemctl start systemd-networkd.service
```

Disable/stop DHCP.

```bash title=">_ Terminal"

sudo systemctl stop dhcpcd
sudo systemctl disable dhcpcd
sudo reboot
```

## Hostname

[Set the Hostname](https://wiki.archlinux.org/title/Network_configuration#Set_the_hostname)

Edit /etc/hostname

```bash title=">_ Terminal"
sudo nano /etc/hostname
```
and /etc/hosts

```bash title=">_ Terminal"
sudo nano /etc/hosts
```

```bash title="/etc/hosts"
127.0.0.1        localhost
::1              localhost
127.0.1.1        myhostname
```

## Server setup

Tweak/Harden system to our needs.

## sysctl
[sysctl](https://wiki.archlinux.org/title/sysctl)

Create a file in the sysctl.d directory

```bash title=">_ Terminal"
sudo nano /etc/sysctl.d/98-cardano-node.conf
```

Add the following.

```bash title="/etc/sysctl.d/98-cardano-node.conf"
## Asahi Node ##

fs.file-max = 10000000
fs.nr_open = 10000000

# ignore ICMP redirects
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0

net.ipv4.icmp_ignore_bogus_error_responses = 1

# disable IPv6
#net.ipv6.conf.all.disable_ipv6 = 1
#net.ipv6.conf.default.disable_ipv6 = 1

# block SYN attacks
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 2048
net.ipv4.tcp_synack_retries = 3
#net.ipv4.netfilter.ip_conntrack_tcp_timeout_syn_recv=45

# in progress tasks
net.ipv4.tcp_keepalive_time = 240
net.ipv4.tcp_keepalive_intvl = 4
net.ipv4.tcp_keepalive_probes = 5

# reboot if we run out of memory
vm.panic_on_oom = 1
kernel.panic = 10
```

### Disable the root user

Use sudo to become root.

```bash title=">_ Terminal"
sudo passwd -l root
```

### Secure shared memory

Mount shared memory as read only. Open /etc/fstab.

```bash title=">_ Terminal"
sudo nano /etc/fstab
```

Add this line at the bottom, save & exit.

```bash title="/etc/fstab"
tmpfs    /run/shm    tmpfs    ro,noexec,nosuid    0 0
```

### Increase open file limit for $USER

Add a couple lines to the bottom of /etc/security/limits.conf

```bash title=">_ Terminal"
sudo bash -c "echo -e '$\{%USER} soft nofile 800000\n$\{%USER} hard nofile 1048576\n' >> /etc/security/limits.conf"
```

Confirm it was added to the bottom.

```bash title=">_ Terminal"
cat /etc/security/limits.conf
```
## Environment setup

:::danger
There is a 500 ₳ Registration deposit and another 5 ₳ in registration costs to start a pool on mainnet. First time users are strongly recommended to use testnet. You can get tada (test ada) from the testnet faucet. [tada faucet link](https://testnets.cardano.org/en/testnets/cardano/tools/faucet/)
:::

:::tip
It is fairly easy to jump to mainnet when you are ready with the same machine. Only need to update files and folders to mainnet and redo pool creation.

:::

Create the directories for our project and an environment file to hold our variables.

```bash title=">_ Terminal"
mkdir -p $\{%HOME}/.local/bin
mkdir -p $\{%HOME}/pool/files
mkdir -p $\{%HOME}/pool/scripts
mkdir -p $\{%HOME}/pool/logs
mkdir $\{%HOME}/git
mkdir $\{%HOME}/tmp
touch $\{%HOME}/.adaenv
```

### Create bash variables & add \~/.local/bin to our $PATH 🏃

:::info
[Environment Variables in Linux/Unix](https://askubuntu.com/questions/247738/why-is-etc-profile-not-invoked-for-non-login-shells/247769#247769).
:::

:::caution
You must reload environment files after updating them. The same goes for cardano-node, changes to the topology or config files require a cardano-service restart.
:::

```bash title=">_ Terminal"
echo . ~/.adaenv >> $\{%HOME}/.bashrc
cd .local/bin; echo "export PATH=\"$PWD:\$PATH\"" >> $HOME/.adaenv
echo export NODE_HOME=$\{%HOME}/pool >> $\{%HOME}/.adaenv
echo export NODE_PORT=3003 >> $\{%HOME}/.adaenv
echo export NODE_FILES=$\{%HOME}/pool/files >> $\{%HOME}/.adaenv
echo export TOPOLOGY='$\{%NODE_FILES}'/topology.json >> $\{%HOME}/.adaenv
echo export DB_PATH='$\{%NODE_HOME}'/db >> $\{%HOME}/.adaenv
echo export CONFIG='$\{%NODE_FILES}'/config.json >> $\{%HOME}/.adaenv
echo export CARDANO_NODE_SOCKET_PATH="$\{%HOME}/pool/db/socket" >> $\{%HOME}/.adaenv
source $\{%HOME}/.bashrc; source $\{%HOME}/.adaenv
```

### Retrieve node files

Configuration files for each chain can be downloaded here.
[https://book.world.dev.cardano.org/environments.html#production-mainnet](https://book.world.dev.cardano.org/environments.html#production-mainnet)

```bash title=">_ Terminal"
cd $NODE_FILES
wget -N https://book.world.dev.cardano.org/environments/mainnet/config.json
wget -N https://book.world.dev.cardano.org/environments/mainnet/byron-genesis.json
wget -N https://book.world.dev.cardano.org/environments/mainnet/shelley-genesis.json
wget -N https://book.world.dev.cardano.org/environments/mainnet/alonzo-genesis.json
wget -N https://book.world.dev.cardano.org/environments/mainnet/topology.json
wget -N https://book.world.dev.cardano.org/environments/mainnet/submit-api-config.json
wget -N https://book.world.dev.cardano.org/environments/mainnet/conway-genesis.json

Run the following to modify config.json and update TraceBlockFetchDecisions to "true" & listen on all interfaces with Prometheus Node Exporter.

```bash title=">_ Terminal"
sed -i config.json \
    -e "s/TraceBlockFetchDecisions\": false/TraceBlockFetchDecisions\": true/g" \
    -e "s/127.0.0.1/0.0.0.0/g"
```

## Build Libsodium

This is Intersect's fork of Libsodium. It is needed for the dynamic build binary of cardano-node.

```bash title=">_ Terminal"
cd; cd git/
git clone https://github.com/IntersectMBO/libsodium
cd libsodium
git checkout 66f017f1
./autogen.sh
./configure
make
sudo make install
```

Add library path to ldconfig.

```bash title=">_ Terminal"
sudo touch /etc/ld.so.conf.d/local.conf 
echo "/usr/local/lib" | sudo tee -a /etc/ld.so.conf.d/local.conf 
```
Echo library paths into .bashrc file and source it.

```bash title=">_ Terminal"
echo "export LD_LIBRARY_PATH="/usr/local/lib:$LD_LIBRARY_PATH"" >> ~/.bashrc
echo "export PKG_CONFIG_PATH="/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH"" >> ~/.bashrc
. ~/.bashrc
```

Update link cache for shared libraries and confirm.

```bash title=">_ Terminal"
sudo ldconfig; ldconfig -p | grep libsodium
```

## Build secp256k1

```
git clone https://github.com/bitcoin-core/secp256k1.git
cd secp256k1
git checkout ac83be33
./autogen.sh
./configure  --enable-module-schnorrsig --enable-experimental
make
sudo make install
```

Update link cache for shared libraries and confirm.

```bash title=">_ Terminal"
sudo ldconfig; ldconfig -p | grep secp256k1
```

## blst

```bash title=">_ Terminal"
cd ~/git
git clone https://github.com/supranational/blst
cd blst
git checkout v0.3.15
./build.sh
sudo nano /usr/local/lib/pkgconfig/libblst.pc
```

Add this.
```

prefix=/usr/local
exec_prefix=$\{%prefix}
libdir=$\{%exec_prefix}/lib
includedir=$\{%prefix}/include

Name: libblst
Description: Multilingual BLS12-381 signature library
URL: https://github.com/supranational/blst
Version: 0.3.15
Cflags: -I$\{%includedir}
Libs: -L$\{%libdir} -lblst

```

Copy other files into place.

```bash title=">_ Terminal"
sudo cp bindings/blst_aux.h bindings/blst.h bindings/blst.hpp  /usr/local/include/
sudo cp libblst.a /usr/local/lib
sudo chmod u=rw,go=r /usr/local/\{%lib/\{%libblst.a,pkgconfig/libblst.pc},include/\{%blst.\{%h,hpp},blst_aux.h}}
```

## LLVM 12.0.1

```bash title=">_ Terminal"
cd ~/git
wget https://github.com/llvm/llvm-project/releases/download/llvmorg-12.0.1/clang+llvm-12.0.1-aarch64-linux-gnu.tar.xz
tar -xf clang+llvm-12.0.1-aarch64-linux-gnu.tar.xz
export PATH=~/git/clang+llvm-12.0.1-aarch64-linux-gnu/bin/:$PATH
```

## ncurses5 compat libs
Use N option, ignore aarch64 warning and build it anyways.

```bash title=">_ Terminal"
yay -S ncurses5-compat-libs
```

Confirm.

```bash title=">_ Terminal"
clang --version
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

### Obtain cardano-node

```bash title=">_ Terminal"
cd $HOME/git
git clone https://github.com/IntersectMBO/cardano-node.git
cd cardano-node
git fetch --all --recurse-submodules --tags
git checkout $(curl -s https://api.github.com/repos/IntersectMBO/cardano-node/releases/latest | jq -r .tag_name)
```

Configure with GHC 9.6.

```bash title=">_ Terminal"
cabal update
cabal configure -O0 -w ghc-9.6.7

sed -i $HOME/.cabal/config -e "s/overwrite-policy:/overwrite-policy: always/g"
rm -rf dist-newstyle/build/aarch64-linux/ghc-9.6.7
```

Build cardano-cli cardano-node.

```bash title=">_ Terminal"
cabal build cardano-cli cardano-node
```

Add them to your PATH.

```bash title=">_ Terminal"
cp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-cli") $HOME/.local/bin/
cp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-node") $HOME/.local/bin/
```

Check

```bash title=">_ Terminal"
cardano-node version
cardano-cli version
```

### Systemd unit startup scripts

Create the startup script and systemd unit file so systemd can manage cardano-node.

```bash title=">_ Terminal"
nano $\{%HOME}/.local/bin/cardano-service
```

Edit the username here if you chose to not use ada. Paste the following, save & exit.

```bash title="$\{%HOME}/.local/bin/cardano-service"
#!/bin/bash
. /home/ada/.adaenv

## +RTS -N6 -RTS = Multicore(4)
cardano-node run +RTS -N6 -RTS \
  --topology $\{%TOPOLOGY} \
  --database-path $\{%DB_PATH} \
  --socket-path $\{%CARDANO_NODE_SOCKET_PATH} \
  --port $\{%NODE_PORT} \
  --config $\{%CONFIG}
```

Allow execution of our new cardano-node startup script.

```bash title=">_ Terminal"
chmod +x $\{%HOME}/.local/bin/cardano-service
```

Open /etc/systemd/system/cardano-node.service.

```bash title=">_ Terminal"
sudo nano /etc/systemd/system/cardano-node.service
```

Paste the following, You will need to edit the username here if you chose to not use ada. Save & exit.

```bash title="/etc/systemd/system/cardano-node.service"
# The Cardano Node Service (part of systemd)
# file: /etc/systemd/system/cardano-node.service

[Unit]
Description     = Cardano node service
Wants           = network-online.target
After           = network-online.target

[Service]
User            = ada
Type            = simple
WorkingDirectory= /home/ada/pool
ExecStart       = /bin/bash -c "PATH=/home/ada/.local/bin:$PATH exec /home/ada/.local/bin/cardano-service"
KillSignal=SIGINT
RestartKillSignal=SIGINT
TimeoutStopSec=10
LimitNOFILE=32768
Restart=always
RestartSec=10
EnvironmentFile=-/home/ada/.adaenv

[Install]
WantedBy= multi-user.target
```

Reload systemd so it picks up our new service files.

```bash title=">_ Terminal"
sudo systemctl daemon-reload
```

Let's add a couple functions to the bottom of our .adaenv file to make life a little easier.

```bash title=">_ Terminal"
nano $\{%HOME}/.adaenv
```

```bash title="$\{%HOME}/.adaenv"
cardano-service() \{%
    #do things with parameters like $1 such as
    sudo systemctl "$1" cardano-node.service
}

cardano-monitor() \{%
    #do things with parameters like $1 such as
    sudo systemctl "$1" prometheus.service
    sudo systemctl "$1" prometheus-node-exporter.service
}
```

 Source these changes into your surrent shell.
 
```bash title=">_ Terminal"
source $\{%HOME}/.adaenv
```

What we just did there was added a couple functions to control our cardano-service and cardano-submit without having to type out

> > sudo systemctl enable cardano-node.service
> >
> > sudo systemctl start cardano-node.service
> >
> > sudo systemctl stop cardano-node.service
> >
> > sudo systemctl status cardano-node.service

Now we just have to:

* cardano-service enable (enables cardano-node.service auto start at boot)
* cardano-service start (starts cardano-node.service)
* cardano-service stop (stops cardano-node.service)
* cardano-service status (shows the status of cardano-node.service)


## gLiveView.sh

Guild operators scripts has a couple useful tools for operating a pool. We do not want the project as a whole, though there are a couple scripts we are going to use.

\{%% embed url="https://github.com/cardano-community/guild-operators/tree/master/scripts/cnode-helper-scripts" %}

```bash title=">_ Terminal"
cd $NODE_HOME/scripts
wget https://raw.githubusercontent.com/cardano-community/guild-operators/master/scripts/cnode-helper-scripts/env
wget https://raw.githubusercontent.com/cardano-community/guild-operators/master/scripts/cnode-helper-scripts/gLiveView.sh
```

:::info

You can change the port cardano-node runs on in the .adaenv file in your home directory. Open the file edit the port number. Load the change into your shell & restart the cardano-node service.

```bash title=">_ Terminal"
nano $\{%HOME}/.adaenv
source $\{%HOME}/.adaenv
cardano-service restart
```
:::

Add a line sourcing our .adaenv file to the top of the env file and adjust some paths.

```bash title=">_ Terminal"
sed -i env \
    -e "/#CNODEBIN/i. $\{%HOME}/.adaenv" \
    -e "s/\#CNODE_HOME=\"\/opt\/cardano\/cnode\"/CNODE_HOME=\"\$\{%HOME}\/pool\"/g" \
    -e "s/\#CNODE_PORT=6000"/CNODE_PORT=\"'$\{%NODE_PORT}'\""/g" \
    -e "s/\#CONFIG=\"\$\{%CNODE_HOME}\/files\/config.json\"/CONFIG=\"\$\{%NODE_FILES}\/config.json\"/g" \
    -e "s/\#TOPOLOGY=\"\$\{%CNODE_HOME}\/files\/topology.json\"/TOPOLOGY=\"\$\{%NODE_FILES}\/topology.json\"/g" \
    -e "s/\#LOG_DIR=\"\$\{%CNODE_HOME}\/logs\"/LOG_DIR=\"\$\{%CNODE_HOME}\/logs\"/g"
```

Allow execution of gLiveView.sh.

```bash title=">_ Terminal"
chmod +x gLiveView.sh
```

## Install Cronie

Arch does not use cron. You can set up a systemd timer or install some other cron like scheduler.


```
sudo pacman -S cronie
```

Enable & start.

```bash title=">_ Terminal"
sudo systemctl enable cronie.service
sudo systemctl start cronie.service
```

## topologyUpdater.sh (not needed on block producer)

Until peer to peer is enabled on the network operators need a way to get a list of relays/peers to connect to. The topology updater service runs in the background with cron. Every hour the script will run and tell the service you are a relay and want to be a part of the network. It will add your relay to it's directory after four hours you should see in connections in gLiveView.

:::info
The list generated will show you the distance & a clue as to where the relay is located.
:::

Download the topologyUpdater script and have a look at it. Here is where you will enter your block producer or any other custom peers you would like to always be connected to.

```bash title=">_ Terminal"
wget https://raw.githubusercontent.com/cardano-community/guild-operators/master/scripts/cnode-helper-scripts/topologyUpdater.sh
```

```bash title=">_ Terminal"
nano topologyUpdater.sh
```

Save, exit and make it executable.

```bash title=">_ Terminal"
chmod +x topologyUpdater.sh
```

:::info
You will not be able to successfully execute ./topologyUpdater.sh until you are fully synced up to the tip of the chain.
:::

Create a cron job that will run once an hour.

```bash title=">_ Terminal"
EDITOR=nano crontab -e
```

### Add save and exit

```bash title=">_ Terminal"
SHELL=/bin/bash
33 * * * * . $HOME/.adaenv; $HOME/pool/scripts/topologyUpdater.sh
```

```bash title=">_ Terminal"
nano $NODE_FILES/topology.json
```

:::info
You can use gLiveView.sh to view ping times in relation to the peers in your topology file. Use ping to resolve hostnames to IP's.
:::

Changes to this file will take affect upon restarting the cardano-service.

## Display inbound connections in Grafana

```bash title=">_ Terminal"
mkdir -p $HOME/custom-metrics/tmp
nano $HOME/custom-metrics/peers_in.sh
```
Add following, update port # to match cardano-node port.

```bash title=">_ Terminal"
INCOMING_PEERS="$(ss -tnp state established | grep "cardano-node" | awk -v port=":3003" '$3 ~ port \{%print}' | wc -l)"
echo "peers_in $\{%INCOMING_PEERS}" > /home/ada/custom-metrics/tmp/peers_in.prom.tmp
mv /home/ada/custom-metrics/tmp/peers_in.prom.tmp /var/lib/node_exporter/peers_in.prom
```
Make it executable.

```bash title=">_ Terminal"
chmod +x $HOME/custom-metrics/peers_in.sh
```
Open node-exporter configuration file and add..

```bash title=">_ Terminal"
sudo nano /etc/conf.d/prometheus-node-exporter
```
Make it look like this.

```bash title=">_ Terminal"
NODE_EXPORTER_ARGS='--collector.textfile.directory=/var/lib/node_exporter'
```

Create that directory.

```bash title=">_ Terminal"
sudo mkdir /var/lib/node_exporter
```
Create a cron job as root to run our script every minute.

```bash title=">_ Terminal"
sudo EDITOR=nano crontab -e
```

```bash title=">_ Terminal"
SHELL=/bin/bash
* * * * * /home/ada/custom-metrics/peers_in.sh
```
Restart prometheus-node-exporter.

```bash title=">_ Terminal"
sudo systemctl restart prometheus-node-exporter
```

After a minute you should be able to find a metric in Grafana called 'peers_in'.

## System updates

View available system upgrades(pacman) on Grafana

```bash title=">_ Terminal"
nano $HOME/custom-metrics/pacman_upgrades.sh
```

Add following. Replace ada with your username here if different.

```bash title=">_ Terminal"
UPDATES="$(/usr/bin/checkupdates | wc -l)"
echo "pacman_upgrades_pending $\{%UPDATES}" > /home/ada/custom-metrics/tmp/pacman_upgrades_pending.prom.tmp
mv /home/ada/custom-metrics/tmp/pacman_upgrades_pending.prom.tmp /var/lib/node_exporter/pacman_upgrades_pending.prom
```

Make it executable.

```bash title=">_ Terminal"
chmod +x $HOME/custom-metrics/pacman_upgrades.sh
```

Create a cron job as root to run our script once a day at 1 am.

```bash title=">_ Terminal"
sudo EDITOR=nano crontab -e
```

Replace ada with your username here if different.

```bash title=">_ Terminal"
0 1 * * * /home/ada/custom-metrics/pacman_upgrades.sh
```

Restart prometheus-node-exporter.

```bash title=">_ Terminal"
sudo systemctl restart prometheus-node-exporter
```

In Grafana find the 'pacman_upgrades_pending' metric. It will not be available until you fire off the script or cron runs it.

## Firewall

Install UFW

```bash title=">_ Terminal"
sudo pacman -S ufw
```

## Wireless

Connect with wireless

```bash title=">_ Terminal"
sudo pacman -S dialog wpa_supplicant
sudo wifi-menu -o
```


## Usefull links

[custom-metrics](https://nsrc.org/workshops/2021/sanog37/nmm/netmgmt/en/prometheus/ex-custom-metrics.htm)

[arch prometheus monitoring](https://vdwaa.nl/arch-prometheus-monitoring.html)
