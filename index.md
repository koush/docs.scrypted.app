<script setup lang="ts"> 
import {ref} from 'vue';

const isWindows = navigator.userAgent.includes('Windows');

const detectedTouch = ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    ((navigator as any).msMaxTouchPoints > 0);

const isTouchDevice = ref((detectedTouch && !isWindows));

</script>

# Scrypted

## What is Scrypted? 

[Scrypted](https://scrypted.app) is a video integration platform. Scrypted can import streams from a range of cameras and stream them to various destinations ([HomeKit](/homekit), [Google Home](/google-home), [Alexa](/alexa), [Home Assistant](/home-assistant)).

## What is Scrypted NVR?

[Scrypted NVR](/scrypted-nvr/) is a `Scrypted Plugin` that provides 24/7 recording, smart detections, notifications, and accompanying mobile and desktop applications.

<template v-if="!isTouchDevice">
<div >This is a live interactive demo:</div>
<br/>
<div style="display: flex; flex-direction: column; align-items: center;">
<iframe style="border-style: none;" class="ma-1" width="360" height="750" src="https://demo.scrypted.app/?display=phone"></iframe>
</div>
</template>
