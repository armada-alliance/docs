# Two testnets, one Pi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Operate both preview and preprod testnets on one Raspberry Pi 8gb

## Flashable image of completed guide. Username is ubuntu password is lovelace/
[two testnets image](https://testnet.armada-alliance.com/two-testnets.img.xz).
Both testnets will start syncing at boot. Pi works very hard for about an hour till synced up.
Grafana on port 5000.

:::info
If any of these concepts are unknown, if you are confused or you see errors about anything please let us know in our [Telegram](https://t.me/armada_alli) group.

You can make a couple wallets in Eternl now if you want to interact with testnet dapps. Otherwise we will be using cli created wallets with Martins SPO scripts managing them and the pools.

Faucet urls: You will get 10k tada per network every 24 hours.
 - [Preview Faucet](https://faucet.preview.world.dev.cardano.org/basic-faucet)
 - [Preprod Faucet](https://faucet.preprod.world.dev.cardano.org/basic-faucet)
:::

1. Be sure you have a public IP address and your router can forward ports. Does not have to be static.
2. Flash 64bit Ubuntu server, preferably on a USB3 stick 64 gb is good enough for now. Should have a heat sink on CPU.
3. Determine LAN IP address and ssh in, change the password. Going to use default ubuntu user for this guide.

## Start by setting up your Raspberry Pi

Follow the [server setup](https://armada-alliance.com/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/server-setup) instructions. Then return here.

### OK you are back, lets get started

Install jq.

```bash title=">_ Terminal"
sudo apt install jq
```

Create the directories for our project. You will then have two folders in ubuntu's home directory, one for each pool/network.

```bash title=">_ Terminal"
mkdir -p ${HOME}/.local/bin
mkdir -p ${HOME}/preview-pool/files ${HOME}/preprod-pool/files
mkdir -p ${HOME}/preview-pool/scripts ${HOME}/preprod-pool/scripts
mkdir -p ${HOME}/preview-pool/logs ${HOME}/preprod-pool/logs
mkdir ${HOME}/git
mkdir ${HOME}/tmp
```

Add .local/bin to $PATH.

```bash title=">_ Terminal"
cd ${HOME}/.local/bin
echo "export PATH=\"$PWD:\$PATH\"" >> $HOME/.bashrc
export PATH="$PWD:$PATH"
```

Create a .adaenv file in each folder. These will hold the settings,variables and paths.

```bash title=">_ Terminal"
touch ${HOME}/preview-pool/.adaenv
touch ${HOME}/preprod-pool/.adaenv
```

<Tabs groupId="NETWORK">
<TabItem value="Preview" label="Preview" default>

## Preview Environment file

```bash title=">_ Terminal"
nano ${HOME}/preview-pool/.adaenv
```

Add the following, we will add key and opcert values later after we have generated them. Notice the magic variable value. This is what chooses which network to join and is referenced in one of the specific genesis file we will download shortly from IOG. Preview will start on port 3000
and preprod on 3001.

```bash title="/home/ubuntu/preview-pool/.adaenv"
export NODE_CONFIG=testnet
export NODE_HOME=/home/ubuntu/preview-pool
export NODE_PORT=3000
export NODE_FILES=/home/ubuntu/preview-pool/files

export CARDANO_NODE_SOCKET_PATH=/home/ubuntu/preview-pool/db/socket
export TOPOLOGY=${NODE_FILES}/topology.json
export DB_PATH=${NODE_HOME}/db
export CONFIG=${NODE_FILES}/config.json
export KES=${NODE_HOME}/<your-pool-name>.kes-000.skey
export VRF=${NODE_HOME}/<your-pool-name>.vrf.skey
export CERT=${NODE_HOME}/<your-pool-name>.node-000.opcert
export MAGIC=2
export CONFIG_NET=testnet-magic\ ${MAGIC}

export PATH="/home/ubuntu/stakepoolscripts/bin:$PATH"
```

</TabItem>
<TabItem value="Preprod" label="Preprod" default>

## Preprod Environment file

```bash title=">_ Terminal"
nano ${HOME}/preprod-pool/.adaenv
```

Add the following, we will add key and opcert values later after we have generated them. Notice the magic variable value. This is what chooses which network to join and is referenced in one of the specific genesis file we will download shortly from IOG. Preview will start on port 3000
and preprod on 3001.

```bash title="/home/ubuntu/preprod-pool/.adaenv"
export NODE_CONFIG=testnet
export NODE_HOME=/home/ubuntu/preprod-pool
export NODE_PORT=3001
export NODE_FILES=/home/ubuntu/preprod-pool/files

export CARDANO_NODE_SOCKET_PATH=/home/ubuntu/preprod-pool/db/socket
export TOPOLOGY=${NODE_FILES}/topology.json
export DB_PATH=${NODE_HOME}/db
export CONFIG=${NODE_FILES}/config.json
export KES=${NODE_HOME}/<your-pool-name>.kes-000.skey
export VRF=${NODE_HOME}/<your-pool-name>.vrf.skey
export CERT=${NODE_HOME}/<your-pool-name>.node-000.opcert
export MAGIC=1
export CONFIG_NET=testnet-magic\ ${MAGIC}

export PATH="/home/ubuntu/stakepoolscripts/bin:$PATH"
```

</TabItem>
</Tabs>

<Tabs groupId="NETWORK">
<TabItem value="Preview" label="Preview" default>

## Preview Operational files

Change directory into the files folder for each network and download them. The file links can be found on the [Cardano Operations Book](https://book.world.dev.cardano.org/environments.html#preview-testnet).

```bash title=">_ Terminal"
cd ${HOME}/preview-pool/files
wget https://book.world.dev.cardano.org/environments/preview/config.json
wget https://book.world.dev.cardano.org/environments/preview/topology.json
wget https://book.world.dev.cardano.org/environments/preview/byron-genesis.json
wget https://book.world.dev.cardano.org/environments/preview/shelley-genesis.json
wget https://book.world.dev.cardano.org/environments/preview/alonzo-genesis.json
wget https://book.world.dev.cardano.org/environments/preview/conway-genesis.json
```
```

Enable TraceBlockFetchDecisions and listen on all interfaces.

```bash title=">_ Terminal"
sed -i config.json \
    -e "s/TraceBlockFetchDecisions\": false/TraceBlockFetchDecisions\": true/g" \
    -e "s/127.0.0.1/0.0.0.0/g"
```

</TabItem>
<TabItem value="Preprod" label="Preprod" default>

## Preprod Operational files

Change directory into the files folder for each network and download them. The file links can be found on the [Cardano Operations Book](https://book.world.dev.cardano.org/environments.html#preprod-testnet).

```bash title=">_ Terminal"
cd ${HOME}/preprod-pool/files
wget https://book.world.dev.cardano.org/environments/preprod/config.json
wget https://book.world.dev.cardano.org/environments/preprod/topology.json
wget https://book.world.dev.cardano.org/environments/preprod/byron-genesis.json
wget https://book.world.dev.cardano.org/environments/preprod/shelley-genesis.json
wget https://book.world.dev.cardano.org/environments/preprod/alonzo-genesis.json
wget https://book.world.dev.cardano.org/environments/preprod/conway-genesis.json
```

Enable TraceBlockFetchDecisions, listen on all interfaces and change the ports for hasEKG and hasPrometheus.

```bash title=">_ Terminal"
sed -i config.json \
    -e "s/TraceBlockFetchDecisions\": false/TraceBlockFetchDecisions\": true/g" \
    -e "s/127.0.0.1/0.0.0.0/g" \
    -e "s/12788/12789/g" \
    -e "s/12798/12799/g"
```

</TabItem>
</Tabs>


## Systemd Services to manage cardano-node


<Tabs groupId="NETWORK">
<TabItem value="Preview" label="Preview" default>

```bash title=">_ Terminal"
sudo nano /etc/systemd/system/cardano-preview.service
```

Paste in the following.

```bash title="/etc/systemd/system/cardano-preview.service"
# The Cardano Node Service (part of systemd)
# file: /etc/systemd/system/cardano-node.service

[Unit]
Description     = Cardano preview service
Wants           = network-online.target
After           = network-online.target

[Service]
User            = ubuntu
Type            = simple
WorkingDirectory= /home/ubuntu/preview-pool
ExecStart       = /bin/bash -c "PATH=/home/ubuntu/.local/bin:$PATH exec /home/ubuntu/.local/bin/preview-service"
KillSignal=SIGINT
RestartKillSignal=SIGINT
TimeoutStopSec=60
LimitNOFILE=32768
Restart=always
RestartSec=60
EnvironmentFile=-/home/ubuntu/preview-pool/.adaenv

[Install]
WantedBy= multi-user.target
```

Reload systemd to pick up changes.

```bash title=">_ Terminal"
sudo systemctl daemon-reload
```

</TabItem>
<TabItem value="Preprod" label="Preprod" default>

```bash title=">_ Terminal"
sudo nano /etc/systemd/system/cardano-preprod.service
```

Paste in the following.


```bash title="/etc/systemd/system/cardano-preprod.service"
# The Cardano Node Service (part of systemd)
# file: /etc/systemd/system/cardano-node.service

[Unit]
Description     = Cardano preprod service
Wants           = network-online.target
After           = network-online.target

[Service]
User            = ubuntu
Type            = simple
WorkingDirectory= /home/ubuntu/preprod-pool
ExecStart       = /bin/bash -c "PATH=/home/ubuntu/.local/bin:$PATH exec /home/ubuntu/.local/bin/preprod-service"
KillSignal=SIGINT
RestartKillSignal=SIGINT
TimeoutStopSec=60
LimitNOFILE=32768
Restart=always
RestartSec=60
EnvironmentFile=-/home/ubuntu/preprod-pool/.adaenv

[Install]
WantedBy= multi-user.target
```

Reload systemd to pick up changes.

```bash title=">_ Terminal"
sudo systemctl daemon-reload
```

</TabItem>
</Tabs>

## cardano-node Startup Scripts

cardano node will run as a relay here. Starting this script with KES, VRF and OPCERT variables uncommented will start cardano-node as a core (block producer).

<Tabs groupId="NETWORK">
<TabItem value="Preview" label="Preview" default>

```bash title=">_ Terminal"
nano ~/.local/bin/preview-service
```

```bash title="/home/ubuntu/.local/bin/preview-service"
#!/bin/bash
. /home/ubuntu/preview-pool/.adaenv

## +RTS -N4 -RTS = Multicore(4)
cardano-node run +RTS -N4 -RTS \
  --topology ${TOPOLOGY} \
  --database-path ${DB_PATH} \
  --socket-path ${CARDANO_NODE_SOCKET_PATH} \
  --host-addr 0.0.0.0 \
  --port ${NODE_PORT} \
  --config ${CONFIG}
#  --shelley-kes-key ${KES} \
#  --shelley-vrf-key ${VRF} \
#  --shelley-operational-certificate ${CERT}
```

```bash title=">_ Terminal"
chmod +x ${HOME}/.local/bin/preview-service
```

</TabItem>
<TabItem value="Preprod" label="Preprod" default>

```bash title=">_ Terminal"
nano ~/.local/bin/preprod-service
```

```bash title="/home/ubuntu/.local/bin/preprod-service"
#!/bin/bash
. /home/ubuntu/preprod-pool/.adaenv

## +RTS -N4 -RTS = Multicore(4)
cardano-node run +RTS -N4 -RTS \
  --topology ${TOPOLOGY} \
  --database-path ${DB_PATH} \
  --socket-path ${CARDANO_NODE_SOCKET_PATH} \
  --host-addr 0.0.0.0 \
  --port ${NODE_PORT} \
  --config ${CONFIG}
#  --shelley-kes-key ${KES} \
#  --shelley-vrf-key ${VRF} \
#  --shelley-operational-certificate ${CERT}
```

```bash title=">_ Terminal"
chmod +x ${HOME}/.local/bin/preprod-service
```

</TabItem>
</Tabs>

## Download prebuilt static binaries.

Here you can either build libsodium and secp256k1 libraries, link them, install GHCUP, install GHC and Cabal and build the binaries yourself...
or just download a set of statically linked binaries built by the Armada alliance. This guide is taking the easy route...building them on a Pi takes 10 hours or so. The set we will be using are built by an IOG engineer in his spare time on his own infrastructure. Follow the [Oracle guide](https://armada-alliance.com/docs/stake-pool-guides/oracle-ampere) if you want the "full" build your own binary experience.

```bash title=">_ Terminal"
cd ${HOME}/tmp
wget -c https://github.com/armada-alliance/cardano-node-binaries/blob/main/static-binaries/cardano-10_7_1-aarch64-static-musl-ghc_9122.tar.zst?raw=true -O - | tar -I zstd -xv
mv cardano-node/* ${HOME}/.local/bin
```
Confirm Binaries are in $PATH.

```bash title=">_ Terminal"
cardano-node version
cardano-cli version
```

### Start up node on both networks

<Tabs groupId="NETWORK">
<TabItem value="Preview" label="Preview" default>

```bash title=">_ Terminal"
sudo systemctl start cardano-preview.service
sudo systemctl status cardano-preview.service
```
If status is green running go ahead and enable it to run on system startup.

```bash title=">_ Terminal"
sudo systemctl enable cardano-preview.service
```

</TabItem>
<TabItem value="Preprod" label="Preprod" default>

```bash title=">_ Terminal"
sudo systemctl start cardano-preprod.service
sudo systemctl status cardano-preprod.service
```
If status is green running go ahead and enable it to run on system startup.

```bash title=">_ Terminal"
sudo systemctl enable cardano-preprod.service
```

</TabItem>
</Tabs>

### gliveView & env

Download the gLiveView.sh script and it's accompanying env file.

<Tabs groupId="NETWORK">
<TabItem value="Preview" label="Preview" default>

```bash title=">_ Terminal"
cd ${HOME}/preview-pool/scripts
wget https://raw.githubusercontent.com/cardano-community/guild-operators/master/scripts/cnode-helper-scripts/env
wget https://raw.githubusercontent.com/cardano-community/guild-operators/master/scripts/cnode-helper-scripts/gLiveView.sh
. ~/preview-pool/.adaenv
```
Add a line sourcing our .adaenv file to the top of the env file and adjust some paths. use 'nano env' to open and inspect.

```bash title=">_ Terminal"
sed -i env \
    -e "/#CNODEBIN/i. ${HOME}/preview-pool/.adaenv" \
    -e "s/\#CNODE_HOME=\"\/opt\/cardano\/cnode\"/CNODE_HOME=\"\${HOME}\/preview-pool\"/g" \
    -e "s/\#CNODE_PORT=6000"/CNODE_PORT=\"'${NODE_PORT}'\""/g" \
    -e "s/\#CONFIG=\"\${CNODE_HOME}\/files\/config.json\"/CONFIG=\"\${NODE_FILES}\/config.json\"/g" \
    -e "s/\#SOCKET=\"\${CNODE_HOME}\/sockets\/node0.socket\"/SOCKET=\"\${CNODE_HOME}\/db\/socket\"/g" \
    -e "s/\#TOPOLOGY=\"\${CNODE_HOME}\/files\/topology.json\"/TOPOLOGY=\"\${NODE_FILES}\/topology.json\"/g" \
    -e "s/\#LOG_DIR=\"\${CNODE_HOME}\/logs\"/LOG_DIR=\"\${CNODE_HOME}\/logs\"/g" \
    -e "s/\#EKG_HOST"/EKG_HOST"/g" \
    -e "s/\#EKG_PORT"/EKG_PORT"/g" \
    -e "s/\#PROM_HOST"/PROM_HOST"/g" \
    -e "s/\#PROM_PORT"/PROM_PORT"/g"
```

Allow execution of gLiveView.sh.

```bash title=">_ Terminal"
chmod +x gLiveView.sh
```

Run the script. You do not have any inbound connections. Just confirm it's running and following tip of chain(synced).

```bash title=">_ Terminal"
./gLiveView.sh
```

</TabItem>
<TabItem value="Preprod" label="Preprod" default>

```bash title=">_ Terminal"
cd ${HOME}/preprod-pool/scripts
wget https://raw.githubusercontent.com/cardano-community/guild-operators/master/scripts/cnode-helper-scripts/env
wget https://raw.githubusercontent.com/cardano-community/guild-operators/master/scripts/cnode-helper-scripts/gLiveView.sh
. ~/preprod-pool/.adaenv
```
Add a line sourcing our .adaenv file to the top of the env file and adjust some paths. use 'nano env' to open and inspect.

```bash title=">_ Terminal"
sed -i env \
    -e "/#CNODEBIN/i. ${HOME}/preprod-pool/.adaenv" \
    -e "s/\#CNODE_HOME=\"\/opt\/cardano\/cnode\"/CNODE_HOME=\"\${HOME}\/preprod-pool\"/g" \
    -e "s/\#CNODE_PORT=6000"/CNODE_PORT=\"'${NODE_PORT}'\""/g" \
    -e "s/\#CONFIG=\"\${CNODE_HOME}\/files\/config.json\"/CONFIG=\"\${NODE_FILES}\/config.json\"/g" \
    -e "s/\#SOCKET=\"\${CNODE_HOME}\/sockets\/node0.socket\"/SOCKET=\"\${CNODE_HOME}\/db\/socket\"/g" \
    -e "s/\#TOPOLOGY=\"\${CNODE_HOME}\/files\/topology.json\"/TOPOLOGY=\"\${NODE_FILES}\/topology.json\"/g" \
    -e "s/\#LOG_DIR=\"\${CNODE_HOME}\/logs\"/LOG_DIR=\"\${CNODE_HOME}\/logs\"/g" \
    -e "s/\#EKG_PORT=12788"/EKG_PORT=\"12789\""/g" \
    -e "s/\#PROM_PORT=12798"/PROM_PORT=\"12799\""/g"
```

Allow execution of gLiveView.sh.

```bash title=">_ Terminal"
chmod +x gLiveView.sh
```

Run the script. You do not have any inbound connections. Just confirm it's running and following tip of chain(synced).

```bash title=">_ Terminal"
./gLiveView.sh
```

</TabItem>
</Tabs>

### Install/Configure SPO Scripts

```bash title=">_ Terminal"
mkdir -p ~/stakepoolscripts/bin
cd $HOME/stakepoolscripts
git init && git remote add origin https://github.com/gitmachtl/scripts.git
git fetch origin && git reset --hard origin/master
cp cardano/testnet/* bin/
# Remove the x86 binaries. We need arm builds.
rm ~/stakepoolscripts/bin/cardano-address bech32 token-metadata-creator catalyst-toolbox cardano-signer
```

### To Upgrade Stakepool Scripts

```bash title=">_ Terminal"
cd $HOME/stakepoolscripts
git fetch origin && git reset --hard origin/master
cp cardano/testnet/* bin/
# Remove the x86 binaries. To continue using the ones in ~/.local/bin.
rm ~/stakepoolscripts/bin/cardano-address bech32 token-metadata-creator catalyst-toolbox cardano-signer
```

Add the bin directory to your PATH.

```bash title=">_ Terminal"
cd ~/stakepoolscripts/bin
echo "export PATH=\"$PWD:\$PATH\"" >> $HOME/.bashrc
export PATH="$PWD:$PATH"
```

### Build ARM cardano-signer

This is a javascript project and we need npm to build.

```bash title=">_ Terminal"
sudo snap install node --classic
cd $HOME/git
git clone https://github.com/gitmachtl/cardano-signer.git
cd cardano-signer/src
npm i pkg -D -S
npm install
node_modules/.bin/pkg cardano-signer.js
mv cardano-signer-linux ~/.local/bin/cardano-signer
chmod +x ~/.local/bin/cardano-signer
. ~/.bashrc
# test
cardano-signer
```

Create a file named common.inc in each pool folder.

<Tabs groupId="NETWORK">
<TabItem value="Preview" label="Preview" default>

```bash title=">_ Terminal"
nano ~/preview-pool/common.inc
```

This common.inc environment file will be read by SPO scripts if it is present in the calling directory. Inspect the top of the file for more information. Basically a copy of this file for the intended network can be put in your project folder and the correct network will be used. Here we have a copy in each pool folder where we will be creating pool and wallets. If you want a subdirectory of the pool folder to hold wallet or asset files put a copy of the common.inc file in the subdirectory as well.

```bash title="/home/ubuntu/preview-pool/common.inc"
#!/bin/bash
unset magicparam network addrformat

##############################################################################################################################
#
# MAIN CONFIG FILE:
#
# Please set the following variables to your needs, you can overwrite them dynamically
# by placing a file with name "common.inc" in the calling directory or in "$HOME/.common.inc".
# It will be sourced into this file automatically if present and can overwrite the values below dynamically :-)
#
##############################################################################################################################


#--------- Set the Path to your node socket file and to your genesis files here ---------
socket="/home/ubuntu/preview-pool/db/socket" #Path to your cardano-node socket for machines in online-mode. Another example would be "$HOME/cnode/sockets/node.socket"
genesisfile="/home/ubuntu/preview-pool/files/shelley-genesis.json"           #Shelley-Genesis path, you can also use the placeholder $HOME to specify your home directory
genesisfile_byron="/home/ubuntu/preview-pool/files/byron-genesis.json"       #Byron-Genesis path, you can also use the placeholder $HOME to specify your home directory


#--------- Set the Path to your main binaries here ---------
cardanocli="cardano-cli"	#Path to your cardano-cli binary you wanna use. If your binary is present in the Path just set it to "cardano-cli" without the "./" infront
cardanonode="cardano-node"	#Path to your cardano-node binary you wanna use. If your binary is present in the Path just set it to "cardano-node" without the "./" infront
bech32_bin="bech32"		#Path to your bech32 binary you wanna use. If your binary is present in the Path just set it to "bech32" without the "./" infront
cardanosigner="cardano-signer"


#--------- You can work in offline mode too, please read the instructions on the github repo README :-)
offlineMode="no" 			#change this to "yes" if you run these scripts on a cold machine, it need a counterpart with set to "no" on a hot machine
offlineFile="./offlineTransfer.json" 	#path to the filename (JSON) that will be used to transfer the data between a hot and a cold machine


#network="Mainnet" 	#Mainnet (Default)
#network="PreProd" 	#PreProd (new default Testnet)
network="Preview"	#Preview (new fast Testnet)
#network="Vasil-Dev"	#Vasil-Dev TestChain
#network="Legacy"	#Legacy TestChain (formally known as Public-Testnet)

#--------- You can of course specify your own values by setting a new network=, magicparam=, addrformat= and byronToShelleyEpochs= parameter :-)
#network="new-devchain"; magicparam="--testnet-magic 11111"; addrformat="--testnet-magic 11111"; byronToShelleyEpochs=6 #Custom Chain settings


#--------- some other stuff -----
showVersionInfo="yes"		#yes/no to show the version info and script mode on every script call
queryTokenRegistry="yes"	#yes/no to query each native asset/token on the token registry server live
cropTxOutput="yes"		#yes/no to crop the unsigned/signed txfile outputs on transactions to a max. of 4000chars
```

Test the scripts are configured correctly by issuing..

```bash title=">_ Terminal"
cd ~/preview-pool
00_common.sh
```

Should see Version-Info:, Scripts-Mode: and the network that was queried. If there is something wrong you will see a mushroom cloud and hopefully a clue how to fix the issue.

</TabItem>
<TabItem value="Preprod" label="Preprod" default>

```bash title=">_ Terminal"
nano ~/preprod-pool/common.inc
```

This common.inc environment file will be read by SPO scripts if it is present in the calling directory. Inspect the top of the file for more information. Basically a copy of this file for the intended network can be put in your project folder and the correct network will be used. Here we have a copy in each pool folder where we will be creating pool and wallets. If you want a subdirectory of the pool folder to hold wallet or asset files put a copy of the common.inc file in the subdirectory as well.


```bash title="/home/ubuntu/preprod-pool/common.inc"
#!/bin/bash
unset magicparam network addrformat

##############################################################################################################################
#
# MAIN CONFIG FILE:
#
# Please set the following variables to your needs, you can overwrite them dynamically
# by placing a file with name "common.inc" in the calling directory or in "$HOME/.common.inc".
# It will be sourced into this file automatically if present and can overwrite the values below dynamically :-)
#
##############################################################################################################################


#--------- Set the Path to your node socket file and to your genesis files here ---------
socket="/home/ubuntu/preprod-pool/db/socket" #Path to your cardano-node socket for machines in online-mode. Another example would be "$HOME/cnode/sockets/node.socket"
genesisfile="/home/ubuntu/preprod-pool/files/shelley-genesis.json"           #Shelley-Genesis path, you can also use the placeholder $HOME to specify your home directory
genesisfile_byron="/home/ubuntu/preprod-pool/files/byron-genesis.json"       #Byron-Genesis path, you can also use the placeholder $HOME to specify your home directory



#--------- Set the Path to your main binaries here ---------
cardanocli="cardano-cli"	#Path to your cardano-cli binary you wanna use. If your binary is present in the Path just set it to "cardano-cli" without the "./" infront
cardanonode="cardano-node"	#Path to your cardano-node binary you wanna use. If your binary is present in the Path just set it to "cardano-node" without the "./" infront
bech32_bin="bech32"		#Path to your bech32 binary you wanna use. If your binary is present in the Path just set it to "bech32" without the "./" infront
cardanosigner="cardano-signer"


#--------- You can work in offline mode too, please read the instructions on the github repo README :-)
offlineMode="no" 			#change this to "yes" if you run these scripts on a cold machine, it need a counterpart with set to "no" on a hot machine
offlineFile="./offlineTransfer.json" 	#path to the filename (JSON) that will be used to transfer the data between a hot and a cold machine


#------------------------------------------------------------------------------------------------------------------------------------------------------------------------


#--------- Only needed if you wanna do catalyst voting or if you wanna include your itn witness for your pool-ticker
jcli_bin="./jcli"               #Path to your jcli binary you wanna use. If your binary is present in the Path just set it to "jcli" without the "./" infront
catalyst_toolbox_bin="./catalyst-toolbox"	#Path to your catalyst-toolbox binary you wanna use. If your binary is present in the Path just set it to "catalyst-toolbox" without the "./" infront
voter_registration_bin="./voter-registration"	#Path to your voter-registration binary you wanna use. If your binary is present in the Path just set it to "voter-registration" without the "./" infront


#--------- Only needed if you wanna use a hardware key (Ledger/Trezor) too, please read the instructions on the github repo README :-)
cardanohwcli="cardano-hw-cli"      #Path to your cardano-hw-cli binary you wanna use. If your binary is present in the Path just set it to "cardano-hw-cli" without the "./" infront


#--------- Only needed if you wanna generate the right format for the NativeAsset Metadata Registry
cardanometa="token-metadata-creator" #Path to your token-metadata-creator binary you wanna use. If present in the Path just set it to "token-metadata-creator" without the "./" infront

#--------- Only needed if you wanna change the BlockChain from the Mainnet to a Testnet Chain Setup, uncomment the network you wanna use by removing the leading #
#          Using a preconfigured network name automatically loads and sets the magicparam, addrformat and byronToShelleyEpochs parameters, also API-URLs, etc.

#network="Mainnet" 	#Mainnet (Default)
network="PreProd" 	#PreProd (new default Testnet)
#network="Preview"	#Preview (new fast Testnet)
#network="Vasil-Dev"	#Vasil-Dev TestChain
#network="Legacy"	#Legacy TestChain (formally known as Public-Testnet)

#--------- You can of course specify your own values by setting a new network=, magicparam=, addrformat= and byronToShelleyEpochs= parameter :-)
#network="new-devchain"; magicparam="--testnet-magic 11111"; addrformat="--testnet-magic 11111"; byronToShelleyEpochs=6 #Custom Chain settings



#--------- some other stuff -----
showVersionInfo="yes"		#yes/no to show the version info and script mode on every script call
queryTokenRegistry="yes"	#yes/no to query each native asset/token on the token registry server live
cropTxOutput="yes"		#yes/no to crop the unsigned/signed txfile outputs on transactions to a max. of 4000chars
```

Test the scripts are configured correctly by issuing..

```bash title=">_ Terminal"
cd ~/preprod-pool
00_common.sh
```

Should see Version-Info:, Scripts-Mode: and the network that was queried. If there is something wrong you will see a mushroom cloud and hopefully a clue how to fix the issue.

</TabItem>
</Tabs>

### Static Server IP & Port Forwarding

Now would be a good time to forward ports to your Raspberry Pi. 3000, 3001, 443, 80. If you own a domain setup your DNS records.

### Install Prometheus & Node Exporter.

:::info
Prometheus can scrape the http endpoints of other servers running node exporter. Meaning Grafana and Prometheus does not have to be installed on your core and relays. Only the package prometheus-node-exporter is required if you would like to build a central Grafana dashboard for the pool, freeing up resources and having a single dashboard to monitor everything.
:::

```bash title=">_ Terminal"
sudo apt install prometheus prometheus-node-exporter -y
```

Disable them in systemd for now.

```bash title=">_ Terminal"
sudo systemctl disable prometheus.service
sudo systemctl disable prometheus-node-exporter.service
```

### Configure Prometheus

Open prometheus.yml.

```bash title=">_ Terminal"
sudo nano /etc/prometheus/prometheus.yml
```

Replace the contents of the file with.

:::caution

Indentation must be correct YAML format or Prometheus will fail to start.

:::

```yaml title="/etc/prometheus/prometheus.yml"
global:
  scrape_interval: 15s # By default, scrape targets every 15 seconds.

  # Attach these labels to any time series or alerts when communicating with
  # external systems (federation, remote storage, Alertmanager).
  external_labels:
    monitor: "codelab-monitor"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label job=<job_name> to any timeseries scraped from this config.
  - job_name: "Prometheus" # To scrape data from Prometheus Node Exporter
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:12798']
        labels:
          alias: 'Preview'
          type:  'cardano-node'
      - targets: ['localhost:12799']
        labels:
          alias: 'Preprod'
          type:  'cardano-node'

      - targets: ["localhost:9100"]
        labels:
          alias: "Ubuntu"
          type: "node"
```

Save & exit.

Start Prometheus.

```bash title=">_ Terminal"
sudo systemctl start prometheus.service
```

### Install Grafana

:::tip GRAFANA REPOSITORY

[https://github.com/grafana/grafana](https://github.com/grafana/grafana)

:::

Add Grafana's gpg key to Ubuntu.

```bash title=">_ Terminal"
sudo su
wget -O- https://packages.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyring.gpg
```

Add latest stable repo to apt sources.

```bash title=">_ Terminal"
echo "deb [arch=arm64 signed-by=/usr/share/keyrings/grafana-archive-keyring.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
```

Update your package lists & install Grafana.

```bash title=">_ Terminal"
sudo apt update; sudo apt install grafana
```

Change the port Grafana listens on so it does not clash with cardano-node.

```bash title=">_ Terminal"
sudo sed -i /etc/grafana/grafana.ini \
         -e "s#;http_port#http_port#" \
         -e "s#3000#5000#"
```

Add a few bash functions to the bottom of .bashrc

```bash title=">_ Terminal"
nano ~/.bashrc
```

Ad these to the bottom.

```bash title=">_ Terminal"
cardano-service() {
  #do things with parameters like $1 such as
  sudo systemctl "$1" cardano-preprod.service
  sudo systemctl "$1" cardano-preview.service
}

cardano-monitor() {
  #do things with parameters like $1 such as
  sudo systemctl "$1" prometheus.service
  sudo systemctl "$1" prometheus-node-exporter.service
  sudo systemctl "$1" grafana-server.service
}

cardano-reload() {
  # Reload P2P networking without restarting node...hot load peers
  CPID=$(pidof cardano-node)
  kill -SIGHUP ${CPID}
  echo ${CPID}
}

```

source those changes into your current shell environment.

```bash title=">_ Terminal"
source ~/.bashrc
```

Enable cardano and monitoring services to start at boot.

```bash title=">_ Terminal"
cardano-service enable
cardano-monitor enable
```

# This is where I created an img file



# work in progress stay tuned

<Tabs groupId="NETWORK">
<TabItem value="Preview" label="Preview" default>

```bash title=">_ Terminal"
nano .local/bin/preview-service
```

```bash title="/home/ubuntu/preview-pool/.adaenv"
some file
```

</TabItem>
<TabItem value="Preprod" label="Preprod" default>

```bash title=">_ Terminal"
some terminal
```

```bash title="/home/ubuntu/preprod-pool/.adaenv"
some file
```

</TabItem>
</Tabs>

<Tabs groupId="NETWORK">
<TabItem value="Preview" label="Preview" default>

```bash title=">_ Terminal"
nano .local/bin/preview-service
```

```bash title="/home/ubuntu/preview-pool/.adaenv"
some file
```

</TabItem>
<TabItem value="Preprod" label="Preprod" default>

```bash title=">_ Terminal"
some terminal
```

```bash title="/home/ubuntu/preprod-pool/.adaenv"
some file
```

</TabItem>
</Tabs>








