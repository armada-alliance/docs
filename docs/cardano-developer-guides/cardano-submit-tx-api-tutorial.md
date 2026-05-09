# Cardano Submit Transaction API Tutorial

## Why this Guide?

* This guide is intended to show Raspberry-pi/ARM users how to use the Cardano Submit API with their own running Cardano node to watch for successful transaction submissions while using Nami wallet.

:::caution

In order to follow this guide you need:

1. A raspberry pi 4 or other arm64 based computer
2. Your computer must already have the Cardano Node software actively running and synced to the blockchain
3. You need to install the Nami Wallet google chrome extension from the google app store.

:::

:::caution

If you've set up your node using our [docker image guide](https://docs.armada-alliance.com/learn/stake-pool-guides/docker-pool-guide), you can skip the first part of this guide and jump directly to chapter **Connect the Cardano Submit API with Nami Wallet** below, because the docker image already includes the tx-submit-service.

:::

## Download and Install Cardano Submit API

Download the latest version of the Cardano node, cli, and tx-submit-api from the [Armada Alliance Github repository](https://github.com/armada-alliance/cardano-node-binaries). Install `zstd` first if needed (`sudo apt install zstd`).

```bash title=">_ Terminal"
wget -c https://github.com/armada-alliance/cardano-node-binaries/blob/main/static-binaries/cardano-10_7_1-aarch64-static-musl-ghc_9122.tar.zst?raw=true -O - | tar -I zstd -xv
```

Move `cardano-submit-api` into your PATH.

```bash title=">_ Terminal"
mv ~/cardano-node/cardano-submit-api ~/.local/bin/
rm -r ~/cardano-node
```

## Make a simple bash script to run the Cardano Submit API

You can use whatever text editor you would like and feel free to change the file name if you would like.

```bash title=">_ Terminal"
nano ~/.local/bin/tx-submit-service
```

Next, copy and paste the following into the file:

```bash title=">_ Terminal"
#!/bin/bash

cardano-submit-api \
  --socket-path /home/ada/pi-pool/db/socket \
  --port 8090 \
  --config /home/ada/pi-pool/files/tx-submit-mainnet-config.yaml \
  --listen-address 0.0.0.0 \
  --mainnet
```

:::caution

**Before** you save and exit you need to make sure you have entered the correct **full path** to your Cardano node's `socket` and `tx-submit-mainnet-config.yaml file` because it will be different.

:::



Save and exit. Now we need to give permissions to the file so that it can be executed.

```bash title=">_ Terminal"
chmod +x ~/.local/bin/tx-submit-service
```

## Get the tx-submit-mainnet-config.yaml file from IOG's github repository

```bash title=">_ Terminal"
cd ~/pi-pool/files && wget -O tx-submit-mainnet-config.yaml https://raw.githubusercontent.com/IntersectMBO/cardano-node/master/cardano-submit-api/config/tx-submit-mainnet-config.yaml
```

## Test the Cardano Submit API

Create a tmux session for the Cardano Submit API service.

```bash title=">_ Terminal"
tmux new-session -d -t cardano-submit-api && tmux attach -t cardano-submit-api
```

Run the Cardano Submit API service.

```bash title=">_ Terminal"
~/.local/bin/tx-submit-service
```

You should see the following output in your terminal:

![](https://raw.githubusercontent.com/armada-alliance/assets/gh-pages/cardano-submit-api.png)

## Connect the Cardano Submit API with Nami Wallet

Now you just need to connect the Cardano Submit API with Nami Wallet. Open your browser with your Nami wallet navigate to settings, select network, switch on custom node mode, then enter in `http://localhost:8090/api/submit/tx`.

:::caution

_**If you are using a local network node (i.e. a node running at home in your local network) then you need to enter**** ****`http://x.x.x.x:8090/api/submit/tx`**** ****and replace the**** ****`x.x.x.x`**** ****with the IP address of your local network node.**_

:::

<iframe 
width="100%" 
height="450"
src="https://www.youtube.com/embed/23SDU4dcJr0" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe>

## Test the Cardano Submit API with Nami Wallet

Now that that is setup, let's just test this by sending some ada to ourselves using Nami Wallet. Once you get the tx submitted success notification from Nami wallet, head back to the tmux session you created earlier that is running the cardano-submit-api and look to see if your transaction was submitted. It will output the following log message:

![](https://raw.githubusercontent.com/armada-alliance/assets/gh-pages/tx-submit-success.png)
