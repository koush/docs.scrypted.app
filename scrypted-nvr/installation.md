# Installation

Install Scrypted using the one of the [Installation](/installation) options.

After installation, the Scrypted NVR can be installed from the `Plugins` section of the `Scrypted Management Console`.

## Purchase and Manage Subscription

This Scrypted NVR Plugin is in a *paid* public beta. A [live demo server](https://demo.scrypted.app/#/demo) and free trial is available to test the product.

1. Visit to the [billing portal](https://billing.scrypted.app) and login to purchase a subscription. Return to the billing portal at any time to upgrade or cancel the subscription.
2. Login to the Scrypted NVR Plugin using the *same login account* from the billing potral. The plugin's `Login` button can be found at the top of the Scrypted NVR plugin page within the Scrypted Management Console.

::: tip
Scrypted NVR on Mac and Windows must [Install](https://docs.scrypted.app/desktop-application.html) or [Migrate](https://docs.scrypted.app/migration.html#migrating-to-the-desktop-application) to the Desktop Application.
:::

## Recording Storage


### Drive Setup

Use an appropriate filesystem for your OS. The storage drive **must not be MS-DOS/FAT** formatted.

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

### Directory Configuration

The recordings storage directory can be configured within the `Scrypted NVR Plugin` Settings. [Multiple Storage Devices](#multiple-storage-devices) can also be added.

Servers running in Docker will need to [mount this path into the container](#docker-volumes).

## Camera Setup

1. [Configure the Camera](/camera-preparation).
2. [Add the Camera to Scrypted](/add-camera.md).
3. [Verify the Motion Sensor](/camera-verification) is working. Scrypted waits for the camera to report motion to trigger video analysis. 
:::warning
If the Camera's Motion Sensor is disabled, detections will be unavailable on the NVR timeline.
:::
4. Enable Recording in the Camera Settings by selecting `Scrypted NVR` in the `Integrations and Extensions` list.

## Cameras and Recordings

After the Scrypted NVR Plugin has been installed, `Cameras and Recordings` can be viewed on your local network by visiting the address of this Scrypted server.

Cloud access must be enabled for remote access via [browser, iOS, Android, and Desktop Apps](apps).

![](/img/scrypted-nvr/cameras-and-recordings.png)

## Advanced Storage Options

### Docker Volumes

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
      # The drive or network share will ALSO need to be configured in
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

### Multiple Storage Devices

Multiple Recording Storage directories can be added to Scrypted NVR. This can be used to improve loading performance, especially when recording a large number of cameras or recording primarily to a NAS.

Storage directories added to Scrypted NVR must be designated as either `Large` or `Fast`.
  * Large storage will store the local resolution recording (high quality).
  * Fast storage will store remote and low resolution (scrubbing, event lookup). 
  * The Default Recording Storage is designated as `Large`.

Multiple Recording Storage directories is not the same as [RAID](https://en.wikipedia.org/wiki/RAID), but it is a form of redundancy: substreams are written to separate storage devices. If there are multiple `Large` or `Fast` disks, the Storage used for a stream will be chosen to maximize disk utilization and retention time.  if a Storage device goes offline or fails will, camera (sub)streams stored on that device will be unavailable. The other (sub)streams will be available on the remaining Storage devices.

For example, if a `Large` disk fails, some high resolution stream will be unavailable. But the remote and low resolution recordings stored on the `Fast` disks are still available.

RAID Storage can be assigned to Recording Storage as a `Large` or `Fast` directory for servers that need full redundancy.
