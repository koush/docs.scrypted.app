# Backup and Restore

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