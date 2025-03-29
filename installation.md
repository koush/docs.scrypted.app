<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from './src/ImagePopup.vue';
</script>

# Install Scrypted

Scrypted can be installed on Windows, Mac, or Linux as a [desktop app](/install/desktop-app) or as a background service ([Mac](/install/mac-terminal), [Windows](/install/windows-powershell), [Proxmox VE](/install/proxmox-ve), [Linux - Docker](/install/linux-docker)).

::: tip
After selecting and completing installation, return to the docs to continue with [Camera Setup](/camera-preparation.md).
:::

## Recommended Servers

- [Mac/Windows Desktop App](/install/desktop-app)
  * The desktop app is also available for Linux but only recommended to be used as a viewer for [Scrypted NVR](/scrypted-nvr/).
- [Proxmox VE](/install/proxmox-ve)

## Docker Servers

<!--@include: ./parts/proxmox-tip.md-->

::: danger
Scrypted will not work in Docker Desktop for Mac or Windows do to the unavailability of host networking via the `--network host` flag.
:::

- [Linux](/install/linux-docker)
- [Unraid](/install/unraid-docker.md)
- [ReadyNAS](https://github.com/koush/scrypted/wiki/Installation:-Docker-ReadyNAS)
- [Synology](https://github.com/koush/scrypted/wiki/Installation:-Docker-Synology-NAS)
- [QNAP](https://github.com/koush/scrypted/wiki/Installation:-Docker-QNAP-NAS)
- [Home Assistant OS](https://github.com/koush/scrypted/wiki/Installation:-Home-Assistant-OS)
  * Home Assistant OS is not recommended for use with Scrypted NVR due to limited storage capabilities.

## All Installation Options

- [Mac - Terminal](/install/mac-terminal): Install Scrypted via the terminal on macOS.
- Windows
   * [PowerShell Installation](/install/windows-powershell)
   * [WSL2 Installation](https://github.com/koush/scrypted/wiki/Installation:-WSL2-Windows)
- [Proxmox VE](/install/proxmox-ve)
- [Linux - Docker Compose](/install/linux-docker)
- [Unraid - Docker](/install/unraid-docker.md)
- [Home Assistant OS](https://github.com/koush/scrypted/wiki/Installation:-Home-Assistant-OS)
  * Home Assistant OS is not recommended for use with Scrypted NVR due to limited storage capabilities.
- [ReadyNAS: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-ReadyNAS)
- [Synology: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-Synology-NAS)
- [QNAP: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-QNAP-NAS)

## Proxmox VE vs Docker

[Proxmox VE](https://www.proxmox.com) is preferred for Scrypted over Docker for several reasons:
* Superior networking capabilities. The Scrypted installation on Proxmox will have a dedicated IP on the local network. Scrypted requires host networking on Docker, **which cause conflicts when running alongside other host networking services like Pi-hole or Homebridge.**
* Simple storage setup with Scrypted NVR. Proxmox provides a web interface for formatting new drives and adding them to containers like Scrypted.
* Automatic iGPU passthrough for hardware accelerated decoding and detection when using the installation script.
* Proxmox provides a web interface by default, which is great for headless/dedicated services. The OS is lightweight and designed for running containers and VMs.


After the chosen installation method is complete, return to this page to continue with [Camera Setup](/camera-preparation.md).
