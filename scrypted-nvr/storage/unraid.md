<script setup lang="ts"> 
import ImagePopup from '../../src/ImagePopup.vue';
</script>


# Unraid Storage

::: warning Filesystem Requirement
Scrypted NVR requires storage on an `ext4` or `xfs` filesystem (see [Docker Volume](/scrypted-nvr/storage/docker.html#manual-docker-setup)). Unraid's default `/mnt/user/` share paths use `shfs`, a FUSE userspace filesystem that pools multiple disks. Although the underlying disks may be formatted as XFS, Scrypted sees the FUSE layer rather than the native filesystem. This can cause recording failures due to how FUSE handles file operations used by the NVR recording system. See [koush/scrypted#2015](https://github.com/koush/scrypted/issues/2015) for details.
:::

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



