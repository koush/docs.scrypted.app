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


## Camera Verification

Navigate to the camera in the `Scrypted Management Console`.

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<img src="/img/camera-console.png" width="400" data-zoomable="true" >
</div>


## Snapshot

The camera should have a snapshot preview visible.

## Video and Audio

Click the snapshot preview to view the stream in the browser.

## Motion Detection

Stand in front of the camera to trigger the motion sensor. The motion event should be reported in the Scrypted `Events` card.


<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">

<img src="/img/events-button.png" width="200" data-zoomable="true" >
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">

<img src="/img/events-card.png" width="200" data-zoomable="true">
</div>

</div>

## Continue Setup

If the camera should have a functional stream and motion sensor, continue on to the [Platform](/platforms.md) or [Scrypted NVR](/scrypted-nvr/) setup.