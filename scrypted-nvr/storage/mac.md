<script setup lang="ts"> 
import ImagePopup from '../../src/ImagePopup.vue';
</script>

# Mac Storage

::: danger
When creating a NVR Recordings folder on macOS, the folder name must end with `.noindex`. This prevents macOS Spotlight from indexing the folder. Spotlight's indexing of NVR Recordings will cause system instability and crashes. For example, one could use: `/Volumes/MyRecordingsDrive/video.noindex`.

Alternatively, add the drive or folder to the `Search Privacy` list in [macOS Spotlight settings](https://support.apple.com/guide/mac-help/prevent-spotlight-searches-in-files-mchl1bb43b84/mac).
:::

1. The storage disk must be formatted as `APFS`.
<!--@include: ./nvr-plugin-storage-settings.md-->

<ImagePopup src="/img/scrypted-nvr/storage/mac.png"></ImagePopup>
