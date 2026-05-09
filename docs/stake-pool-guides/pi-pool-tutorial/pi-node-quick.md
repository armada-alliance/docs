---
description: Quickly bootstrap a synced configured Cardano node in a few hours.
keywords: [guides, cardano node, cardano stake pool, rasbperry pi, armada alliance, ubuntu]
---

# Pi-Node (Image Quick Start)

:::info

After booting the image you can edit the ~/.adaenv file to switch to mainnet. Image defaults to testnet. Source .bashrc to load changes to .adaenv. You can then choose to start the node and sync the whole chain which will take days or you can download the snapshot for mainnet or testnet which should reduce sync time to a couple hours.

Check if process is running with htop, use gLiveView.sh or follow the systemd service with

```bash title=">_ Terminal"
journalctl -f --output=cat -u cardano-node
```

It is best to just leave it running. 🏃

:::

### **1. Download and flash the** [**Pi-Node.img.gz**](https://mainnet.adamantium.online/Pi-Node.img.gz)**.**

### 2. ssh into the server.

```bash title=">_ Terminal"
ssh ada@<pi-node private IPv4>
```

Default credentials = **ada:lovelace**

:::caution

Check which version of cardano-node is on the image. Follow the static build upgrade instructions to upgrade. [static-build.md](../updating-a-cardano-node/static-build.mdx "mention")

:::

```bash title=">_ Terminal"
cardano-node version
```

## Choose testnet or mainnet. 

### **Defaults to testnet**.

Switch between testnet & mainnet, for mainnet issue..

Config file path /home/ada/.adaenv edit manually or run

```bash title=">_ Terminal"
sed -i .adaenv -e "s/NODE_CONFIG=testnet/NODE_CONFIG=mainnet/g"; source .adaenv
```

### Retrieve node files

```bash title=">_ Terminal"
cd $NODE_FILES
BASE_URL="https://book.world.dev.cardano.org/environments/${NODE_CONFIG}"
wget -N ${BASE_URL}/config.json && mv config.json ${NODE_CONFIG}-config.json
wget -N ${BASE_URL}/byron-genesis.json && mv byron-genesis.json ${NODE_CONFIG}-byron-genesis.json
wget -N ${BASE_URL}/shelley-genesis.json && mv shelley-genesis.json ${NODE_CONFIG}-shelley-genesis.json
wget -N ${BASE_URL}/alonzo-genesis.json && mv alonzo-genesis.json ${NODE_CONFIG}-alonzo-genesis.json
wget -N ${BASE_URL}/conway-genesis.json && mv conway-genesis.json ${NODE_CONFIG}-conway-genesis.json
wget -N ${BASE_URL}/topology.json && mv topology.json ${NODE_CONFIG}-topology.json
wget -N https://raw.githubusercontent.com/IntersectMBO/cardano-node/master/cardano-submit-api/config/tx-submit-mainnet-config.yaml
```

Run the following to modify $\{NODE_CONFIG}-config.json and update TraceBlockFetchDecisions to "true" & listen on all interfaces with Prometheus Node Exporter.

```bash title=">_ Terminal"
sed -i ${NODE_CONFIG}-config.json \
    -e "s/TraceBlockFetchDecisions\": false/TraceBlockFetchDecisions\": true/g" \
    -e "s/127.0.0.1/0.0.0.0/g"
```

### 3. Enter the pi-pool folder.

```bash title=">_ Terminal"
cd /home/ada/pi-pool
```

### 4. Download ledger snapshot.

```bash title=">_ Terminal"
wget -r -np -nH -R "index.html*" -e robots=off https://$NODE_CONFIG.adamantium.online/db/
```

### 5. Enable & start the cardano-service.

```bash title=">_ Terminal"
cardano-service enable
cardano-service start
```

### 6. Enable & start the cardano-monitor.

```bash title=">_ Terminal"
cardano-monitor enable
cardano-monitor start
```

### 7. Confirm they are running.

```bash title=">_ Terminal"
cardano-service status
cardano-monitor status
```

Follow journal output or syslog

```bash title=">_ Terminal"
sudo journalctl -f --output=cat -u cardano-node
sudo tail -f /var/log/syslog
```

### 8. gliveview.sh
Allow these files to update if they wish to.

```bash title=">_ Terminal"
cd $NODE_HOME/scripts
./gLiveView.sh
```

### 9. Grafana.

Enter your Node's IPv4 address in your browser.

Default credentials = **admin:admin**

:::tip Dashboards and pooldata api info can be found here.

[https://github.com/armada-alliance/dashboards](https://github.com/armada-alliance/dashboards)

[https://api.pooldata.live/](https://api.pooldata.live/)

:::