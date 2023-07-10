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

[Scrypted](https://scrypted.app) is an open source video integration platofrm. Using various [Plugins](/platforms), Scrypted can receive streams from a range of cameras and send them to other platforms ([HomeKit](/homekit), [Google Home](/google-home), [Alexa](/alexa), [Home Assistant](/home-assistant)).

::: tip
Scrypted has active communities on [Discord](https://discord.gg/DcFzmBHYGq), [Reddit](https://reddit.com/r/scrypted), and [Github](https://github.com/koush/scrypted). Check them out if you have questions!
:::

## What is Scrypted NVR?

[Scrypted NVR](/scrypted-nvr/) is a `Plugin` that provides 24/7 recording, [smart detections](/scrypted-nvr/smart-detections), [notifications](/scrypted-nvr/smart-detections#rich-notifications), and accompanying [mobile and desktop apps](/scrypted-nvr/apps).

<template v-if="!isTouchDevice">
<div >This is a live interactive demo:</div>
<br/>
<div style="display: flex; flex-direction: column; align-items: center;">
<iframe style="border-style: none;" class="ma-1" width="360" height="750" src="https://demo.scrypted.app/?display=phone"></iframe>
</div>
</template>
