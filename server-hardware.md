# System Requirements

## Host Operating System

Scrypted can run on Mac, Windows, and Linux (via Proxmox or Docker).

<!--@include: ./parts/proxmox-tip.md-->

Linux + Docker installations should use `Ubuntu Server 64bit 22.04 LTS Jammy` as the host, including Raspberry Pi.

## Base System Requirements

Scrypted can run on low power devices such as a Raspberry Pi 4 or more powerful devices like an Intel NUC or Mac Mini. Most users will be just fine with a low powered device. However, if running software [Motion Sensors](/detection/motion-detection) or [Scrypted NVR](/scrypted-nvr/), the performance requirements will increase per camera.

::: warning
The server must be connected to the network with a wired network connection. If the server has a wireless connection, disabling it altogether is recommended.
:::

::: tip
When choosing cameras or a server, consult the [Buyers's Guide](/buyers-guide/) for recommendations that will work together to perform best with Scrypted.
:::

## NVR System Requirements

### Server

The Raspberry Pi 4 and low performance NAS are not recommended for use with Scrypted NVR. Using an Intel or Mac system is preferrable. The following chart is a rough idea of the capabilities of each system.

|Hardware|Operating System|Number of Cameras|Notes|
|-|-|-|-|
|Dell Wyse 5070|Ubuntu + Docker|5|Available cheap on eBay.|
|Intel N100|Ubuntu + Docker|12|New Intel NUC that has a fantastic iGPU for accelerated transcode and detection.|
|Mac Mini 16GB|macOS|20+|Scrypted NVR can leverage Apple Silicon's [Neural Engine](https://www.makeuseof.com/what-is-a-neural-engine-how-does-it-work/).|

### Storage

Any hard drive will work, surveillance hard drives are recommended. Flash drives and SD cards should not be used, as they will corrupt quickly due to the high write volume.
