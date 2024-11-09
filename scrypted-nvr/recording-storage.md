# Storage Setup

Scrypted NVR requires a disk that can store at least 3 days of video for the cameras in the system. The storage requirement will vary based on the camera count and camera resolution. The following table provides a rough estimate for one week retention with a given number of cameras.

| Resolution | 4 Cameras | 6 Cameras | 10 Cameras | 16 Cameras |
|------------|-----------|-----------|------------|------------|
| 1080P      | 1TB       | 1TB       | 1.5TB      | 2.4TB      |
| 2K         | 1.2TB     | 1.8TB     | 3TB        | 4.8TB      |
| 4K         | 2.4TB     | 3.6TB     | 6TB        | 9.6TB      |

::: warning
All storage disks must be 1TB minimum in size.
:::

::: warning
When the storage device is a NAS Share, ensure that the NAS `Recycle Bin` feature is disabled, or the old recordings can not be properly deleted by Scrypted NVR and the disk will fill up.
:::

::: warning
Scrypted NVR will not work with filesystem quota features. Use a separate filesystem partition to restrict how much space is available.
:::


## Disk Setup

Use an appropriate filesystem for your OS. The storage disk **must not be MS-DOS/FAT** formatted. For best performance, provide an entire disk or partition to Scrypted NVR. Volumes that share disk space other is not recommended as it may cause issues with recording retention periods.

|OS|Filesystem|
|-|-|
|macOS|HFS or APFS|
|Windows|NTFS|
|Linux|ext4|

::: warning
When the storage device is a NAS Share, ensure that the NAS `Recycle Bin` feature is disabled, or the old recordings can not be properly deleted by Scrypted NVR and the disk will fill up.
:::

::: warning
Scrypted NVR will not work with filesystem quota features. Use a separate filesystem partition to restrict how much space is available.
:::

## OS Setup

To configure storage, select the server installation platform below:

* [Proxmox](#proxmox-ve-volume)
* [Windows](#windows-storage)
* [Mac](#mac-storage)
* [Docker](#docker-volume)

## Mac Storage

1. The storage disk must be formatted as `HFS` or `AFPS`.
2. The recordings storage directory can be configured within the `Scrypted NVR Plugin` Settings. [Multiple Storage Devices](#multiple-storage-devices) can also be added.
3. Continue on to [Enable Camera Recording](/scrypted-nvr/camera-recording).

## Windows Storage

1. The storage disk must be formatted as `NTFS`.
2. The recordings storage directory can be configured within the `Scrypted NVR Plugin` Settings. [Multiple Storage Devices](#multiple-storage-devices) can also be added.

## Proxmox VE Volume

Proxmox VE can add a storage device to Scrypted through the Proxmox VE web interface. There are a few steps: adding the storage to Proxmox VE and passing the storage through to Scrypted.

### Add Storage to Proxmox

1. Open the Proxmox VE web interface.
2. Select the server (aka `node`) from the `Datacenter` drawer on the left.
3. Select the `Disks` section in the secondary drawer.
4. Find the Device in the list. The disk's Device will typically be something like `/dev/sda` or `/dev/sdb`.
5. Click `Wipe Disk`.
6. Select the `Directory` section in the secondary drawer.
7. Click `Create: Directory`.
  * For `Filesystem` select `ext4`.
  * Name the new storage something recognizable like `nvr-storage` (remember this for later).


### Add Storage to Scrypted

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
Reference: [Proxmox VE Disk Setup Notes](#proxmox-ve-disk-setup-notes) has information about the script.

Reference: [Proxmove VE Mount Point](#proxmox-ve-mount-point) has information about using standard Proxmox Mount points, which are not recommended due to issues with backup and snapshots.
:::

---

#### Proxmox VE Mount Point

Proxmox VE Mount Points **MUST** place the mount point inside `/mnt` in the container. For example, in the screenshot below. Go to `Resources` and `Add` a new 1000GB `Mount Point` named "crucial".

![](/img/scrypted-nvr/proxmox-mount-point.png)

The `/mnt/crucial` path can then be provided to the NVR Plugin after restarting the container.

#### Proxmox VE Disk Setup Notes

The disk setup adds the disk as a directory on the host system. The setup script modifies the lxc conf file (`/etc/pve/lxc/10443.conf`) to mount the directory into the container. It also creates a hidden `.nvr` file to the storage folder to earmark it for NVR usage. This method allows for fast snapshots, replications, and backups.

Environment variables can be set to change the setup script behavior:

::: warning
Read more about [Multiple Storage Devices](#multiple-storage-devices) before running these advanced commands.
:::

Additional disks can be added by setting the `ADD_DISK=true` environment variable:

```sh
ADD_DISK=true bash setup-scrypted-nvr-volume.sh another-nvr-storage
```

A `Fast Disk` can be added by setting the `FAST_DISK=true` environment variable:

```sh
FAST_DISK=true bash setup-scrypted-nvr-volume.sh fast-nvr-storage
```

## Docker Volume

Use the [Quick Setup](#quick-setup) script to format a disk or use an existing directory in Scrypted NVR. [Manual Docker Setup](#manual-docker-setup) steps are also available.

### Quick Setup

Run the following to download the [script](https://github.com/koush/scrypted/blob/main/install/docker/setup-scrypted-nvr-volume.sh):

```sh
mkdir -p ~/.scrypted
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/docker/setup-scrypted-nvr-volume.sh > ~/.scrypted/setup-scrypted-nvr-volume.sh
```

If a recording directory is already formatted and mounted, follow the steps at [Existing Storage Directory](#existing-storage-directory). Otherwise continue on to formatting a [New Disk](#new-disk).

#### Existing Storage Directory

```sh
sudo SERVICE_USER=$USER bash ~/.scrypted/setup-scrypted-nvr-volume.sh /path/to/existing/directory
```

The docker container will be updated and restarted with the new Recordings Directory.

#### New Disk

Run the following to list available disks:

```sh
lsblk
```

The output will be similar to below:

```
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
loop0    7:0    0  63.4M  1 loop /snap/core20/1974
loop1    7:1    0  63.9M  1 loop /snap/core20/2105
loop2    7:2    0 111.9M  1 loop /snap/lxd/24322
loop3    7:3    0  53.3M  1 loop /snap/snapd/19457
loop4    7:4    0  40.4M  1 loop /snap/snapd/20671
sda      8:0    0   128G  0 disk 
├─sda1   8:1    0     1M  0 part 
└─sda2   8:2    0   128G  0 part /
sdx      8:16   0  4096G  0 disk 
sr0     11:0    1  1024M  0 rom  
```

In the example above the 4TB storage disk is listed as `sdx`. To format and use `sdx`, run:

```sh
sudo SERVICE_USER=$USER bash ~/.scrypted/setup-scrypted-nvr-volume.sh sdx
```

The docker container will be updated and restarted with the new disk.

Continue on to [Enable Camera Recording](/scrypted-nvr/camera-recording).

### Manual Docker Setup

1. The storage disk must be formatted as `ext4` or `xfs`.
1. Edit `~/.scrypted/docker-compose.yaml`.
2. Make the highlighted changes in the yaml block below, adjust the storage directory as appropriate.
3. Restart the container by running the following: 

```sh
cd ~/.scrypted && docker compose down && docker compose up -d
```

#### docker-compose.yaml

```yaml{13,36}
services:
  scrypted:
    environment:
      # Scrypted NVR Storage (Part 2 of 3)

      # Uncomment this line to configure the NVR plugin to store
      # recordings within the /nvr directory inside the container.
      # DO NOT MODIFY /nvr.
      # The Recordings Directory in the NVR Plugin will autopopulate
      # with /nvr (unless it was manually changed earlier).
      # The disk or network share will ALSO need to be configured in
      # Part 3.
      - SCRYPTED_NVR_VOLUME=/nvr

      - SCRYPTED_WEBHOOK_UPDATE_AUTHORIZATION=Bearer SET_THIS_TO_SOME_RANDOM_TEXT
      - SCRYPTED_WEBHOOK_UPDATE=http://localhost:10444/v1/update

      # Uncomment next 3 lines for Nvidia GPU support.
      # - NVIDIA_VISIBLE_DEVICES=all
      # - NVIDIA_DRIVER_CAPABILITIES=all

      # Uncomment next line to run avahi-daemon inside the container
      # Don't use if dbus and avahi run on the host and are bind-mounted
      # (see below under "volumes")
      # - SCRYPTED_DOCKER_AVAHI=true
    # runtime: nvidia

    volumes:
      # Scrypted NVR Storage (Part 3 of 3)

      # Modify to add the add a Recordings Directory for Scrypted NVR.
      # The following example would mount the /mnt/media/video path on
      # the host to the /nvr path inside the docker container.
      # Modify /mnt/media/video according to the server path.
      # DO NOT MODIFY /nvr.
      - /mnt/media/video:/nvr

      # Or use a network mount from one of the CIFS/NFS examples at the top of this file.
      # - type: volume
      #   source: nvr
      #   target: /nvr
      #   volume:
      #     nocopy: true

      # uncomment the following lines to expose Avahi, an mDNS advertiser.
      # make sure Avahi is running on the host machine, otherwise this will not work.
      # not compatible with Avahi enabled via SCRYPTED_DOCKER_AVAHI=true
      # - /var/run/dbus:/var/run/dbus
      # - /var/run/avahi-daemon/socket:/var/run/avahi-daemon/socket

      # Default volume for the Scrypted database. Typically should not be changed.
      - ~/.scrypted/volume:/server/volume
```

## Multiple Storage Devices

Multiple Recording Storage directories can be added to Scrypted NVR (`Large Disks`). This can be used to improve loading performance, particularly when recording a large number of cameras. Multiple Recording Storage directories is not the same as [RAID](https://en.wikipedia.org/wiki/RAID), but it is a form of redundancy: main and sub streams are distributed across all storage devices. If a Storage disk goes offline or fails, the specific camera stream stored on that disk will be unavailable. The other streams will be available on other Storage disk(s).

Scrypted NVR setups recording to Network Attached Storage (NAS) will result in reduced performance due to network latency as well as an increased surface area for recording failure. This configuration is not recommended. To mitigate the performance issues, Scrypted NVR can utilize a direct attach disk (as a `Fast` disk) in addition to the NAS disk. The NAS (`Large`) disk will store the main stream while `Fast` disk will store remote and low resolution (scrubbing, event lookup).

::: danger
Do not use `Fast` storage unless the Scrypted NVR server is primarily recording to a NAS.

The `Fast` disk must be a direct attached disk (SATA or USB) and at least 1TB in size. The ideal ratio for `Fast` and `Large` disks is **1 to 6**. 

E.g.: If the `Large` storage is located on a NAS with 18TB available, the `Fast` disk must be at least 3TB.
:::

The Default Recording Storage is designated as `Large`.

RAID disks can be assigned to Recording Storage as a storage directory for servers that need true redundancy.

## Storage Utilization

Scrypted NVR will delete recordings and potentially stop recording if the disk reaches 10% free space or only has 10GB free space remaining. This is to ensure there is sufficient space available for OS updates and optimal filesystem performance (defragmentation/reallocation). The system may become unresponsive if disk is filled completely, potentially by other programs writing to the disk.

For best performance, provide an entire disk or partition to Scrypted NVR. Volumes that share disk space other is not recommended as it may cause issues with recording retention periods.
