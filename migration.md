# Backup and Restore

When migrating to the `Desktop Application` on the same server, continue with the [Desktop Migration](#migrating-to-the-desktop-application) steps below. Otherwise follow the steps to [Copy the Database](#locate-database) to another server.

## Migrating to the Desktop Application

When migrating to the Desktop Application on the same server, first stop the existing command line or Docker installation:

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

Install the Desktop app, and then delete the following plugins. These plugins are no longer necessary, as the Desktop Application has hardware accelerated equivalents:

* PAM-Diff
* Python Codecs
* OpenCV
* OpenVINO
* TensorFlow

The Scrypted data migration is now complete.

## Locate Database
The Scrypted database can be copied to another server by copying the `volume` directory. The `volume` path depends on your current installation host platform:

::: code-group

```[Linux]
~/.scrypted/volume
```

```[Mac]
~/.scrypted/volume
```

```[Windows]
Replace `USERNAME` with your username.
C:\Users\USERNAME\.scrypted\volume
```

:::

## Copy Database

::: tip
If the Scrypted server is being upgraded to the [Desktop App](/desktop-application) or a different installation method, skip the `Copy` step and simply run the installer. The existing Scrypted Database will be used in place.
:::


1. `Copy` the `volume` to your new server, and place it in the appropriate location. The volume can be restored on any other Scrypted installation, even another architecture or host OS.
2. Start Scrypted on the new server.
3. Update the `Scrypted Server Address` setting since the new server will have a different IP address.

## Migrating to HomeAssistant
**This requres you have followed the steps above and have a backup of your existing installation.**

1. Create a partial backup of the Scrypted Addon
  * `Settings -> System -> Backups`
2. Open the archive with 7zip (this can be done via SMB or locally)
  * The backup will be named "nonsense".tar sort by date and select the latest one.
3. Navigate through the backup by double clicking
  * `. -> *.tar -> *.tar -> data -> scrypted_data`
4. drag your "plugins" and "scrypted.db" folders into the 7zip window, clicking yes to confirm 
5. Close 7zip and click "ok" to update the homeassistant compatible backup with your content. (this may take a moment)
5. In Home assistant go back to your backups and restore your scrypted backup.
