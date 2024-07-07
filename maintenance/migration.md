# Backup and Restore

When migrating to the `Desktop Application` **on the same server**, continue with the [Desktop Migration](#migrating-to-the-desktop-application) steps below. Otherwise follow the steps to [Create A Backup](#create-a-backup) and [Restore A Backup](#restore-a-backup) to another server.

## Migrating to the Desktop Application

When migrating to the Desktop Application on the same server, first stop the existing command line or Docker installation:

::: code-group

```sh [Mac]
launchctl unload ~/Library/LaunchAgents/app.scrypted.server.plist 
rm ~/Library/LaunchAgents/app.scrypted.server.plist
```

```powershell [Windows]
sc.exe stop scrypted.exe
sc.exe delete scrypted.exe
```

```sh [Linux]
sudo systemctl stop scrypted.service
sudo rm /etc/systemd/system/scrypted.service
```

```sh [Docker Compose]
cd ~/.scrypted
docker compose down
```

:::

Install the Desktop app, and then delete the following plugins if they are installed. These plugins are no longer necessary, as the Desktop Application has hardware accelerated equivalents:

* PAM-Diff
* Python Codecs
* OpenCV

The Scrypted data migration is now complete.

## Create a Backup

![](/img/create-backup.png)

1. Click Settings in the sidebar of the Management Console.
2. Click Backup to download the backup file.
  * The backup does **not** include NVR recordings.


::: tip
Backups can be automated using other tools (curl, wget, etc) by using this URL:
`https://[scrypted-server-ip]:10443/web/component/backup`. The web request will require `Basic` authentication using an admin account on the Scrypted server.
:::

## Restore a Backup

1. Click Settings in the sidebar of the Management Console.
2. Click Restore and select the backup file.
  * Restoring the backup will restart the server.
  * All users, settings, and plugins will be restored to the state of the backup.
  * The restore will trigger plugins to redownload additional data like Object Detection Models.


## Manual Backup and Restore

The Manual Backup and Restore steps below must be performed on a Scrypted server that is shutdown/stopped.

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

### Locate Database
The Scrypted database can be copied to another server by copying the `volume` directory. The `volume` path depends on your current installation host platform:

::: code-group

```[Linux]
~/.scrypted/volume
```

```[Mac]
~/.scrypted/volume
```

```[Windows]
%USERPROFILE%\.scrypted\volume
```

:::

### Copy Database

::: tip
If the Scrypted server is being upgraded to the [Desktop App](/desktop-application) or a different installation method, skip the `Copy` step and simply run the installer. The existing Scrypted Database will be used in place.
:::


1. `Copy` the `volume` to your new server, and place it in the appropriate location. The volume can be restored on any other Scrypted installation, even another architecture or host OS.
2. Start Scrypted on the new server.
3. Update the `Scrypted Server Address` setting since the new server will have a different IP address.
