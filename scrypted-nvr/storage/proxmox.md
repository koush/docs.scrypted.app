
# Proxmox VE Volume

Proxmox VE can add a storage device to Scrypted through the Proxmox VE web interface. There are a few steps: adding the storage to Proxmox VE and passing the storage through to Scrypted.

::: tip
The Recordings Directory should **not** be manually configured in the NVR plugin when using the process described below. Clear any manual Recordings Directory configuration inside the NVR plugin prior to usage of this script.
:::

::: warning
If adding multiple storage devices beyond the first, see the [Proxmox VE Disk Setup Notes](#disk-setup-notes) for additional notes on the script.
:::

## Prepare Storage

1. Open the Proxmox VE web interface.
2. Select the server (aka `node`) from the `Datacenter` drawer on the left.
3. Select the `Disks` section in the secondary drawer.
4. Find the Device in the list. The disk's Device will typically be something like `/dev/sda` or `/dev/sdb`.
5. Click `Wipe Disk`.
6. Select the `Directory` section in the secondary drawer.
7. Click `Create: Directory`.
  * For `Filesystem` select `ext4`.
  * Name the new storage something recognizable like `nvr-storage` (remember this for later).


## Add Storage

1. Select the server (aka `node`) from the `Datacenter` drawer on the left.
2. Select the `Shell` section in the secondary drawer.
3. Enter the following to download the storage setup script:

```sh
cd /tmp
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/proxmox/setup-scrypted-nvr-volume.sh > setup-scrypted-nvr-volume.sh
```

Adjust the the previously named `nvr-storage` if necessary, and run the script:

```sh
bash setup-scrypted-nvr-volume.sh nvr-storage
```

This command will stop Scrypted, add the storage, and start the Scrypted.

Continue on to [Enable Camera Recording](/scrypted-nvr/camera-recording).

<br/>
<br/>
<br/>

::: info
Reference: [Proxmox VE Disk Setup Notes](#disk-setup-notes) has information about the script, including using multiple disks or arbitrary host paths disks.

Reference: [Proxmove VE Mount Point](#mount-point) has information about using standard Proxmox Mount points, which are not recommended due to issues with backup and snapshots.
:::

---

## Mount Point

For example, as seen in the screenshot below, inside the container `Resources`:

1. Click `Add` and select `Mount Point`.
2. Set the size to 1000GB (adjust accordingly).
3. Set the mount to `/mnt/crucial` (the name can be any preference in place of "crucial").
4. The `/mnt/crucial` path can then be provided to the NVR Plugin after restarting the container.

::: warning
The Proxmox VE Mount Points **MUST** set the path to be inside `/mnt` in the container.
:::

![](/img/scrypted-nvr/proxmox-mount-point.png)

## Disk Setup Notes

The disk setup adds the disk as a directory on the host system. The setup script modifies the lxc conf file (`/etc/pve/lxc/10443.conf`) to mount the directory into the container. It also creates a hidden `.nvr` file to the storage folder to earmark it for NVR usage. This method allows for fast snapshots, replications, and backups.

Environment variables can be set to change the setup script behavior:

::: warning
Read more about [Multiple Storage Devices](/scrypted-nvr/recording-storage.md#multiple-storage-devices) before running these advanced commands.
:::

Additional disks can be added by setting the `ADD_DISK=true` environment variable:

```sh
ADD_DISK=true bash setup-scrypted-nvr-volume.sh another-nvr-storage
```

A `Fast Disk` can be added by setting the `FAST_DISK=true` environment variable:

```sh
FAST_DISK=true bash setup-scrypted-nvr-volume.sh fast-nvr-storage
```

The script also supports mounting a host path as a volume within the Scrypted LXC. For example, if you have an existing zfs array at `/my-raid-device`, you can create a directory for NVR recordings at `/my-raid-device/scrypted-nvr/` and then use the script as follows:

```sh
bash setup-scrypted-nvr-volume.sh nvr-storage /my-raid-device/scrypted-nvr/
```
