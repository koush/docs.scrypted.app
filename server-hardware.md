# System Requirements

## Scrypted Host Operating System

Scrypted can run on Mac, Windows, and Linux (and Docker).

Linux + Docker installations should use `Ubuntu 64bit 22.04 LTS Jammy` as the host, including Raspberry Pi.

::: tip
Intel 12th generation or later processors should use `Ubuntu 23.04 Lunar` on the Docker host, for full iGPU support.
:::


## Scrypted System Requirements

Scrypted can run on low power devices such as a Raspberry Pi 4 or more powerful devices like an Intel NUC or Mac Mini. Most users will be just fine with a low powered device. However, if running software [Motion Sensors](/motion-detection) or [Scrypted NVR](/scrypted-nvr/), the performance requirements will increase per camera.

::: warning
The server must be connected to the network with a wired network connection. If the server has a wireless connection, disabling it altogether is recommended.
:::

::: tip
When choosing cameras or a server, consult the [Buyers's Guide](/buyers-guide/) for recommendations that will work together to perform best with Scrypted.
:::

## Scrypted NVR System Requirements

### Server

The Raspberry Pi 4 and low performance NAS are not recommended for use with Scrypted NVR. Using an Intel or Mac system is preferrable. The following chart is a rough idea of the capabilities of each system.

|Hardware|Number of Cameras|Notes|
|-|-|-|
|Wyse 5070 Thin Client|5|Available cheap on eBay.|
|Intel N100|12|New Intel NUC that has a fantastic iGPU for accelerated transcode and detection.|
|Mac Mini 16GB|20+|Scrypted NVR can leverage Apple Silicon's [Neural Engine](https://www.makeuseof.com/what-is-a-neural-engine-how-does-it-work/).|

::: tip
Low performance hardware like the Raspberry Pi 4 or a NAS can be used with Scrypted NVR, and handle up to 10 cameras with no issues, if [Scrypted NVR Smart Detections](/scrypted-nvr/features#smart-detections) is disabled.
:::

### Storage

Any hard drive will work, surveillance hard drives are recommended. Flash drives and SD cards should not be used, as they will corrupt quickly due to the high write volume.

The storage drive **must not be MS-DOS/FAT** formatted. Use an appropriate filesystem for your OS.

|OS|Filesystem|
|-|-|
|macOS|HFS or APFS|
|Windows|NTFS|
|Linux|ext4|

::: warning
When the storage device is a NAS Share, ensure that the NAS `Recycle Bin` feature is disabled, or the old recordings can not be properly deleted by Scrypted NVR and the disk will fill up.
:::

::: warning
Scrypted NVR will not work with filesystem quota features. Use a separate filesystem partition to restrict how much space is available.
:::

