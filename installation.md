# Installation

Scrypted can be installed on Windows, Mac, or Linux as a [desktop app](#desktop-app) or as a [background service](#background-service).

After the chosen installation method is complete, return to this page to continue with [Camera Setup](/camera-preparation.md).

## Desktop App

The recommended installation method for Mac and Windows is the [Desktop App](/desktop-application). The app provides hardware accelerated 
features unavailable to the background service inside a self contained, easily installable, package. The app can also serve as a viewer for an existing Scrypted server installation.

### Ubuntu/Debian Repository

::: tip
Scrypted servers running on Linux should typically use the [Docker](#docker) installation. 
:::

The Desktop App can be installed and updated via `apt`: 

```sh
echo 'deb [trusted=yes] https://nuts.scrypted.app/apt stable main' | sudo tee /etc/apt/sources.list.d/scrypted.list
sudo apt update
sudo apt install scrypted-electron
```

## Docker

Linux + Docker installations should refer to the [System Requirements](/server-hardware#scrypted-host-operating-system) for host OS recommendations. Docker Desktop on Windows/Mac is [not supported](https://github.com/koush/scrypted/wiki/Installation:-Docker-Desktop).

This [script](https://github.com/koush/scrypted/blob/main/install/docker/install-scrypted-docker-compose.sh) will download and configure the the docker-compose.yml and install Scrypted as a service.

Use the Copy button in the snippet below to copy the entire script, and then paste the contents into Terminal to install Scrypted.

```sh
mkdir -p ~/.scrypted
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/docker/install-scrypted-docker-compose.sh > ~/.scrypted/install-scrypted-docker-compose.sh 
sudo SERVICE_USER=$USER bash ~/.scrypted/install-scrypted-docker-compose.sh
```

There will be a prompt to install Docker and set up external storage for Scrypted NVR. External storage is completely optional and can be set up later.

<!--@include: ./server-port.md-->


### docker-compose.yml location

The [docker-compose.yml](https://github.com/koush/scrypted/blob/main/install/docker/docker-compose.yml) is stored at `~/.scrypted/docker-compose.yml`.


## Mac - Terminal

Scrypted NVR on Mac must install the [Install](/desktop-application) or [Migrate](/migration.md#migrating-to-the-desktop-application) to the [Desktop Application](#desktop-app). The Desktop App has GPU acceleration, is fully self contained with zero dependencies, and requires a license. The free version of Scrypted may be installed using the Terminal Installation below.

This [script](https://github.com/koush/scrypted/blob/main/install/local/install-scrypted-dependencies-mac.sh) will download all the dependencies, including node, python, and install Scrypted as a service.

1. Install [Homebrew](https://brew.sh).
2. Use the Copy button in the snippet below to copy the entire script, and then paste the contents into Terminal to install Scrypted.

```sh
mkdir -p ~/.scrypted
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/local/install-scrypted-dependencies-mac.sh > ~/.scrypted/install-scrypted-dependencies-mac.sh 
bash ~/.scrypted/install-scrypted-dependencies-mac.sh
```

<!--@include: ./server-port.md-->

## Windows - PowerShell

Scrypted NVR on Windows must install the [Install](/desktop-application) or [Migrate](/migration.md#migrating-to-the-desktop-application) to the [Desktop Application](#desktop-app). The Desktop App has GPU acceleration, is fully self contained with zero dependencies, and requires a license. The free version of Scrypted may be installed using the PowerShell Installation below.


## Proxmox VE

Scrypted can be installed on a Proxmox VE host by running the following script which downloads and restores a backup:

```sh
cd /tmp
curl -O -L https://github.com/koush/scrypted/releases/download/v0.72.0/scrypted.tar.zst
pct restore 10443 scrypted.tar.zst
```

The default container uses low end specs, which can be tailored to better suit the server enviroment and workload.

### Hardware Acceleration Access

The hardware acceleration access step is optional and intended for servers running Scrypted NVR.

The following script should also be run on the host to add the udev rules that will provide Scrypted access to GPU and TPU (Coral) devices:

```sh
sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0666\"' > /etc/udev/rules.d/65-scrypted.rules"
sh -c "echo 'KERNEL==\"renderD128\", MODE=\"0666\"' >> /etc/udev/rules.d/65-scrypted.rules"
sh -c "echo 'KERNEL==\"card0\", MODE=\"0666\"' >> /etc/udev/rules.d/65-scrypted.rules"
udevadm control --reload-rules && udevadm trigger
```

### Coral Drivers

The Coral Edge TPU driver build step is optional and intended for servers running Scrypted NVR.

Proxmox VE requires building the `gasket-dkms` driver from source. First ensure that the `pve-no-subscription`/`No Subscription` Proxmox apt repository has been added to your host. Then run the following to build and install the `gasket-dmks` driver:

```sh
apt remove -y gasket-dkms
apt install -y git devscripts dh-dkms dkms pve-headers-$(uname -r)
cd /tmp
git clone https://github.com/google/gasket-driver.git
rm -rf gasket-driver
cd gasket-driver/
debuild -us -uc -tc -b
dpkg -i ../gasket-dkms_1.0-18_all.deb 
```

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
 * [Unraid: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-Unraid)
