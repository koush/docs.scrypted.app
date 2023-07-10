<script setup lang="ts"> 
import {ref} from 'vue';

const isWindows = navigator.userAgent.includes('Windows');

const detectedTouch = ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    ((navigator as any).msMaxTouchPoints > 0);

const isTouchDevice = ref((detectedTouch && !isWindows));
</script>

# Scrypted NVR

## What is Scrypted NVR?

[Scrypted NVR](https://demo.scrypted.app/#/demo) is a `Scrypted Plugin` that provides 24/7 recording and smart detections, with accompanying mobile and desktop applications.

## 24/7 Recording

Scrypted NVR records your camera 24 hours a day, 7 days a week. The the fluid user interface provides quick and easy access to all your recordings.


## Scrypted NVR Demo

<template v-if="!isTouchDevice">
This is a live interactive demo of the mobile app:
<br/>
<div style="display: flex; flex-direction: column; align-items: center;">
<iframe style="border-style: none;" class="ma-1" width="360" height="750" src="https://demo.scrypted.app/?display=phone"></iframe>
</div>
<br/>
A desktop preview is available on the <a href='https://demo.scrypted.app/#/demo'>Demo Site</a>.
</template>
<template v-else>
An interactive preview is available on the <a href='https://demo.scrypted.app/#/demo'>Demo Site</a>.
</template>
