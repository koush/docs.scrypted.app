# Docker Volume

Use the [Quick Setup](#quick-setup) script to format a disk or use an existing directory in Scrypted NVR. [Manual Docker Setup](#manual-docker-setup) steps are also available.

## Quick Setup

Run the following to download the [script](https://github.com/koush/scrypted/blob/main/install/docker/setup-scrypted-nvr-volume.sh):

```sh
mkdir -p ~/.scrypted
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/docker/setup-scrypted-nvr-volume.sh > ~/.scrypted/setup-scrypted-nvr-volume.sh
```

If a recording directory is already formatted and mounted, follow the steps at [Existing Storage Directory](#existing-storage-directory). Otherwise continue on to formatting a [New Disk](#new-disk).

### Existing Storage Directory

::: tip
The existing storage directory should be on an ext4 filesystem.
:::

```sh
sudo SERVICE_USER=$USER bash ~/.scrypted/setup-scrypted-nvr-volume.sh /path/to/existing/directory
```

The docker container will be updated and restarted with the new Recordings Directory.

### New Disk

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

## Manual Docker Setup

1. The storage disk must be formatted as `ext4` or `xfs`.
1. Edit `~/.scrypted/docker-compose.yaml`.
2. Make the highlighted changes in the yaml block below, adjust the storage directory as appropriate.
3. Restart the container by running the following: 

```sh
cd ~/.scrypted && docker compose down && docker compose up -d
```

## docker-compose.yaml

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
