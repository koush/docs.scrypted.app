# Hardware

## Scrypted Hardware

Scrypted can run on low power devices such as a Raspberry Pi 4 or more powerful devices such as an Intel NUC or Mac Mini. Most users will be just fine with a low powered device. However, if running software `Motion Sensors` or [Scrypted NVR](/scrypted-nvr/), the requirements will increase per camera.

## Scrypted NVR Hardware

### Server

Raspberry Pi 4 and low powered NUCs are not recommended for use with Scrypted NVR. Use an Intel or Mac system. The following chart is a rough idea of the capabilities of each system.

|Hardware|Number of Cameras|Notes|
|-|-|-|
|Wyse 5070 Thin Client|5|Available cheap on eBay.|
|Intel N100|12|New Intel NUC that has a fantastic iGPU for accelerated transcode and detection.|
|Mac Mini 16GB|20|Scrypted NVR can leverage Apple Silicon's Neural Engine.|

### Storage

Any hard drive will work, surveillance hard drives are recommended. Flash drives and SD cards should not be used, as they will corrupt quickly due to the high write volume.