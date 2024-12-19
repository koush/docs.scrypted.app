<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Desktop App

The recommended installation method for Mac and Windows is the [Desktop App](/desktop-application). The app provides hardware accelerated 
features unavailable to the background service inside a self contained, easily installable, package. The app can also serve as a viewer for an existing Scrypted server installation.

## Ubuntu/Debian Repository

::: tip
Scrypted servers running on Linux should typically use the [Docker](#linux-docker) installation. 
:::

The Desktop App can be installed and updated via `apt`: 

```sh
echo 'deb [trusted=yes] https://nuts.scrypted.app/apt stable main' | sudo tee /etc/apt/sources.list.d/scrypted.list
sudo apt update
sudo apt install scrypted-electron
```

Install the Desktop App from the above instructions. The management console can be accessed via the app.

<!--@include: ../server-port.md-->
