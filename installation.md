# Installation

Scrypted can be installed on Windows, Mac, or Linux as a [desktop app](#desktop-app) or as a [background service](#background-service).

After the chosen installation method is complete, return to this page to continue with [Camera Setup](/camera-preparation.md).

## Desktop App

The recommended installation method for Mac and Windows is the [Desktop App](/desktop-application). It provides hardware accelerated 
features unavailable to the background service, inside a self contained, easily installable package.

### Ubuntu/Debian Repository

Desktop App users on Ubuntu must install the app using `apt` to receive auto updates. 

```sh
echo 'deb [trusted=yes] https://nuts.scrypted.app/apt stable main' | sudo tee /etc/apt/sources.list.d/scrypted.list
sudo apt update
sudo apt install scrypted-electron
```

## Docker

Linux + Docker installations should refer to the [System Requirements](/server-hardware#scrypted-host-operating-system) for host OS recommendations. Window/Mac + Docker Desktop is [not supported](https://github.com/koush/scrypted/wiki/Installation:-Docker-Desktop).

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


## Mac

Scrypted NVR on Mac must install the [Install](/desktop-application) or [Migrate](/migration.md#migrating-to-the-desktop-application) to the [Desktop Application](#desktop-app). The Desktop App has GPU acceleration, is fully self contained with zero dependencies, and requires a license. The free version of Scrypted may be installed using the Command Line Installation below.

This [script](https://github.com/koush/scrypted/blob/main/install/local/install-scrypted-dependencies-mac.sh) will download all the dependencies, including node, python, and install Scrypted as a service.

1. Install [Homebrew](https://brew.sh).
2. Use the Copy button in the snippet below to copy the entire script, and then paste the contents into Terminal to install Scrypted.

```sh
mkdir -p ~/.scrypted
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/local/install-scrypted-dependencies-mac.sh > ~/.scrypted/install-scrypted-dependencies-mac.sh 
bash ~/.scrypted/install-scrypted-dependencies-mac.sh
```

<!--@include: ./server-port.md-->

## Windows

Scrypted NVR on Windows must install the [Install](/desktop-application) or [Migrate](/migration.md#migrating-to-the-desktop-application) to the [Desktop Application](#desktop-app). The Desktop App has GPU acceleration, is fully self contained with zero dependencies, and requires a license. The free version of Scrypted may be installed using the Terminal Installation below.

## All Installation Options

 * [Raspberry Pi](https://github.com/koush/scrypted/wiki/Installation:-Raspberry-Pi)
 * [Linux - Docker Compose](https://github.com/koush/scrypted/wiki/Installation:-Docker-Compose-Linux)
 * [Mac - Terminal Installation](https://github.com/koush/scrypted/wiki/Installation:-Mac)
 * Windows
   * [Terminal Installation](https://github.com/koush/scrypted/wiki/Installation:-Windows)
   * [WSL2 Installation](https://github.com/koush/scrypted/wiki/Installation:-WSL2-Windows)
 * [Home Assistant OS](https://github.com/koush/scrypted/wiki/Installation:-Home-Assistant-OS)
 * [ReadyNAS: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-ReadyNAS)
 * [Synology: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-Synology-NAS)
 * [QNAP: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-QNAP-NAS)
 * [Unraid: Docker](https://github.com/koush/scrypted/wiki/Installation:-Docker-Unraid)
