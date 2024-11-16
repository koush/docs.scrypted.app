<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from './src/ImagePopup.vue';
</script>

# Install Scrypted

Scrypted can be installed on Windows, Mac, or Linux as a [desktop app](#desktop-app) or as a background service ([Mac](#mac-terminal), [Windows](#windows-powershell), [Proxmox VE](#proxmox-ve), [Linux](#linux-docker)).


<!--@include: ./parts/proxmox-tip.md-->

After the chosen installation method is complete, return to this page to continue with [Camera Setup](/camera-preparation.md).

## Desktop App

The recommended installation method for Mac and Windows is the [Desktop App](/desktop-application). The app provides hardware accelerated 
features unavailable to the background service inside a self contained, easily installable, package. The app can also serve as a viewer for an existing Scrypted server installation.

### Ubuntu/Debian Repository

::: tip
Scrypted servers running on Linux should typically use the [Docker](#linux-docker) installation. 
:::

The Desktop App can be installed and updated via `apt`: 

```sh
echo 'deb [trusted=yes] https://nuts.scrypted.app/apt stable main' | sudo tee /etc/apt/sources.list.d/scrypted.list
sudo apt update
sudo apt install scrypted-electron
```

Install the Desktop App from the above instructions. The management console can be accessed via the app.

<!--@include: ./server-port.md-->


## Proxmox VE

<!--@include: ./parts/proxmox-tip.md-->

::: warning
Scrypted NVR servers with NVIDIA GPUs must create an Ubuntu 22.04 VM inside Proxmox VE and then continue with the #linux-docker installation. NVIDIA hardware is not supported inside the Scrypted Proxmox VE LXC.
:::

Scrypted can be installed on a Proxmox VE by pasting the following script on the Proxmox VE **host**. This script will download and restore a Scrypted container backup. The script prompts to pass through GPUs and Coral Edge TPUs. Hosts with Coral Edge TPUs must also install the driver using the steps below.

```sh
cd /tmp
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/proxmox/install-scrypted-proxmox.sh > install-scrypted-proxmox.sh
bash install-scrypted-proxmox.sh
```

The Scrypted container uses low end specs by default. Configure the `Resources` tab to suit the server specs and workload. `Scrypted NVR` servers should assign at least 4 cores and 16GB of memory (the more the better). After configuration has been completed, start the container.

<!--@include: ./server-port.md-->

::: tip
The default `root` password on the LXC is `scrypted` and there will be a prompt to change it on first login.
:::

### Coral Drivers

The Coral Edge TPU driver build step is optional and intended for servers running Scrypted NVR.

#### Coral M.2/PCI Drivers

The Proxmox VE host requires building the [gasket-dkms](https://github.com/google/gasket-driver.git) driver from source. First ensure that the `pve-no-subscription`/`No Subscription` Proxmox apt repository has been added to your host. Then run the following on the Proxmox VE host to build and install the `gasket-dmks` M.2/PCI driver:

```sh
apt remove -y gasket-dkms
apt install -y git devscripts dh-dkms dkms pve-headers-$(uname -r)
cd /tmp
rm -rf gasket-driver
git clone https://github.com/google/gasket-driver.git
cd gasket-driver/
debuild -us -uc -tc -b
dpkg -i ../gasket-dkms_1.0-18_all.deb 
```

#### Coral USB Drivers

The Proxmox VE host can use the USB driver provided by Google. Run the following on the Proxmox VE host to install the USB driver:

```sh
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | tee /etc/apt/sources.list.d/coral-edgetpu.list
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
apt-get -y update
apt-get -y install libedgetpu1-max
```

### Intel NPU

The Proxmox VE host can use the NPU driver for Core Ultra processors provided by Intel. Run the following on the Proxmox VE host to install the NPU driver:

```sh
cd /tmp
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/docker/install-intel-npu.sh > install-intel-npu.sh
INTEL_FW_NPU=true bash install-intel-npu.sh
```

### Proxmox VE Container Reset

::: tip
Older Proxmox VE Scrypted installations ran as a systemd service in the container. The new installation process moves the service into a docker container inside the LXC. Legacy installations must update the LXC by using the reset script.
:::

Modifying the Proxmox VE Container can lead to unexpected behavior. The container can be reset by running the installation script with the `SCRYPTED_RESTORE=true` environment variable. All data (and NVR recordings if applicable) will be preserved, but creating a backup from within Scrypted is highly recommended.

```sh
cd /tmp
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/proxmox/install-scrypted-proxmox.sh > install-scrypted-proxmox.sh
SCRYPTED_RESTORE=true bash install-scrypted-proxmox.sh
```

### Proxmox VE vs Docker

[Proxmox VE](https://www.proxmox.com) is preferred for Scrypted over Docker for several reasons:
* Superior networking capabilities. The Scrypted installation on Proxmox will have a dedicated IP on the local network. Scrypted requires host networking on Docker, **which cause conflicts when running alongside other host networking services like Pi-hole or Homebridge.**
* Simple storage setup with Scrypted NVR. Proxmox provides a web interface for formatting new drives and adding them to containers like Scrypted.
* Automatic iGPU passthrough for hardware accelerated decoding and detection when using the installation script.
* Proxmox provides a web interface by default, which is great for headless/dedicated services. The OS is lightweight and designed for running containers and VMs.

## Linux - Docker

Linux + Docker installations should refer to the [System Requirements](/server-hardware#scrypted-host-operating-system) for host OS recommendations. Docker Desktop on Windows/Mac is [not supported](https://github.com/koush/scrypted/wiki/Installation:-Docker-Desktop).

This script below will download and configure the the docker-compose.yml and install Scrypted as a service.

Use the Copy button in the snippet below to copy the entire script, and then paste the contents into Terminal to install Scrypted.

```sh
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/docker/install-scrypted-docker-compose.sh > ~/install-scrypted-docker-compose.sh 
sudo SERVICE_USER=$USER bash ~/install-scrypted-docker-compose.sh
rm ~/install-scrypted-docker-compose.sh
```

There will be a prompt to install Docker and set up external storage for Scrypted NVR. External storage is completely optional and can be set up later.

<!--@include: ./server-port.md-->


### docker-compose.yml

The [docker-compose.yml](https://github.com/koush/scrypted/blob/main/install/docker/docker-compose.yml) that contains the Scrypted configuration can be found at `~/.scrypted/docker-compose.yml`. Modification is typically not necessary. Alternate docker images are available:

|Image|Description|
|-|-|
|`ghcr.io/koush/scrypted`|The default image.|
|`ghcr.io/koush/scrypted:nvidia`|Image that includes full NVIDIA CUDA support for hardware accelerated transcoding and detection. The host must have CUDA, cuDNN, and NVIDIA container runtime installed. Then [modify the docker-compose.yml](https://github.com/koush/scrypted/blob/9a8034eb4ce35cff08201698110335a8fbafb0fc/install/docker/docker-compose.yml#L41) with the necessary changes for NVIDIA.|

## Mac - Terminal

Scrypted NVR on Mac must install the [Install](/desktop-application) or [Migrate](/maintenance/migration.md#migrating-to-the-desktop-application) to the [Desktop Application](#desktop-app). The Desktop App has GPU acceleration, is fully self contained with zero dependencies, and requires a license. The free version of Scrypted may be installed using the Terminal Installation below.

This script below will download all the dependencies, including node, python, and install Scrypted as a service.

1. Install [Homebrew](https://brew.sh).
2. Use the Copy button in the snippet below to copy the entire script, and then paste the contents into Terminal to install Scrypted.

```sh
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/local/install-scrypted-dependencies-mac.sh > ~/install-scrypted-dependencies-mac.sh 
bash ~/install-scrypted-dependencies-mac.sh
rm ~/install-scrypted-dependencies-mac.sh
```

<!--@include: ./server-port.md-->

## Windows - PowerShell

Scrypted NVR on Windows must install the [Install](/desktop-application) or [Migrate](/maintenance/migration.md#migrating-to-the-desktop-application) to the [Desktop Application](#desktop-app). The Desktop App has GPU acceleration, is fully self contained with zero dependencies, and requires a license. The free version of Scrypted may be installed using the PowerShell Installation below.


## Unraid - Docker

1. Install `Scrypted` from `Unraid Apps`.
2. Configure `Appdata`. This path will contain the Scrypted database.
3. Optional: Scrypted NVR Setup
  * Click `Add Another Path`
  * Configure `Recordings` Storage if also using `Scrypted NVR`. This path contains the recordings for Scrypted NVR and needs to be at least 1TB in size.

::: warning
Paths shown in screenshots are examples and should be configured specific to your system preferences and drive setup.
:::

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Install App
<ImagePopup src="/img/unraid/unraid-app.png" width="200" ></ImagePopup>
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Configure Appdata
<ImagePopup src="/img/unraid/unraid-settings.png" width="200"></ImagePopup>
</div>

</div>

<div style="width: 100%; display: flex; flex-direction: row;">


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Configure Recordings (optional)
<ImagePopup src="/img/unraid/unraid-recordings.png" width="200"></ImagePopup>
</div>

</div>


## All Installation Options

 * [Raspberry Pi](https://github.com/koush/scrypted/wiki/Installation:-Raspberry-Pi)
 * [Linux - Docker Compose](https://github.com/koush/scrypted/wiki/Installation:-Docker-Compose-Linux)
 * [Mac - Terminal Installation](https://github.com/koush/scrypted/wiki/Installation:-Mac)
 * Windows
   * [PowerShell Installation](https://github.com/koush/scrypted/wiki/Installation:-Windows)
   * [WSL2 Installation](https://github.com/koush/scrypted/wiki/Installation:-WSL2-Windows)
 * [Home Assistant OS](https://github.com/koush/scrypted/wiki/Installation:-Home-Assistant-OS)
 * [ReadyNAS: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-ReadyNAS)
 * [Synology: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-Synology-NAS)
 * [QNAP: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-QNAP-NAS)
