# Server Hardware

## Base Recommendations

Cameras that have good motion sensors, plugin support, and the necessary codecs dramatically reduce the server requirements: Scrypted will have no problem streaming to the various supported [Platforms](/platforms) on low power hardware like a Raspberry Pi 4 or Synology NAS.

::: warning Raspberry Pi 4
From a current price to performance standpoint, the Raspberry Pi 4b is a poor choice compared to similarly priced Intel thin clients and NUCs. A used Dell Wyse 5070 can be found on eBay for half the price of a Raspberry Pi 4b.
:::

## NVR Recommendations

However, if motion detection is necessary, or the server will be running Scrypted NVR for 24/7 recording and [Smart Detections](/scrypted-nvr/features#smart-detections), running it on a more capable system than a Raspberry Pi 4 is recommended. A good CPU, GPU, and TPU (Tensor Processing Unit, aka AI chip) all contribute towards video stream detection performance.

While a TPU can improve performance, a capable GPU can also fill the gap.

|Processor|Video Decode|Motion Detection|Object Detection|
|-|-|-|-|
|CPU|✅|✅|✅|
|dGPU/iGPU|✅|❗|✅|
|TPU/NPU|❌|❌|✅|

❗ Only available in the [Scrypted Desktop App](/desktop-application.md).

❌ Not applicable.

## System Comparison

|Name|General Compute|Video Decode|Object Detection|Cameras|
|-|-|-|-|-|
|Apple Mac Mini M1/M2|🥇|🥇|🥇|20+|
|NVIDIA 4XXX|❌|🥇|🥇|20+|
|Intel 13500H|🥈|🥈|🥈|20+|
|Intel N100|🥉|🥉|🥉|12|

❌ Not applicable.

## Object Detection Comparison

::: warning
Coral EdgeTPU devices are not recommended. While these TPUs were fast on initial release in 2020, they are now outclassed by both modern Intel and Apple Silicon chips. Furthermore, the aging chips have not seen a single hardware or software refresh. The software (Tensorflow) is no longer in use at Google. For all intents and purposes, the Coral EdgeTPU is now Google abandonware.
:::

::: tip
The [Object Detection Benchmark](https://scripts.scrypted.app/object-detection-benchmark.html#reference-times) script has collected results from many common systems.
:::

|Name|Rating|Notes|
|-|-|-|
|NPU: Apple Mac Mini M1/M2|🥇|Low power consumption, fast, and expensive. Can easily handle a large number of cameras.|
|NPU: Intel Core Ultra 125H|🥇|The GPU on the H series Intel chips have 2-3x the typical number of cores. The Core Ultra series includes Intel's new NPU. Low power consumption, fast, and moderately priced. Can easily handle a large number of cameras.|
|GPU: Intel 12600H|🥈|The GPU on the H series Intel chips have 2-3x the typical number of cores. They are blazing fast at low power. Highly recommended.|
|GPU: Intel N100|🥉|Fantastic Object Detection Performance in a tiny package. Highly recommended.|
|GPU: NVIDIA|🥇|The NVIDIA 3000 and 4000 series has incredible decode and detect performance but at a high price and power consumption. Generally not recommended for purchase, great if on hand.|
|TPU: M.2/PCI Coral|🥉|The M.2 dual TPU model is is not supported by many systems. **Google Abandonware. Do not buy if purchasing new hardware**.|
|TPU: USB Coral|🥉|High latency and crash prone. Google Abandonware. **Google Abandonware. Do not buy if purchasing new hardware**.|

# Server Recommendations

All servers are recommended to have at least 8GB of RAM, 16GB preferred.

<!--@include: ../parts/proxmox-tip.md-->

## Apple Mac Mini M1/M2

This system contains a CPU, GPU, and a TPU (neural cores).

## Intel Core Ultra 125H

This Intel 12th generation NUC contains a CPU and laptop class GPU and  NPU in a tiny package. The H series chip has 80 GPU cores compared to the 24 on the Intel N100. The Intel Core Ultra 125H is the top recommendation for large scale deployments.

## Intel 12600H

This Intel 12th generation NUC contains a CPU and laptop class GPU in a tiny package. The H series chip has 80 GPU cores compared to the 24 on the Intel N100.

## Intel N100

This Intel 12th generation NUC contains a CPU and capable GPU in a tiny package.

---

# Storage

## Disk Drive

Scrypted NVR recommends using a direct attached storage drive (internal or USB). A surveillance rated drive is preferred, but not strictly necessary. SSD storage will only marginally improve performance. Flash Storage (USB Stick) and SD Cards are not recommended, as they are prone to data corruption and failure.

|Recommended Drives|
|-|
|Western Digital WD Purple|
|Seagate Skyhawk|

::: warning
There are many [fake drives](https://www.youtube.com/watch?v=QOhLlvNlI20) for sale that misreport their actual storage capacity. Buy from a reputable retailer and manufacturer. If a deal seems too good to be true, it probably is.
:::

## External Enclosure

When using an external enclosure, it is recommended to connect a dedicated enclosure directly to the server. Multifunction enclosures (which have additional USB ports, network ports, or card readers) have been known to cause issues. Daisy chaining the USB connection through a secondary USB hub can cause connectivity issues as well.

::: tip
Macs can be quite picky about USB drive bays and may disconnect them randomly. Using a brand that advertises itself as Mac compatible, such as OWC, is advised. Read the Amazon reviews from Mac users. All drive bays tend to be trouble free on Linux and Windows.
:::

|Mac Drive Bays|
|-|
|OWC miniStack|
|OWC Drive Dock USB-C Dual Drive Bay Solution|


## Network Attached Storage

Storing video on a NAS is a reasonable option if one is available, however timelapse scrubbing may suffer from poor performance over the network.
