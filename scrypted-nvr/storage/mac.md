<script setup lang="ts"> 
import ImagePopup from '../../src/ImagePopup.vue';
</script>

# Mac Storage

::: danger
When creating a NVR Recordings folder on macOS, the folder name must end with `.noindex`. This prevents macOS Spotlight from indexing the folder. Spotlight's indexing of NVR Recordings will cause system instability and crashes. For example, if the NVR Recordings folder is currently `/Volumes/MyExternalDrive/scrypted-nvr`, rename it to `/Volumes/MyExternalDrive/scrypted-nvr.noindex` and then update the setting in the NVR plugin.

Additionally, a directory should be created on the storage disk for video use.  MacOS will not honor the `.noindex` directive on the mount point itself.  The NVR Recording folder should be `/Volumes/MyExternalDrive/scrupted-nvr.noindex` and not `/Volumes/MyexternalDrive.noindex`

Alternatively, add the drive or folder to the `Search Privacy` list in [macOS Spotlight settings](https://support.apple.com/guide/mac-help/prevent-spotlight-searches-in-files-mchl1bb43b84/mac).
:::

1. The storage disk must be formatted as `APFS`.
<!--@include: ./nvr-plugin-storage-settings.md-->

<ImagePopup src="/img/scrypted-nvr/storage/mac.png"></ImagePopup>
