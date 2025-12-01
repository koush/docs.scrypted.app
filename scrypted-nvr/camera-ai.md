# Onboard Camera AI

Some camera hardware provides onboard AI that detects people, animals, and vehicles. Those detections can be used by Scrypted NVR to reduce server load. There are a few caveats:

* The camera provided detections do not provide bounding boxes around the object. As a result, notifications and thumbnails will be full frame images, unlike the rich notifications provided by `Scrypted NVR Object Detection`.
* Enabling the camera's AI features [may disable some substreams](/camera-preparation.md#stream-setup). This would reduce the available streams from 3 to 2, resulting in degraded timelapse and streaming performance.
* Detections are not searchable in the Scrypted NVR app.
* AI and Zone filtering can not be used.

With those limitations in mind, the Onboard Camera AI can be utilized by disabling the `Scrypted NVR Object Detection` extension on the camera.
