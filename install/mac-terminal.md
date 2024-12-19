<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Mac - Terminal

Scrypted NVR on Mac must install the [Install](/desktop-application) or [Migrate](/maintenance/migration.md#migrating-to-the-desktop-application) to the [Desktop Application](#desktop-app). The Desktop App has GPU acceleration, is fully self contained with zero dependencies, and requires a license. The free version of Scrypted may be installed using the Terminal Installation below.

This script below will download all the dependencies, including node, python, and install Scrypted as a service.

1. Install [Homebrew](https://brew.sh).
2. Use the Copy button in the snippet below to copy the entire script, and then paste the contents into Terminal to install Scrypted.

```sh
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/local/install-scrypted-dependencies-mac.sh > ~/install-scrypted-dependencies-mac.sh 
bash ~/install-scrypted-dependencies-mac.sh
rm ~/install-scrypted-dependencies-mac.sh
```

<!--@include: ../server-port.md-->
