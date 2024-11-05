<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from './src/ImagePopup.vue';
</script>

# Add a Camera

::: warning
The [Camera Configuration](/camera-preparation) steps should be completed prior to adding the camera to Scrypted.
:::


Scrypted supports a variety of camera plugins, some of which are listed on this page. In the `Scrypted Management Console`, navigate to `Plugins` in the side bar. Then search and install the appropriate Scrypted Plugin for your camera manufacturer.

<ImagePopup src="/img/install-plugin.png"></ImagePopup>

## Plugins

Cameras fall into two categories: `Local` cameras and `Cloud` cameras. `Local` cameras stream on the local network, while `Cloud` cameras stream through the cloud, even if the camera is on the local network.  Cloud cameras can also be added to Scrypted, but often have limited functionality, including: high latency streams, slow snapshots, unreliable motion detection, etc.

Find the matching plugin for your camera and install it in Scrypted Management Console. Multiple brands may be supported by a plugin, so check the list carefully. For example, Amcrest supports Dahua and some Lorex cameras. Hikvision supports many white labeled cameras.

If the camera is a `Local` camera, and no compatible plugin can be found, try using the `ONVIF` or `RTSP` plugin (in that order).

::: tip
When adding a camera using the appropriate `Local` camera plugin, it is recommended to log in with **admin** login credentials. Features such as Pan/Tilt/Zoom, codec configuration, etc, are often unavailable to a user account.
:::

## Amcrest

The `Amcrest Plugin` also supports Dahua and some Lorex cameras. Supports `Two Way Audio`.
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

Create a dedicated Protect user account with `Local Administrator` permissions.

* Two Factor Authentication will not work.
* A local account is recommended in case the Ubiquiti SSO service goes down.

::: warning
Unifi Protect's `Enhanced Mode` camera configuration changes the codec to H.265 and should be disabled.
:::

## ONVIF

Most local cameras can be used with the `ONVIF Plugin`, but using this plugin is recommended only if a manufacturer plugin is not available.

## RTSP

`RTSP Plugin` should be used as a last resort, as it will require a Scrypted to do video processing to detect motion events.

* If the RTSP Camera has webhook or mail delivery for motion events, that can be used to trigger a [Dummy Motion Switch](/detection/dummy-detection) within Scrypted, and video processing will not be necessary.
* If there is no mail delivery of motion events, use one of the [Motion Detection Plugins](/detection/motion-detection) to analyze video for motion.
* When adding the camera with the `RTSP Plugin`, add and assign all available streams. There is typically a `Main Stream` and a `Substream`.

::: tip
For optimal system performance, it is extremely important to add and assign both the main stream and the sub stream. Motion analysis on a high resolution main stream may cause system instability.
:::


<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Add RTSP Streams
<ImagePopup src="/img/add-streams.png" width="200" ></ImagePopup>
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Assign RTSP Streams
<ImagePopup src="/img/assign-streams.png" width="200"></ImagePopup>
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

## Wyze

The `Wyze Plugin` supports Wyze cameras. It requires a Wyze email account (not Google or Apple Sign In) and [API Key](https://developer-api-console.wyze.com/#/apikey/view).

Wyze cameras do not have a built in motion sensor. Use one of the [Motion Detection Plugins](/detection/motion-detection) to analyze video for motion for HomeKit Secure Video and NVR Object Detection support.

