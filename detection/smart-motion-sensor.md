<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Smart Motion Sensor

## Setup

Scrypted can create a `Smart Motion Sensor` to report when a object is detected on a camera. This feature can be used with supported cameras that report smart detection events or [Scrypted NVR Object Detection](/scrypted-nvr/).

1. Install the `Video Analysis Plugin`.
2. Click `Add New`.
3. Select a camera to create a sensor.
4. Select the desired detections to report.
5. This sensor can be synced to other platforms to be used within automations.

::: tip
When using Smart Motion Sensor with detections from Scrypted NVR (and supported camera plugins like Unifi), the sensor can also provide a snapshot of the most recent event.
:::

<ImagePopup src="/img/smart-motion-sensor.png"></ImagePopup>

## License Plate Recognition

Scrypted can create a `Smart Motion Sensor` that triggers on specific license plates. This feature requires camera hardware with native LPR support (Unifi AI Cameras) or via software with Scrypted NVR Object Detection. License Plate Recognition is *highly* dependent on lighting conditions, vehicle speed, camera angle, and video quality. Refer to the manufacturers documentation for optimal setup.

<!--@include: ../parts/scrypted-nvr-lpr.md-->

## Face Recognition

Scrypted can create a `Smart Motion Sensor` that triggers on specific people. This feature requires requires Scrypted NVR Object Detection (currently no camera/plugin supports this on hardware). Face Recognition is *highly* dependent on lighting conditions and face capture angle.

<!--@include: ../parts/scrypted-nvr-face.md-->
