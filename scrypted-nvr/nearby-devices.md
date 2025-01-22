<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Nearby Devices

Scrypted NVR can link cameras to smart home devices to add sensor events to the NVR timeline or control them from the camera view.

## Linked Sensors

Sensors and locks linked to a camera in will create timeline events and notifications.

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Timeline
<ImagePopup src="/img/scrypted-nvr/nearby-devices/timeline.png" width="300" ></ImagePopup>
</div>

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Notification
<ImagePopup src="/img/scrypted-nvr/nearby-devices/notification.png" width="300" ></ImagePopup>
</div>

</div>

Linking a sensor or lock is done in the `Scrypted Management Console`, under the `Recording` settings for the camera.

<ImagePopup src="/img/scrypted-nvr/nearby-devices/sensor-configuration.png" ></ImagePopup>

## Control Devices

Scrypted NVR can integrate with nearby smart home devices to allow controlling them while viewing a camera.

::: tip
Currently lights, locks, and sirens are supported.
:::

<div style="width: 100%; display: flex; flex-direction: row;">
<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">

<ImagePopup src="/img/scrypted-nvr/nearby-devices/control.png" width="200"></ImagePopup>
</div>
</div>

Linking a device is done in the `Scrypted Management Console`, within the per user `NVR Preferences`. Each user may customize which devices are available in their NVR app.

<ImagePopup src="/img/scrypted-nvr/nearby-devices/control-configuration.png" ></ImagePopup>
