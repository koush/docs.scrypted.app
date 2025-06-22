<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Scrypted NVR Setup

Install Scrypted using the one of the [installation options](/installation).

After installation, the Scrypted NVR can be installed from the `Plugins` section of the `Scrypted Management Console`.

## Purchase and Manage Subscription

This Scrypted NVR Plugin is in a *paid* plugin. A [live demo server](https://demo.scrypted.app/#/demo) and free trial is available to test the product.

1. Visit to the [billing portal](https://billing.scrypted.app) and login to purchase a subscription. Return to the billing portal at any time to upgrade or cancel the subscription.
2. Login to the Scrypted NVR Plugin using the *same login account* from the billing potral. The plugin's `Login` button can be found at the top of the Scrypted NVR plugin page within the Scrypted Management Console.

::: tip
Scrypted NVR on Mac and Windows must [Install](https://docs.scrypted.app/desktop-application.html) or [Migrate](https://docs.scrypted.app/maintenance/migration.html#migrating-to-the-desktop-application) to the Desktop Application.
:::

## Remove Defunct Plugins

Scrypted NVR contains improved motion sensor and video decoder components. The following plugins can be removed, if they are installed:
* Python Codecs
* OpenCV
* PAM-Diff

## Configure Object Detection

::: warning
Most systems require no further configuration. Changing defaults is not recommended.
:::

For common hardware setups found in the buyer's guide, like Intel iGPU or Apple Silicon, no further configuration is necessary. However, uncommon hardware configurations will need additional setup:

* Windows + NVIDIA
  * [ONNX dependencies](/detection/object-detection.md#onnx) must be installed.
  * Set the Scrypted NVR Default Object Detector to ONNX. 
* Proxmox/Docker + NVIDIA
  * Installation must use the `nvidia` docker [tag](/detection/object-detection.md#onnx).
* Coral EdgeTPU 
  * EdgeTPU drivers [must be installed](/detection/object-detection.md#tensorflow-lite).
  * Set the Scrypted NVR Default Object Detector to Tensorflow Lite.

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Scrypted NVR Object Detector Setting
<ImagePopup src="/img/scrypted-nvr/detector.png" width="400" ></ImagePopup>
</div>
