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


# Smart Detections

## Timeline and Events

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

## Hardware Acceleration

Scrypted NVR `Smart Detections` use one of the available [Object Detection Plugins](/object-detection) which can run on:

* CPU
* GPU
* Apple Silicon Neural Engine 🔥
* [Coral.ai](https://coral.ai) accelerators 🔥
