<script setup lang="ts"> 
import ImagePopup from '../../src/ImagePopup.vue';
</script>


# Unraid Storage

1. Configure a Recordings storage path within Unraid. The `Host Path` is the path to the storage on the Unraid host. The provided `Container Path` (which can be any path in the container like `/nvr` or `/recordings`) will be used for the recordings storage directory.
<!--@include: ./nvr-plugin-storage-settings.md-->


<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/scrypted-nvr/storage/unraid1.png"></ImagePopup>
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/scrypted-nvr/storage/unraid2.png"></ImagePopup>
</div>

</div>



