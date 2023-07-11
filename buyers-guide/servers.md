# Server Recommendations

Cameras that have good motion sensors, plugin support, and the necessary codecs dramatically reduce the server requirements: Scrypted will have no problem streaming to the various supported [Platforms](/platforms) on low power hardware like a Raspberry Pi 4 or Synology NAS.

## Scrypted NVR Recommendations

However, if motion detection is necessary, or the plan is to use Scrypted NVR for 24/7 recording and [Smart Detections](/scrypted-nvr/smart-detections), a more capable system will be necessary. A good CPU, GPU, and TPU (Tensor Processing Unit, aka AI chip) can all contribute to processing camera streams.

While a TPU can improve performance, a capable GPU can also fill the gap.

|Processor|Video Decode|Motion Detection|Object Detection|
|-|-|-|-|
|CPU|✅|✅|✅|
|Intel iGPU|✅|❗|✅|
|Other GPU|✅|❗|❗|
|TPU|❌|❌|✅|

❗ Only available in the [Scrypted Desktop App](/desktop-application.md).

❌ Not applicable.

## System Comparison

|Name|CPU|GPU|TPU|Cameras|
|-|-|-|-|-|
|Intel N100 with M.2 Coral|🥈|🥈|🥇|20+|
|Apple Mac Mini M1/M2|🥇|🥇|🥈|20+|
|Intel N100|🥈|🥈|❌|12|
|Dell Wyse 5070 (eBay)|🥉|🥉|❌|5|

❌ Not applicable.

## Object Detection Comparison

|Name|Rating|Notes|
|-|-|-|
|TPU: M.2/PCI Coral|🥇|The M.2 dual TPU model is preferred.|
|TPU: Apple Mac Mini M1/M2|🥇|Low power consumption, fast, and expensive. A single package off the shelf solution for a large number of cameras.|
|GPU: AMD 6900XT or NVIDIA 3800|🥈|The Scrypted Desktop App running on systems using these GPU for Object Detection perform great, though at a much higher performance per watt.|
|GPU: Intel N100|🥈|Fantastic Object Detection Performance in a tiny package. Highly recommended.|
|TPU: USB Coral|🥉|High latency. Not recommended if purchasing, but better than nothing. USB is known to be finicky.|
|TPU: Intel NCS|🥉||

# Server Recommendations

All servers are recommended to have at least 8GB of RAM, 16GB preferred.

## Apple Mac Mini M1/M2

This system contains a CPU, GPU, and a TPU (neural cores). An Apple Silicon Mac Mini is the most capable Scrypted NVR system available.

## Intel N100

This Intel 12th generation NUC contains a CPU and capable GPU in a tiny package. A TPU is not necessary with this setup, but it has the expansion slot available.

## Wyse 5070 (+ Mini PCI Coral)

This is readily available used on eBay for $50 USD. The Dell Wyse 5070 will great for a limited number of cameras. Can be supercharged with a Mini PCIe Coral TPU into the Wifi slot.

## Older Intel (+ M.2 Coral TPU)

Older Intel server/desktop systems (8th generation+) will perform quite well. No GPU is necessary. Adding a Coral TPU is a great upgrade.

---

# Storage

## Internal/External Storage

Scrypted NVR recommends using a direct attached storage drive (internal or USB). A surveillance rated drive is preferred, but not strictly necessary. SSD storage will only marginally improve performance. Flash Storage (USB Stick) and SD Cards are not recommended, as they are prone to data corruption and failure.

## Network Attached Storage

Storing video on a NAS is a reasonable option if one is available, however timelapse scrubbing may suffer from poor performance over the network.
