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

## Background Service

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
