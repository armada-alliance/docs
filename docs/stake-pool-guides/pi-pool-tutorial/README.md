---
description: A guide to building a 4 watt per Pi, Cardano Stake Pool.
title: (GUIDE) Cardano Stake Pool with Raspberry Pi 4 
image: /img/star-forge-parts.jpeg
keywords: [guides, cardano stake pool, rasbperry pi, armada alliance, ubuntu]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pi-Node Image & Guide

:::info

The guide builds the image from a fresh install of Ubuntu. If you flashed the image you only need the guide as a reference. Head over to the quickstart to get synced up. The relay, core and cold guides will configure the the Pi-Node further. 

:::

The [Pi-Node.img.gz](https://mainnet.adamantium.online/Pi-Node.img.gz) is a pre configured Cardano node that can be used for minting NFT's, submitting transactions and can be further configured into a relay or core node for stake pool creation. It is configured with everything you need to quickly bootstrap a synced node with Nginx proxypass of Grafana for TLS encryption with a self signed certificate, working topology updater and gLiveView.

![](/img/star-forge-parts.jpeg)

:::caution

It is strongly recommended to work through the [Cardano Course](https://cardano-course.gitbook.io/cardano-course/) presented by IOG, or the [SPO documentation](https://developers.cardano.org/docs/operate-a-stake-pool/) on the Cardano Developer Portal.

:::

:::tip

If you would like to create a .img file of your work that can be flashed for reuse on other Raspberry Pi's you should build on an 8GB sd card. It will take less time to make an image. See [image creation section](/docs/cardano-developer-guides/create-.img-file.md).

:::

## Why this guide?

Consolidate and organize the various guides into a single document that can be followed or referenced _specifically_ for running a pool using two (or more) Raspberry Pi 4B (the 8GB version) and one offline Pi for cold key operations.

Provide documentation of every step taken while building the Pi-Node image available for bootstrapping a synced cardano-node. A reference & guide.

The most popular guides out there are aimed at x86 architecture and '_knowing what to throw away and knowing what to keep_' is not always clear. I aim to change that '_with a little help from my friends_'. 🎸

## Hardware

:::tip

I have found a simple low plrofile usb3 stick works great. For example
[https://www.pny.com/elite-x-fit-usb-3-1?sku=P-FDI256EXFIT-GE](https://www.pny.com/elite-x-fit-usb-3-1?sku=P-FDI256EXFIT-GE)

:::

### Shopping list

* 2 [Pi4B 8GB](https://thepihut.com/products/raspberry-pi-4-model-b?variant=31994565689406) version.
* 2 Drives : USB3 stick 256gb or larger
* A 3'rd 64bit capable Pi as an offline machine(Cold), like a pi-400.
* Class 10 micro sd card 16GB or larger. 
* Extra USB flash drives for backing up keys and configurations.
* Consider a single 50+ watt power supply
* Consider a 5 volt gigabit switch
* Consider a case with a fan

## Credit & community

* Moritz Angermann | [zw3rk](https://adapools.org/pool/e2c17915148f698723cb234f3cd89e9325f40b89af9fd6e1f9d1701a)
* [Alessandro konrad](https://github.com/alessandrokonrad) |[ Berry](https://adapools.org/pool/2a748e3885f6f73320ad16a8331247b81fe01b8d39f57eec9caa5091) (@berry_ales)
* [Chris-Graffagnino](https://github.com/Chris-Graffagnino)/[Setup Cardano Shelley staking node](https://github.com/Chris-Graffagnino/Jormungandr-for-Newbs/blob/master/docs/jormungandr_node_setup_guide.md)
* [Arming Cardano](https://t.me/joinchat/wvTcCSpdjGllMmFk) Telegram Group
* [Legendary Technology: New Raspberry Pi 4 Bootloader USB](https://jamesachambers.com/new-raspberry-pi-4-bootloader-usb-network-boot-guide/)
* [StakePool Operator Scripts (SPOS)](https://github.com/gitmachtl/scripts/)
* [CoinCashew: guide-how-to-build-a-haskell-stakepool-node](https://www.coincashew.com/coins/overview-ada/

## Downloads

* [Pi-Node.img.gz](https://mainnet.adamantium.online/Pi-Node.img.gz)
* Latest unofficial [static & Dynamic arm binaries](https://github.com/armada-alliance/cardano-node-binaries)
* Raspberry Pi Imager ([rpi-imager](https://github.com/raspberrypi/rpi-imager))
  * update eeprom
  * flash .img files/install Ubuntu
* [PiShrink](https://github.com/Drewsif/PiShrink)
* Latest chain snapshot for quicker sync

<Tabs groupId="NODE_CONFIG">
  <TabItem value="mainnet" label="Mainnet" default>

```bash title=">_ Terminal"
  wget -r -np -nH -R "index.html\*" -e robots=off https://mainnet.adamantium.online/db/
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash title=">_ Terminal"
  wget -r -np -nH -R "index.html\*" -e robots=off https://testnet.adamantium.online/db/
```
  </TabItem>
  
</Tabs>

## Links

* [https://cryptsus.com/blog/how-to-secure-your-ssh-server-with-public-key-elliptic-curve-ed25519-crypto.html](https://cryptsus.com/blog/how-to-secure-your-ssh-server-with-public-key-elliptic-curve-ed25519-crypto.html)
* [https://www.raspberrypi.org/forums/viewtopic.php?t=245931](https://www.raspberrypi.org/forums/viewtopic.php?t=245931)
