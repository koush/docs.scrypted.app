<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Smart Occupancy Sensor

## Setup

Scrypted can create a `Smart Occupancy Sensor` that remains active while a specific object is detected on a camera. This requires [Scrypted NVR Object Detection](/scrypted-nvr/) or any of the other object detection plugins like CoreML, OpenVINO, ONNX, or TensorFlow-lite.

1. Install the `Video Analysis Plugin`.
2. Click `Add New`.
3. Select a camera to create a sensor.
4. Select the desired detections to report.
5. This sensor can be synced to other platforms to be used within automations.

<ImagePopup src="/img/smart-occupancy-sensor.png"></ImagePopup>

## License Plate Recognition

Scrypted can create a `Smart Occupancy Sensor` that triggers on specific license plates. This feature requires Scrypted NVR Object Detection. License Plate Recognition is *highly* dependent on lighting conditions, vehicle speed, camera angle, and image quality.

<!--@include: ../parts/scrypted-nvr-lpr.md-->

## Face Recognition

Scrypted can create a `Smart Occupancy Sensor` that triggers on specific people. This feature requires requires Scrypted NVR Object Detection (currently no camera/plugin supports this on hardware). Face Recognition is *highly* dependent on lighting conditions and face capture angle.

<!--@include: ../parts/scrypted-nvr-face.md-->
