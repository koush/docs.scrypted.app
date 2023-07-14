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


# Add a Camera

Scrypted supports a variety of camera models. In the `Scrypted Management Console`, navigate to `Plugins` in the side bar. Then search and install the appropriate Scrypted Plugin for your camera manufacturer.

![image](/img/install-plugin.png)

## Plugins

Cameras fall into two categories: `Local` cameras and `Cloud` cameras. `Local` cameras stream on the local network, while `Cloud` cameras stream through the cloud, even if the camera is on the local network.  Cloud cameras can also be added to Scrypted, but often have limited functionality, including: high latency streams, slow snapshots, unreliable motion detection, etc.

Find a matching plugin for your camera and install it in Scrypted Management Console. If the camera is a `Local` camera, and no exact plugin can be found, try using the `ONVIF` or `RTSP` plugin (in that order).

## Amcrest/Dahua

The `Amcrest Plugin` also supports Dahua cameras. Supports `Two Way Audio`.
* Install the ONVIF plugin if your camera has `Pan/Tilt/Zoom` capability.

## Hikvision

The `Hikvision Plugin` also supports a wide variety of whitelabled cameras such as Hitosino, etc. Supports `Two Way Audio`.
* Install the ONVIF plugin if your camera has `Pan/Tilt/Zoom` capability.

## Reolink

The `Reolink Plugin` supports Reolink cameras and doorbells. `Two Way Audio` is only supported on the doorbell.

## Tapo

The Tapo plugin *only* provides `Two Way Audio` support for Tapo cameras. The Tapo camera itself should be added using the `ONVIF Plugin`.

## Doorbird

Doorbird Plugin supports Doorbird devices, including `Two Way Audio`.

## Unifi Protect

The `Unifi Protect Plugin` supports all Unifi cameras, including `Two Way Audio`.

## ONVIF

Most local cameras can be used with the `ONVIF Plugin`, but using this plugin is recommended only if a manufacturer plugin is not available.

## RTSP

`RTSP Plugin` should be used as a last resort, as it will require a Scrypted to do video processing to detect motion events.

* If the RTSP Camera has mail delivery of motion events, that can be used to trigger a [Dummy Motion Switch](/dummy-detection) within Scrypted, and video processing will not be necessary.
* If there is no mail delivery of motion events, use one of the [Motion Detection Plugins](/motion-detection) to analyze video for motion.
* When adding the camera with the `RTSP Plugin`, add and assign all available streams. There is typically a `Main Stream` and a `Substream`.

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Add RTSP Streams
<img src="/img/add-streams.png" width="200" data-zoomable="true" >
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Assign RTSP Streams
<img src="/img/assign-streams.png" width="200" data-zoomable="true">
</div>

</div>

## Ring

The `Ring Plugin` can be used to add Ring nearly all Ring cameras, sensors, security systems, lights, and more.

## Arlo

The `Arlo Plugin` supports all Arlo cameras.

## Google

The `Google Device Access Plugin` supports Google, Nest, and Dropcam cameras, as well as Nest/Google Thermostats.

## Tuya

The `Tuya Plugin` supports Tuya cameras. It requires a Tuya developer account.
