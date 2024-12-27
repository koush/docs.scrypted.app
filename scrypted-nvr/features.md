<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Features

## Adaptive Bitrate

Scrypted NVR leverages all the camera substreams and transcoding to provide bulletproof streams, regardless of downstream network conditions.

::: tip
Adaptive Bitrate is a [Platform](/platforms) level feature, and **also** improves streaming to HomeKit, Google Home, Alexa, and Home Assistant.
:::

## Smart Detections

### Timeline and Events

The Timeline and Events views are powered by `Smart Detections` that highlight key moments in the day: people and cars arriving and leaving, packages, and animals.

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Timeline
<ImagePopup src="/img/scrypted-nvr/timeline.png" width="200" ></ImagePopup>
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Events
<ImagePopup src="/img/scrypted-nvr/events.png" width="200"></ImagePopup>
</div>

</div>

## Face Recognition

Tag and recognize faces for use in automations.

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/scrypted-nvr/face-recognition.png" width="400"></ImagePopup>
</div>

## License Place Recognition

Recognize and search vehicle plates.

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/scrypted-nvr/lpr.png" width="400"></ImagePopup>
</div>

## Rich Notifications

Rich Notifications are delivered instantly to iOS, Android, and Web apps with a thumbnail of the detection.

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/scrypted-nvr/notification.png" width="200"></ImagePopup>
</div>

## Hardware Accelerated AI

Scrypted NVR `Smart Detections` use one of the available [Object Detection Plugins](/detection/object-detection) which can run on:

* CPU
* GPU
* Apple Silicon Neural Engine 🔥
* Intel Core Ultra NPU 🔥
* [Coral.ai](https://coral.ai) accelerators

### Apple Silicon

Scrypted NVR can leverage the [Neural Engine](https://www.makeuseof.com/what-is-a-neural-engine-how-does-it-work/) on the new Apple Silicon chips using the `CoreML Plugin`. Incredible performance at low power. Installing the [Scrypted Desktop App](/desktop-application) is recommended on Mac.

### Intel

Scrypted NVR supports Intel iGPUs and accelerator cards for blazing fast detection performance using the `OpenVINO Plugin`. 12th Generation Intel processors like the N100 have great performance at a low power and price point.

Intel Core Ultra chips with the built in NPU are also supported and provide state of the art performance.

### NVIDIA

Scrypted NVR supports object detection on NVIDIA GPUs via the `ONNX Plugin`. NVIDIA object detection requires CUDA, which is only provided in [Scrypted's NVIDIA Docker image](/installation.html#docker-compose-yml) when using the `koush/scrypted:nvidia` image.

### Google Coral EdgeTPU

Scrypted NVR supports object detection using the [Google Coral.ai](https://coral.ai) accelerators via the `Tensorflow-Lite Plugin`. The PCI and USB models are both supported.
