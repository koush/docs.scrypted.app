# Google Home

Cameras imported into Scrypted can be streamed to the Google Home devices such as Chromecast, Android TV, and the Nest Hub. Streaming to the Google Home app is currently not supported because the app does not support the WebRTC protocol.

<!--@include: ./parts/camera-preparation.md-->

## Google Home Plugin Setup

Install the `Google Home Plugin`.

The `Google Home Plugin` will automatically enable itself on all the devices currently integrated into Scrypted. In any case, Verify the `Google Home` is enabled for the camera. If it is not, enable it, then `Reload` the `Google Home Plugin`.

## Scrypted Cloud Plugin Setup

The `Scrypted Cloud Plugin` should have been automatically installed. If it was not, installed it. Then click the `Login` button to register with Scrypted's cloud service.

::: tip
Google Home connects to Scrypted's Cloud service communicate with your server. Google Home will not function without cloud connectivity.
:::

## Google Home Setup

1. Open the Google Home app on iOS or Android.
2. Link/Add a new device.
3. Link the `Scrypted Home Automation` service.
4. Log in with the same credentials used for the `Scrypted Cloud Plugin`.
5. Scrypted is now connected and all selected devices are available in Google Home.
