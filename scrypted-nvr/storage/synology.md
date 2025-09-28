<script setup lang="ts"> 
import ImagePopup from '../../src/ImagePopup.vue';
</script>


# Synology Storage

1. Configure a Recordings storage path in the Scrypted container inside Synology (`Volume Mapping`). The `Host Path` is the path to the storage on the Synology host. The provided `Container Path` (a chosen path in the container like `/nvr` or `/recordings`) will be used for the recordings storage directory.
<!--@include: ./nvr-plugin-storage-settings.md-->

<ImagePopup src="/img/scrypted-nvr/storage/synology.png"></ImagePopup>





