<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

<style>
.medium-zoom-overlay {
  z-index: 20;
}

.medium-zoom-image {
  z-index: 21;
}
</style>


# Troubleshooting

Choose from the following troublehsooting guides. If your issue is not listed, please join [Discord](https://discord.gg/DcFzmBHYGq) and report the bug in the `#nvr` channel.

Troubleshoot:

* [Object Detection](#object-detection)
* [Recording](#recording)
* [Event Debug Tool](#event-debug-tool)
* [High CPU Usage](#high-cpu-usage)
* [Notification Delivery Failures](#notification-delivery-failures)

## Object Detection

### Detection Flow Chart

```mermaid
stateDiagram
    classDef cameraClass fill:blue
    classDef runningClass fill:green

    direction LR
    camera: Wait for Camera Motion
    camera2: Wait for Camera Motion
    motion: Camera Reports Motion
    running: Run Object Detection
    running2: Run Object Detection
    detected: Objects Detected
    decode: Wait For Video Frame
    analyze: Analyze Frame
    motionstopped: Camera Reports Motion Stopped
    detectionstopped: Stop Object Detection

    running2 --> decode
    camera --> motion
    motion --> running
    decode --> analyze
    analyze --> detected
    detected --> running2
    detected --> Notifications
    detected --> Timeline/Events
    running2 --> motionstopped
    motionstopped --> detectionstopped
    detectionstopped --> camera2

   class camera, camera2 cameraClass
   class running, running2 runningClass
```

Object Detection failure is typically due to the camera hardware not properly supplying motion events. View the camera in the NVR and verify there are motion events in the `Timeline`. Detected Motion will be denoted with a thin and solid blue line, as seen below.

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
No Motion Detected
<ImagePopup src="/img/scrypted-nvr/nvr-no-motion.png" width="200" ></ImagePopup>
</div>

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Detected Motion
<ImagePopup src="/img/scrypted-nvr/nvr-has-motion.png" width="200"></ImagePopup>
</div>

</div>


If there is no motion visible on the timeline, the camera is misconfigured and not reporting motion properly. Enable the camera's hardware [Motion Sensor](/camera-preparation#motion-sensor-setup) via the manufacturer admin webpage or app. Ensure there are no zones filtering the motion.

In some cases, the camera motion sensor may be unreliable or non functional. Scrypted NVR provides software motion detection options to fill this gap. [Enable a Motion Detection Extension](/detection/motion-detection) on the camera.

If the motion sensor is functional, the Object Detection itself can be tested by dropping an image into it. Save the following image and dropping it into `Scrypted NVR Object Detection`:


<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Sample Image
<ImagePopup src="/img/scrypted-nvr/troubleshooting/zidane.jpg" width="200" ></ImagePopup>
</div>

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Detected Objects
<ImagePopup src="/img/scrypted-nvr/troubleshooting/zidane-results.jpg" width="200"></ImagePopup>
</div>

</div>


## Recording

Recording issues typically stem from the storage directory or device not being properly configured.

1. In the `Scrypted NVR Plugin` Settings, verify the storage directory is configured and is reporting the correct disk size and free space. The drive should ideally be at least 1 terabyte.
2. Refer to the [Recording Storage](/scrypted-nvr/installation.html#recording-storage) docs to properly format the drive with the correct filesystem and, if applicable, mount it into Docker.

## Event Debug Tool

The event debug tool provides insight into what objects and motion was detected during an event. The tool is accessible via a **desktop browser only**. Click the camera label to go to the Event Debug Tool.

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
No Motion Detected
<ImagePopup src="/img/scrypted-nvr/troubleshooting/debug-tool-label.png" width="200" ></ImagePopup>
</div>

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Detected Motion
<ImagePopup src="/img/scrypted-nvr/troubleshooting/debug-tool.png" width="200"></ImagePopup>
</div>

</div>


## High CPU Usage

Scrypted NVR will use considerable CPU and GPU while performing object detection on [cameras that have reported motion](#object-detection). The following will help diagnose unusual system activity.

### Verify GPU

Improperly configured systems may not be able to access the GPU when performing object detection. The official install scripts will typically set up the system correctly. 
* GPU usage for decoding can be verified by installing the `Diagnostics Plugin` and running `System Validation`.
* GPU usage for detection can be verified by checking the `OpenVINO` or `ONNX` plugins.

### Camera Activity

Cameras that are actively performing object detection can be viewed in the `Video Analysis Plugin`. There are two sections:

#### Active Motion Detection

There should generally not be any cameras that are using software motion detection. All cameras that are officially supported by Scrypted NVR have functional hardware motion sensors. If there are cameras listed in this section, please review the [motion sensor setup](/camera-preparation#motion-sensor-setup) to confirm that [enabling software motion detection](/detection/motion-detection) was necessary. The software motion sensor should be disabled.

#### Active Object Detection

There may be multiple cameras listed in this seciton if the high cpu usage is persistent. This may be due to cameras that are constantly reporting motion and never going idle. For example, trees blowing in the wind will trigger object detection. To resolve this issue, use [motion zones on the camera](/camera-preparation#motion-sensor-setup) to reduce unimportant motion that is reported to Scrypted. For example, zoning the camera to only perform motion detection on walkways and driveways, rather than on landscaping features.

## Notification Delivery Failures

### Complete Notification Failure

If notifications are not being delivered at all, this is likely due to an issue with the device itself. Perform the following steps:

1. If the device is Android or iOS, **reboot the device**.
2. Completely quit (swipe close, close tray, etc) and reopen the Scrypted NVR app to trigger a device reregistration.
3. Search for the notification device in `Scrypted Management Console` and send it a test notification.
4. Observe any errors in the `Console`.

### No Images in Notifications

If notifications are working, but there are no images in notifications, this is likely due to a `Scrypted Cloud` plugin misconfiguration. Perform the following steps:

1. Ensure the Scrypted Cloud plugin is installed.
2. Log into the Scrypted Cloud plugin again.

This should resolve most notification image failures.

If the issue persists, and the server is behind a custom domain. The error is probably due to improper SSL termination or reverse proxy. To diagnose, delete and reinstall the Scrypted Cloud plugin to verify notification image delivery works on the Default settings.
