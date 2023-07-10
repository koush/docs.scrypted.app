# Uninstallation

Uninstallation instructions vary depending on how Scrypted was installed. Find the installation method for your server below.

After uninstallation is complete, and the Scrypted service has been stopped, [Delete the Scrypted Configuration](#delete-scrypted-configuration).

## Desktop App

* Quit the app from the task bar to ensure it is not running in the background.
* Delete the app by dragging it into the Trash (Mac/Linux) or running the Uninstallation from the Installed Applications list (Windows).

## Background Service

If Scrypted was not installed using the Desktop app, and the background service was installed using the Terminal, it must be uninstalled using the Terminal.

::: code-group

```sh [Docker Compose]
cd ~/.scrypted
docker compose down
```

```sh [Linux]
sudo systemctl stop scrypted.service
sudo rm /etc/systemd/system/scrypted.service
```

```sh [Mac]
launchctl unload ~/Library/LaunchAgents/app.scrypted.server.plist 
rm ~/Library/LaunchAgents/app.scrypted.server.plist
```

```powershell [Windows]
sc.exe stop scrypted.exe
sc.exe delete scrypted.exe
```

:::

## Delete Scrypted Configuration

After Scrypted is stopped, the local configuration files can be found and removed:

::: code-group

```sh [Mac/Linux]
sudo rm -rf ~/.scrypted
```

```sh [Windows]
deltree %HOMEDRIVE%%HOMEPATH%\.scrypted
```

:::