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

# Camera Configuration

Before adding a camera to Scrypted, the stream settings are configured for max compatibility with HomeKit, Google Home, Alexa, and [Scrypted NVR](https://demo.scrypted.app/#/demo). The steps below detail the optimal settings for these streaming destinations.

## Camera Administration

Open the Camera's web admin page or app to configure its codec settings. If the camera does not have a codec configuration tool (ie, cloud cameras such as Ring, Google, Arlo) or is a Unifi camera, continue on to [Adding the Camera](/add-camera).

## Authentication Setup

Ensure the camera password is a simple alphanumeric phrase. Special characters *often* cause issues when authenticating with RTSP, HTTP, or other camera services. If the camera supports both `Basic` and `Digest` Authorization, configure it for `Digest` only, which is more secure.

## Stream Setup

Enable the all available streams on the camera. Scrypted will use multiple streams, if available, for different purposes (remote streaming, analysis, etc). Most cameras will have one one `Main Stream` and one `Substream`. Some may only have a `Main Stream`. Cameras with one `Main Stream` and two `Substreams` are ideal.

::: tip
All the available camera streams may not be enabled by default. Verify they are enabled.
:::

::: tip
Some cameras, such as Hikvision or Amcrest, expose more streams and `Framerate` options when AI is disabled. The camera AI is not used within Scrypted, and may be disabled for better performance.
:::

## Video Setup

### H.264 Video Codec

Set all the stream video codecs to `H.264`. Do **NOT** use `H.264+`, `Super H.264`, `H.264B`: **TURN OFF/DISABLE ALL SPECIAL VARIANTS**. Sometimes this unsupported variant setting is called `Smart Code(c)` and it should be set to `Close` or `Off`.

#### Main Stream Setup

If the camera only has a single main stream, configure it as `1920x1080` and `2 Mbit`. The camera may support a higher resolution, but without substreams, it is recommended to use balanced settings. Otherwise, use the max available resolution for the `Main Stream`.

|Main Stream Resolution|Bitrate|
|-|-|
|3840x2160|8 Mbit, variable|
|2688x1520|3.5 Mbit, variable|
|1920x1080|2 Mbit, variable|

#### Sub Stream(s) Setup

|Stream|Max Resolution|Bitrate|
|-|-|-|
|Substream 1 or 2|1280x720|1 Mbit, variable|
|Substream 1 or 2|640x360|500 Kbit, variable|

### Framerate Settings

Configuring the camera frame rate involves changing two related settings: the `Frame Rate` and the `Frame Interval` (also sometimes referred to as `Keyframe Interval`, `I-Frame Interval`, or `Interframe Space`). Cameras will allow configuration either the `Interval` or `Space`. Use the settings guide below.

|Frame Rate|Interval|Space|
|-|-|-|
|20|80|4 (or 2)|

If `Frame Rate` of `20` is unavailable, `10` can be used instead.

|Frame Rate|Interval|Space|
|-|-|-|
|10|40|4 (or 2)|

#### Framerate Explanation

* Any `Frame Rate` between 10 and 30 is fine, and the chosen `Frame Rate` will determine the `Frame Interval`.
* A `4 (or 2) second frequency`, aka the `Interframe Space`, can be used to compute the `Frame Interval`.
  * `Interframe Space` is the number of seconds between keyframes. `Frame Interval` is the number frames between keyframes.
  * Cameras are typically configured in `Frame Interval`. The formula for `Frame Interval` value is: `Frame Interval = 4 seconds * Frame Rate`. Examples:
    * If `Frame Rate` is `30`, `Frame Interval` should be set to `120`.
    * If `Frame Rate` is `20`, `Frame Interval` should be set to `80`.
    * If `Frame Rate` is `10`, `Frame Interval` should be set to `40`.

## Audio Setup

Configure the audio codec on all streams by manufacturer recommendation below, and codec availability.

|Manufacturer|Codec|Sample Rate|
|-|-|-|
|Amcrest/Dahua|AAC|8000|
|Other Manufacturer|PCM-ulaw/G711u/G711mulaw|8000|

## Motion Sensor Setup

Most cameras have a built in motion sensor. It may be disabled by default, or have a blank activity zone. For optimal results, it is *highly recommended* to configure the motion zones to filter extraneous activity:

* Trees, bushes, or other objects that may trigger motion via wind.
* Camera facing a busy road will trigger motion on every passing car.

If the camera does not have a motion sensor, use a [Motion Detection Plugin](/motion-detection) to enable sofware motion detection.

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Amcrest
<img src="/img/amcrest-motion.png" width="200" data-zoomable="true" >
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Hikvision
<img src="/img/hikvision-motion.png" width="200" data-zoomable="true">
</div>

</div>

## Enable ONVIF

`ONVIF` is a standard camera communication channel for motion, snapshots, two way audio, codecs configuration. and pan/tilt/zoom. It is available on most `Local` cameras and should be enabled (even if not using the `ONVIF Plugin`).

* Enable `ONVIF` on the camera.
* Some cameras require entering a separate username and password for the ONVIF service. Ensure the `ONVIF` service has a user set up with the **same** username and password credentials used for the camera itself.
