<script setup lang="ts"> 
import ImagePopup from '../../src/ImagePopup.vue';
</script>


# Unraid Storage

::: warning Filesystem Requirement
Scrypted NVR requires storage on a native kernel filesystem such as `ext4`, `xfs`, or `btrfs` (see [Docker Volume](/scrypted-nvr/storage/docker.html#manual-docker-setup)). Unraid's default `/mnt/user/` share paths use `shfs`, a FUSE userspace filesystem that pools multiple disks. Although the underlying disks may be formatted as XFS, Scrypted sees the FUSE layer rather than the native filesystem. FUSE widens the timing window between directory operations, causing a race condition between the NVR's recording writer and storage pruner. This results in `ENOTEMPTY` errors and interrupted recordings. Any mount path that reaches a native kernel filesystem directly avoids this issue. See [koush/scrypted#2015](https://github.com/koush/scrypted/issues/2015) for details.
:::

## Working Example

Scrypted needs to access a native filesystem directly. There are several ways to achieve this on Unraid — unassigned disks, direct array disk mounts, cache pool mounts, etc. Here is one working configuration:

```
# Video on a dedicated array disk (native XFS)
/mnt/disk4/ScryptedVideo:/mnt/recordings/large

# Events/scrubbing data on an SSD cache pool (native btrfs)
/mnt/cache/ScryptedMeta:/mnt/recordings/fast

# Container data — not affected by the recording race condition
/mnt/user/ScryptedContainerData:/server/volume
```

Parity protection is preserved when mounting array disks directly — only the access path changes.

For Fast/Large storage sizing guidance, see [Multiple Storage Devices](/scrypted-nvr/recording-storage.html#multiple-storage-devices).

## General Setup

1. Configure a Recordings storage path within Unraid. The `Host Path` is the path to the storage on the Unraid host. The provided `Container Path` (a chosen path in the container like `/nvr` or `/recordings`) will be used for the recordings storage directory.
<!--@include: ./nvr-plugin-storage-settings.md-->


<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/scrypted-nvr/storage/unraid1.png"></ImagePopup>
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/scrypted-nvr/storage/unraid2.png"></ImagePopup>
</div>

</div>



