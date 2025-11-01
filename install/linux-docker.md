<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Linux - Docker

Linux + Docker installations should refer to the [System Requirements](/server-hardware#scrypted-host-operating-system) for host OS recommendations. Docker Desktop on Windows/Mac is [not supported](https://github.com/koush/scrypted/wiki/Installation:-Docker-Desktop).

This script below will download and configure the the docker-compose.yml and install Scrypted as a service.

Use the Copy button in the snippet below to copy the entire script, and then paste the contents into Terminal to install Scrypted.

```sh
curl -s https://raw.githubusercontent.com/koush/scrypted/main/install/docker/install-scrypted-docker-compose.sh > ~/install-scrypted-docker-compose.sh 
sudo SERVICE_USER=$USER bash ~/install-scrypted-docker-compose.sh
rm ~/install-scrypted-docker-compose.sh
```

There will be a prompt to install Docker and set up external storage for Scrypted NVR. External storage is completely optional and can be set up later.

<!--@include: ./server-port.md-->

## docker-compose.yml

The [docker-compose.yml](https://github.com/koush/scrypted/blob/main/install/docker/docker-compose.yml) that contains the Scrypted configuration can be found at `~/.scrypted/docker-compose.yml`. Modification is typically not necessary. Alternate docker images are available:

|Image|Description|
|-|-|
|`ghcr.io/koush/scrypted`|The default image.|
|`ghcr.io/koush/scrypted:nvidia`|Image that includes full NVIDIA CUDA support for hardware accelerated transcoding and detection. The host must have CUDA, cuDNN, and NVIDIA container runtime installed. Then [modify the docker-compose.yml](https://github.com/koush/scrypted/blob/9a8034eb4ce35cff08201698110335a8fbafb0fc/install/docker/docker-compose.yml#L41) with the necessary changes for NVIDIA.|
|`ghcr.io/koush/scrypted:nvidia-legacy`|Image that includes full NVIDIA CUDA support for hardware accelerated transcoding and detection. The host must have CUDA, cuDNN, and NVIDIA container runtime installed. Then [modify the docker-compose.yml](https://github.com/koush/scrypted/blob/9a8034eb4ce35cff08201698110335a8fbafb0fc/install/docker/docker-compose.yml#L41) with the necessary changes for NVIDIA.|

::: tip
NVIDIA devices older than the Turing Series, ie, the 10 series and older, should use the `nvidia-legacy` image.
:::
