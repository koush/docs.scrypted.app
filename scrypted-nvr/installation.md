# Installation

Install Scrypted using the one of the [Installation](/installation) options.

After installation, the Scrypted NVR can be installed from the `Plugins` section of the `Scrypted Management Console`.

## Recording Storage

The recordings storage directory can be configured within the `Scrypted NVR Plugin` Settings.

Servers running in Docker will need to mount this path into the container.

### Docker

1. Edit `~/.scrypted/docker-compose.yaml`.
2. Make the highlighted changes in the yaml block below, adjust the storage directory as appopriate.
3. Restart the container by running the following: 

```sh
cd ~/.scrypted && docker compose down && docker compose up -d.
```

#### docker-compose.yaml

```yaml{11,32}
services:
    scrypted:
        environment:
            # Scrypted NVR Storage (Part 2 of 3)

            # Uncomment the next line to configure the NVR plugin to store recordings
            # use the /nvr directory within the container. This can also be configured
            # within the plugin manually.
            # The drive or network share will ALSO need to be configured in the volumes
            # section below.
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

            # Modify to add the additional volume for Scrypted NVR.
            # The following example would mount the /mnt/sda/video path on the host
            # to the /nvr path inside the docker container.
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

Multiple Recording Storage directories be added to Scrypted NVR.

Storage directories added to Scrypted NVR must be designated as either `Large` or `Fast`.
  * Large storage will store the local resolution recording (high quality).
  * Fast storage will store remote and low resolution (scrubbing, event lookup). 
  * The Default Recording Storage is designated as `Large`.

Multiple Recording Storage directories is not the same as [RAID](https://en.wikipedia.org/wiki/RAID), but it is a form of redundancy: substreams are written to separate storage devices. If there are multiple `Large` or `Fast` disks, the Storage used for a stream will be chosen to maximize disk utilization and retention time.  if a Storage device goes offline or fails will, camera (sub)streams stored on that device will be unavailable. The other (sub)streams will be available on the remaining Storage devices.

For example, if a `Large` disk fails, some high resolution stream will be unavailable. But the remote and low resolution recordings stored on the `Fast` disks are still available.

RAID Storage can be assigned to Recording Storage as a `Large` or `Fast` directory for servers that need full redundancy.
