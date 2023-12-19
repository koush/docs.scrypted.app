<script setup lang="ts"> 
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';

onMounted(() => {
  mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
});

</script>

<style>
.medium-zoom-overlay {
  z-index: 20;
}

.medium-zoom-image {
  z-index: 21;
}
</style>
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
<img src="/img/scrypted-nvr/timeline.png" width="200" data-zoomable="true" >
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Events
<img src="/img/scrypted-nvr/events.png" width="200" data-zoomable="true">
</div>

</div>

## Rich Notifications

Rich Notifications are delivered instantly to iOS, Android, and Web apps with a thumbnail of the detection.

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<img src="/img/scrypted-nvr/notification.png" width="200" data-zoomable="true">
</div>

## Hardware Accelerated AI

Scrypted NVR `Smart Detections` use one of the available [Object Detection Plugins](/detection/object-detection) which can run on:

* CPU
* GPU
* Apple Silicon Neural Engine 🔥
* [Coral.ai](https://coral.ai) accelerators 🔥

### Apple Silicon

Scrypted NVR can leverage the [Neural Engine](https://www.makeuseof.com/what-is-a-neural-engine-how-does-it-work/) on the new Apple Silicon chips using the `CoreML Plugin`. Incredible performance at low power. Installing the [Scrypted Desktop App](/desktop-application) is recommended on Mac.

### NVIDIA and AMD

The [Scrypted Desktop App](/desktop-application) can utilize discrete and integrated GPUs for accelerated transcoding, moiton, and object detection.

### Google Coral

Scrypted NVR supports object detection using the [Google Coral.ai](https://coral.ai) accelerators via the `Tensorflow-Lite Plugin`. The PCI and USB models are both supported.

### Intel

Scrypted NVR supports Intel iGPUs and accelerator cards for blazing fast detection performance using the `OpenVINO Plugin`.
