<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Unraid - Docker

1. Install `Scrypted` from `Unraid Apps`.
2. Configure `Appdata`. This path will contain the Scrypted database.
3. Optional: Scrypted NVR Setup
  * Click `Add Another Path`
  * Configure `Recordings` Storage if also using `Scrypted NVR`. This path contains the recordings for Scrypted NVR and needs to be at least 1TB in size.

::: warning
Paths shown in screenshots are examples and should be configured specific to your system preferences and drive setup.
:::

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Install App
<ImagePopup src="/img/unraid/unraid-app.png" width="200" ></ImagePopup>
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Configure Appdata
<ImagePopup src="/img/unraid/unraid-settings.png" width="200"></ImagePopup>
</div>

</div>

<div style="width: 100%; display: flex; flex-direction: row;">


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Configure Recordings (optional)
<ImagePopup src="/img/unraid/unraid-recordings.png" width="200"></ImagePopup>
</div>

</div>

<!--@include: ../server-port.md-->
