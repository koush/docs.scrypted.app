The following server configurations are supported by Scrypted NVR:

### Platforms

* Docker or Proxmox (with supported CPU).
* Apple Silicon running the Scrypted NVR Desktop app.
* Windows running the Scrypted NVR Desktop app.

### Hardware

* Apple Silicon
* Intel 9th generation or later CPUs and iGPU.
  * Note: the newest generation CPU may NOT have full support due to kernel/driver support not being available out of the box in Proxmox or Ubuntu. One generation AFTER the latest is generally recommended for stability.
* AMD 5000 series or later CPUs. iGPU is not supported, and inference will be CPU only.
* NVIDIA 30 series GPUs.

These are the most common configurations, are known to be reliable and performant. However, Scrypted NVR can run on much more than is listed here, but when running into issues support may be limited.
