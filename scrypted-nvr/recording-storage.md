# Storage Setup

Scrypted NVR requires a disk that can store at least 3 days of video for the cameras in the system. The storage requirement will vary based on the camera count and camera resolution. The following table provides a rough estimate for one week retention with a given number of cameras.

::: warning
* All storage disks must be 1TB minimum in size.
* Scrypted NVR will not work with filesystem quota features. Use a separate filesystem partition to restrict how much space is available.
:::

::: warning
NAS storage should also refer to the [NAS notes](#nas).
:::

| Resolution | 4 Cameras | 6 Cameras | 10 Cameras | 16 Cameras |
|------------|-----------|-----------|------------|------------|
| 1080P      | 1TB       | 1TB       | 1.5TB      | 2.4TB      |
| 2K         | 1.2TB     | 1.8TB     | 3TB        | 4.8TB      |
| 4K         | 2.4TB     | 3.6TB     | 6TB        | 9.6TB      |


## Host Setup

To configure storage, select the server installation platform below:

* [Proxmox VE](/scrypted-nvr/storage/proxmox.md)
* [Windows](/scrypted-nvr/storage/windows.md)
* [Mac](/scrypted-nvr/storage/mac.md)
* [Docker](/scrypted-nvr/storage/docker.md)
* [Unraid](/scrypted-nvr/storage/unraid.md)

After configuring storage, continue on to [Enable Camera Recording](/scrypted-nvr/camera-recording).

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

Scrypted NVR will delete recordings and potentially stop recording if the disk reaches 10% free space or only has 10GB free space remaining. This is to ensure there is sufficient space available for OS updates and optimal filesystem performance (defragmentation/reallocation). Disk performance decreases as the utilization approaches 90%. The system may become unresponsive if disk is filled completely, potentially by other programs writing to the disk.

For best performance, provide an entire disk or partition to Scrypted NVR. Volumes that share disk space other is not recommended as it may cause issues with recording retention periods.

## NAS

<!--@include: ./parts/nas-tip.md-->

::: warning
* When the storage device is a NAS Share, ensure that the NAS `Recycle Bin` feature is disabled, or the old recordings can not be properly deleted by Scrypted NVR and the disk will fill up.
* Storing video on a NAS is a reasonable option if one is available, however timelapse scrubbing may suffer from poor performance over the network.
:::
