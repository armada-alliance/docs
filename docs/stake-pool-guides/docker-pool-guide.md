---
description: Running a Cardano full node with a Docker image
---

# Cardano Node Docker Image for ARM64 devices 🐳

:::warning
The `armadaalliance/armada-cn` Docker image is no longer actively maintained. The latest published tag is **8.7.2**. For a current node deployment, use the [static build guide](./updating-a-cardano-node/static-build.mdx) or the [pi-pool tutorial](./pi-pool-tutorial/) instead.
:::

In this project you will find the instructions to build a docker image on Linux containing all the needed files to run a Cardano full node.
The docker image can run on any arm64 device such as a Mac Mini M1. The node can be configured as a relay or block production node.

## Why using docker image to run a Cardano node?

The advantage of deploying a Cardano node as a Docker image is, that it can be installed seamlessly and launched right out of the box. 
If you ever decide to remove it, you only have to delete one file - the image. Another advantage is that the created image can run on any 
operating system where Docker is installed. Using our Docker image reduces the complexity and effort of setting up a Cardano node compared to the traditional way 
(for example, you don't have to deal with systemd settings).

## System requirements

* CPU: ARM64 processor min 2 cores at 2GHz or faster.
* Memory: 24GB of RAM.
* Storage: 150 GB.
* OS: Linux (recommended Ubuntu)
* Additional Software: Docker
* Broadband: 10 Mbps +


# 1.Install Docker

The installation of Docker varies from operating system to operating system. For this reason, we share some helpful and good installation 
guide links for the different operating systems.

* [Install Docker on Linux (Ubuntu)](https://github.com/speedwing/cardano-staking-pool-edu/blob/master/DOCKER.md)
* [Install Docker on MacOs](https://docs.docker.com/desktop/mac/install/)
* [Install Docker on Windows](https://docs.docker.com/desktop/windows/install/)

# 2. Set-up the Environment & Download Files

Create the repositories on your host system first. They will hold the files to build the docker image as well as the Cardano node configuration files.

```bash title=">_ Terminal"
cd ${HOME}
sudo mkdir Cardano-node-docker
cd Cardano-node-docker
sudo mkdir -p node/db && sudo mkdir -p node/files && sudo mkdir -p dockerfiles/files
```  

The files to build the docker images will be downloaded from [MINI1 pool GitHub](https://github.com/jterrier84/Cardano-node-docker)

:::caution

⚠️ If there's a newer version of the cardano-node released, you may have to fork and manually update jterrier84's Cardano-node-docker repo (build.sh and run.sh files) -- Or open an Issue.

:::

```bash title=">_ Terminal"
cd dockerfiles
sudo wget -N https://raw.githubusercontent.com/jterrier84/Cardano-node-docker/master/dockerfiles/armada-cn-arm64.dockerfile
sudo wget -N https://raw.githubusercontent.com/jterrier84/Cardano-node-docker/master/dockerfiles/build.sh
sudo chmod +x build.sh
cd files
sudo wget -N https://raw.githubusercontent.com/jterrier84/Cardano-node-docker/master/dockerfiles/files/run.sh
sudo wget -N https://raw.githubusercontent.com/jterrier84/Cardano-node-docker/master/dockerfiles/files/tx-submit-service
sudo chmod +x run.sh
sudo chmod +x tx-submit-service
cd ${HOME}/Cardano-node-docker/node
sudo wget -N https://raw.githubusercontent.com/jterrier84/Cardano-node-docker/master/node/run-node.sh
sudo chmod +x run-node.sh
```

Download the latest official Cardano node configuration files from the IOHK repository and store them on our host system.

:::tip

For the sake of this tutorial we will download and set up the configuration files for the Cardano testnet/preprod. If you need the files for the mainnet
just replace "preprod" with "mainnet" here below.

:::

:::tip

As the configuration files might require modifications over time, it is way more practical to have them stored on the host, 
rather than have them stored inside the Docker container. Our Cardano Docker node will have access to these files from the container. 

:::

```bash title=">_ Terminal"
cd ${HOME}/Cardano-node-docker/node/files
export NODE_CONFIG="preprod"
sudo curl -O -J https://book.world.dev.cardano.org/environments/${NODE_CONFIG}/config.json && sudo mv config.json ${NODE_CONFIG}-config.json
sudo curl -O -J https://book.world.dev.cardano.org/environments/${NODE_CONFIG}/db-sync-config.json
sudo curl -O -J https://book.world.dev.cardano.org/environments/${NODE_CONFIG}/submit-api-config.json
sudo curl -O -J https://book.world.dev.cardano.org/environments/${NODE_CONFIG}/topology.json && sudo mv topology.json ${NODE_CONFIG}-topology.json
sudo curl -O -J https://book.world.dev.cardano.org/environments/${NODE_CONFIG}/byron-genesis.json
sudo curl -O -J https://book.world.dev.cardano.org/environments/${NODE_CONFIG}/shelley-genesis.json
sudo curl -O -J https://book.world.dev.cardano.org/environments/${NODE_CONFIG}/alonzo-genesis.json
sudo curl -O -J https://book.world.dev.cardano.org/environments/${NODE_CONFIG}/conway-genesis.json
sudo wget -O tx-submit-mainnet-config.yaml https://raw.githubusercontent.com/IntersectMBO/cardano-node/master/cardano-submit-api/config/tx-submit-mainnet-config.yaml
```

:::tip

- The directory /files contains the Cardano node configuration files.

- The directory /db will host the Cardano blockchain once the Docker node is started. It is important that the blockchain data 
are stored on the host system and not inside the Docker container, otherwise the entire blockchain would be deleted every time 
the Docker container is removed.

:::

# 3. The Armada Node Docker Image

Now it's time to create the docker image. There are two ways to do this. 

1) Pull the pre-built docker image from our Armada Docker Hub repository (easiest and fastest option) (go to chapter 3.1)

2) Build the docker image by yourself (go to chapter 3.2) 

Either way, the docker image includes:

1. cardano-node & cardano-cli (latest version) - Cardano binaries to run the node (Download compiled binaries from [Armada Alliance GitHub](https://github.com/armada-alliance/cardano-node-binaries)) 
2. gLiveView - Monitoring tool for the Cardano node
3. YaLL - Tool to query the scheduled slots for a block production node. (Credits for this tool goes to [SNAKE POOL](https://github.com/asnakep/YaLL.git))
4. Cardano Submit Transaction API - API to connect with a Cardano wallet (e.g. Nami) to send transactions via your own full node

## 3.1. Pull the built docker image

Pull the image with:

```bash
docker pull armadaalliance/armada-cn:8.7.2
```

You should see your Cardano node docker image in the list:

```bash
docker images
```

```bash
REPOSITORY              TAG            IMAGE ID       CREATED          SIZE
armadaalliance/armada-cn        8.7.2         da4414775ce6   37 seconds ago   700MB
```

You can now proceed with chapter 4, in order to start the node.

## 3.2. Build the docker image

```bash title=">_ Terminal"
cd ${HOME}/Cardano-node-docker/dockerfiles
sudo ./build.sh
```
The process might take some minutes.

Once the process is done, you can use the command to see the list of all Docker images on your host system:

```bash title=">_ Terminal"
docker images
```

You should see your Cardano node docker image in the list, e.g.

```bash title=">_ Terminal"
REPOSITORY              TAG            IMAGE ID       CREATED          SIZE
armadaalliance/armada-cn        8.7.2         da4414775ce6   37 seconds ago   700MB
<none>                  <none>         f3891eef21e4   3 minutes ago    1.09GB
```

All we need is the "armada/armada-cn" image. You can delete the others in the list to free up space on your harddrive, e.g.

```bash title=">_ Terminal"
docker rmi f3891eef21e4 
```

# 4. Start node

Let's first configure the run-node.sh script to match your host system environment.

```bash title=">_ Terminal"
cd ${HOME}/Cardano-node-docker/node
sudo nano run-node.sh
```

Edit the configuration section according to your setup.

:::tip

If you are running the node as relay node, you can ignore the paramter CN_KEY_PATH.

:::

:::caution

Important: Change the directory paths CN_CONFIG_PATH and CN_DB_PATH to the corresponding locations on your host. 

:::

```bash title=">_ Terminal"
##Configuration for relay and block producing node
CNIMAGENAME="armada/armada-cn"                                   ## Name of the Cardano docker image
CNVERSION="8.7.2"                                                ## Version of the cardano-node. It must match with the version of the docker i>
CNNETWORK="preprod"                                              ## Use "mainnet" if connecting node to the mainnet
CNMODE="relay"                                                   ## Use "bp" if you configure the node as block production node
CNPORT="3001"                                                    ## Define the port of the node
CNPROMETHEUS_PORT="12799"                                        ## Define the port for the Prometheus metrics
CN_CONFIG_PATH="/home/julienterrier/Cardano-node-docker/node/files" ## Path to the folder where the Cardano config files are stored on the host>
CN_DB_PATH="/home/julienterrier/Cardano-node-docker/node/db"     ## Path to the folder where the Cardano database (blockchain) will be stored o>
CN_RTS_OPTS="+RTS -N2 -I0.1 -Iw3600 -A64m -AL128M -n4m -F1.1 -H3500M -O3500M -RTS"      ## RTS optimization parameters
CN_BF_ID=""                                                      ## Your blockfrost.io project ID (for ScheduledBlock script)
CN_POOL_ID=""                                                    ## Your stake pool ID (for ScheduledBlock script)
CN_POOL_TICKER=""                                                ## Your pool ticker (for ScheduledBlock script)
CN_VRF_SKEY_PATH=""                                              ## Name of the vrf.skey file. It must be located in the same directory as CN_KEY_PATH (for ScheduledBlock script)
CN_KEY_PATH=""                                                   ## Path to the folder where the OP certificate and keys are stored on the host system (for block production node only)
```

After making the changes, save and close the file.

`Ctrl+o & ENTER & Ctrl+x`

You can now run the docker image.

```bash title=">_ Terminal"
sudo ./run-node.sh
```

## Check the running status of the docker container

You can check the running status of the docker container at any time with:

```bash title=">_ Terminal"
docker ps -a
```

If the docker node started successfully, you might see something like this:

```bash title=">_ Terminal"
CONTAINER ID   IMAGE                     COMMAND                  CREATED          STATUS                    PORTS                                                                                      NAMES
fed0cfbf7d86   armadaalliance/armada-cn:8.7.2   "bash title=">_ Terminal" -c /home/carda…"   12 seconds ago   Up 10 seconds (healthy)   0.0.0.0:3001->3001/tcp, :::3001->3001/tcp, 0.0.0.0:12799->12798/tcp, :::12799->12798/tcp   cardano-node-testnet-1.34.1
```

You can also check the logs of the running cardano-node:

```bash title=">_ Terminal"
docker logs -f {CONTAINER ID}
``` 

To exit the logs press `Ctrl+c`

## Stop/Restart/Delete the Docker Cardano node

To stop the running Cardano node execute:

```bash title=">_ Terminal"
docker stop {CONTAINER ID}
```

A stopped container can be started again with:

```bash title=">_ Terminal"
docker start {CONTAINER ID}
```

A stopped container can also be deleted. Once deleted, it can not be started with the command above again.

```bash title=">_ Terminal"
docker rm {CONTAINER ID}
```

If you like to start the node again, after having removed the docker container, just run the run-node.sh script.

```bash title=">_ Terminal"
sudo ${HOME}/Cardano-node-docker/node/run-node.sh
```

## Monitor the Docker Cardano node with gLiveView

While the docker Cardano node is running, you can monitor its status with the tool gLiveView.

```bash title=">_ Terminal"
docker exec -it {CONTAINER ID} /home/cardano/pi-pool/scripts/gLiveView.sh
```

## Check the scheduled slots of the block production node

Our Docker image contains the poolLeaderLogs python script from [SNAKE pool](https://github.com/asnakep/poolLeaderLogs). This tool allows to
query the blockchain for the scheduled slots for your block production node.

Before using the script, make sure that the right configurations are set in our shell script run-node.sh. Set the following variables:

```bash title=">_ Terminal"
CN_POOL_ID="c3e7025ebae638e994c149e5703e82619b31897c9e1d64fc684f81c2"   ## Your stake pool ID (for poolLeaderLogs script)
CN_POOL_TICKER="MINI1"                                                  ## Your pool ticker (for poolLeaderLogs script)
CN_VRF_SKEY_PATH="poolLeaderLogs.vrf.skey"                                        ## Name of the vrf.skey file. It must be located in the same directory as CN_KEY_PATH (for ScheduledBlock script)
CN_KEY_PATH="/home/julienterrier/Cardano-node-docker/node/files/.keys"  ## Path to the folder where the OP certificate and keys are stored on the host system
```

Start the poolLeaderLogs.py script and follow the instructions on the terminal:

```bash title=">_ Terminal"
docker exec -it {CONTAINER ID} python3 /home/cardano/pi-pool/scripts/ScheduledBlocks/poolLeaderLogs.py
```
# Run node in P2P (peer-to-peer) mode

To run your node in the P2P mode, please follow the instructions from the [Armada-Alliance Docs page](https://armada-alliance.com/docs/stake-pool-guides/p2p-networking)

