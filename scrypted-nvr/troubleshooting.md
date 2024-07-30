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


# Troubleshooting

Choose from the following troublehsooting guides. If your issue is not listed, please join [Discord](https://discord.gg/DcFzmBHYGq) and report the bug in the `#nvr` channel.

Troubleshoot:

* [Object Detection](#object-detection)
* [Recording](#recording)
* [Event Debug Tool](#event-debug-tool)

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
<img src="/img/scrypted-nvr/nvr-no-motion.png" width="200" data-zoomable="true" >
</div>

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Detected Motion
<img src="/img/scrypted-nvr/nvr-has-motion.png" width="200" data-zoomable="true">
</div>

</div>


If there is no motion visible on the timeline, the camera is misconfigured and not reporting motion properly. Enable the camera's hardware [Motion Sensor](/camera-preparation#motion-sensor-setup) via the manufacturer admin webpage or app. Ensure there are no zones filtering the motion.

In some cases, the camera motion sensor may be unreliable or non functional. Scrypted NVR provides software motion detection options to fill this gap. [Enable the WebGL or WebAssembly Motion Detection Extension](/detection/motion-detection) on the camera.

If the motion sensor is functional, the Object Detection itself can be tested by dropping an image into it. Save the following image and dropping it into `Scrypted NVR Object Detection`:


<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Sample Image
<img src="/img/scrypted-nvr/troubleshooting/zidane.jpg" width="200" data-zoomable="true" >
</div>

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Detected Objects
<img src="/img/scrypted-nvr/troubleshooting/zidane-results.jpg" width="200" data-zoomable="true">
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
<img src="/img/scrypted-nvr/troubleshooting/debug-tool-label.png" width="200" data-zoomable="true" >
</div>

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Detected Motion
<img src="/img/scrypted-nvr/troubleshooting/debug-tool.png" width="200" data-zoomable="true">
</div>

</div>


## High CPU Usage

Scrypted NVR will use considerable CPU and GPU while performing object detection on [cameras that have reported motion](#object-detection). The following will help diagnoes unusual system activity.

### Verify GPU

Improperly configured systems may not be able to access the GPU when performing object detection. The official install scripts will typically set up the system correctly. The GPU availability can be verified by checking the `OpenVINO` or `ONNX` plugins.

### Camera Activity

Cameras that are actively performing object detection can be viewed in the `Video Analysis Plugin`. If the high cpu usage is persistent, it may be due to cameras that are constantly reporting motion and never going idle. For example, trees blowing in the wind will trigger object detection. To resolve this issue, use motion zones *on the camera* to reduce unimportant motion that is reported to Scrypted. For example, zoning the camera to only perform motion detection on walkways and driveways, rather than on landscaping features.
