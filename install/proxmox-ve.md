<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Proxmox VE

<!--@include: ./parts/proxmox-tip.md-->

::: warning
Scrypted NVR servers with NVIDIA GPUs must create an Ubuntu 24.04 VM inside Proxmox VE and pass through the GPU. Then continue with the [Linux - Docker](#linux-docker) installation. NVIDIA hardware is not supported inside the Scrypted Proxmox VE LXC.
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

## Coral Drivers

The Coral Edge TPU driver build step is optional and intended for servers running Scrypted NVR.

### Coral M.2/PCI Drivers

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

## Coral USB Drivers

The Proxmox VE host can use the USB driver provided by Google. Run the following on the Proxmox VE host to install the USB driver:

```sh
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | tee /etc/apt/sources.list.d/coral-edgetpu.list
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
apt-get -y update
apt-get -y install libedgetpu1-max
```

## Intel NPU

The Proxmox VE host can use the NPU driver for Core Ultra processors provided by Intel. Run the following on the Proxmox VE host to install the NPU driver:

```sh
cd /tmp
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/docker/install-intel-npu.sh > install-intel-npu.sh
INTEL_FW_NPU=true bash install-intel-npu.sh
```

## Proxmox VE Container Reset

::: tip
Older Proxmox VE Scrypted installations ran as a systemd service in the container. The new installation process moves the service into a docker container inside the LXC. Legacy installations must update the LXC by using the reset script.
:::

Modifying the Proxmox VE Container can lead to unexpected behavior. The container can be reset by running the installation script with the `SCRYPTED_RESTORE=true` environment variable. All data (and NVR recordings if applicable) will be preserved, but creating a backup from within Scrypted is highly recommended.

::: warning
This script must be run in the Proxmox VE Host `Shell`, not the Scrypted LXC Console/Terminal.
:::

```sh
cd /tmp
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/proxmox/install-scrypted-proxmox.sh > install-scrypted-proxmox.sh
SCRYPTED_RESTORE=true bash install-scrypted-proxmox.sh
```

<!--@include: ../server-port.md-->
