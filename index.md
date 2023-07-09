---
# https://vitepress.dev/reference/default-theme-home-page
# layout: home

hero:
  name: "Scrypted Docs"
  text: "Video Integration Platform"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup lang="ts"> 
import {ref} from 'vue';

const isWindows = navigator.userAgent.includes('Windows');

const detectedTouch = ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    ((navigator as any).msMaxTouchPoints > 0);

const isTouchDevice = ref((detectedTouch && !isWindows));

</script>

# What is Scrypted? 

[Scrypted](https://scrypted.app) is a video integration hub. Scrypted can import streams from a range of cameras and stream them to a various platforms (HomeKit, Google Home, Alexa, Home Assistant).

# What is Scrypted NVR?
[Scrypted NVR](https://demo.scrypted.app/#/demo) is a `Scrypted Plugin` provides 24/7 recording and smart detections, with accompanying mobile and desktop applications.

<div v-if="!isTouchDevice" style="display: flex; flex-direction: column; align-items: center;">
<iframe style="border-style: none;" class="ma-1" width="360" height="750" src="https://demo.scrypted.app/?display=phone"></iframe>
</div>

# Installation

Scrypted can be installed on Windows, Mac, or Linux as a [desktop application](https://github.com/koush/nvr.scrypted.app/releases) or as a [background service](https://github.com/koush/scrypted#installation).

After Scrypted has been installed, continue on to the Camera Setup.
