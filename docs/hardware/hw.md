

# Hardware

## Resource Requirements

This page will consist of hardware necessary for running a stake pool or relay node on the cardano blockchain for both testnet and mainnet use.


As of `May 2025` the cardano-node/cli software requirements are (node 11.0.1):

:::caution
#### The RAM, CPU, and Data Storage resource requirements are much higher for mainnet vs testnet. If you decide to use a Raspberry Pi 4 or any other single board computer with limited RAM on mainnet you will experience downtime due to things like garbage collection or end of epoch calculations and need to monitor your node frequently to restart it once it hits its limits.
:::

:::danger
#### As of node 11.0.1, the LSM storage backend (OnDisk) has a known crash bug on resource-constrained devices such as the Raspberry Pi. Until this is resolved in a future release, Raspberry Pi users should not upgrade to 11.x for mainnet block production.
:::

## Testnet
| CPU             | RAM         | Disk Space/Storage |
|-----------------|-------------|--------------------|
| 2 or more cores | 4GB or more | 75GB or more       |

## Mainnet
| CPU             | RAM                                               | Disk Space/Storage      |
|-----------------|---------------------------------------------------|-------------------------|
| 4 or more cores | 24GB or more (InMemory backend) / 8GB (OnDisk)    | 300GB or more (350GB recommended) |






## Hardware Recommendation List

| **Name**                        		        | **Mainnet use** | **Testnet use** | **Link** 									  |
|-------------------------------------------------------|-----------------|-----------------|-----------------------------------------------------------------------------|
| Mac Mini M1 16 GB RAM           		        | YES             | YES             | [Link](https://www.apple.com/us-smb/shop/buy-mac/mac-mini)	          |
| Mac Mini M1 8 GB RAM            		        | NO              | YES             | [Link](https://www.apple.com/us-smb/shop/buy-mac/mac-mini)        	  |
| Honeycomb LX2 up to 64 GB RAM   		        | YES             | YES             | [Link](https://www.solid-run.com/arm-servers-networking-platforms/honeycomb-lx2/)|
| Firefly ROC-RK3588S-PC 16GB RAM 		        | YES             | YES             | [Link](https://www.firefly.store/goods.php?id=163)      			  |
| Raspberry Pi 4 8GB RAM          		        | NO              | YES             | [Link](https://www.amazon.com/s?k=raspberry+pi+4+8gb&crid=2RKXMRT531OWM&sprefix=raspberry%2Caps%2C640&ref=nb_sb_ss_ts-doa-p_5_9)|
| Rock5 Model B 16GB RAM 	  		        | YES             | YES             | [Link](https://ameridroid.com/products/rock5-model-b?variant=39918166573090)|
| Edge2 Pro: 16GB 64-bit 2112MHz LPDDR4X + 64GB eMMC 5.1| YES             | YES             | [Link](https://www.khadas.com/edge2)					  |

