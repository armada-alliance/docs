---
description: Flash image
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Download & Flash

## Flash Image

Download, install & open [Raspberry Pi Imager](https://github.com/raspberrypi/rpi-imager/releases/latest). Plug in your target USB drive.

Ubuntu users can download and install with snapd.

```bash title=">_ Terminal"
sudo apt update
sudo apt install snapd
sudo snap install rpi-imager
```

:::danger
Older models of the Pi4B 8GB need to have their boot loader updated to boot from USB. If your image won't boot remove the USB3 drive and use rpi-imager to flash Pi 4 EEPROM boot recovery to an sd card.

Plug the Pi into a monitor, insert the sd card and power up. Once you see a green screen you should be good to boot from your USB3 drive. Newer versions are shipping with a USB boot capable boot loader. **Feeling lucky?**

**Choose OS -> Misc utility images -> Bootloader -> USB Boot**

[https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md](https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md)
:::

![](/img/otgpoltut4.png)

<Tabs>
  <TabItem value="Pre configured Pi-Node.img.gz" label="Pre configured Pi-Node.img.gz" default>

**Obtain Pi-Node.img.gz file**

[Download Pi-Node](https://mainnet.adamantium.online/Pi-Node.img.gz)

**Within Raspberry Pi Imager**

**Choose OS -> Use custom**

Locate the .img.gz file you downloaded & wish to flash.

Locate your target drive & write it to disk.

![](/img/custom-os.png)
</TabItem>
<TabItem value="Fresh Ubuntu 24.04 LTS installation" label="Fresh Ubuntu 24.04 LTS installation">

**Within Raspberry Pi Imager**

**Download Ubuntu Server 24.04 (RPI 3/4/400)**

[Raspberry Pi Generic (64-bit ARM) preinstalled server image](https://cdimage.ubuntu.com/ubuntu-server/noble/daily-preinstalled/current/noble-preinstalled-server-arm64+raspi.img.xz)

**Choose OS -> Use custom**

Locate the .img.gz file you downloaded & wish to flash. Locate your target drive & write it to disk.

![](/img/custom-os.png)
</TabItem>
</Tabs>
