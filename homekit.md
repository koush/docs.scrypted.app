# HomeKit

Cameras imported into Scrypted can be streamed to the iOS/macOS Home App including support for [HomeKit Secure Video](https://support.apple.com/guide/icloud/set-up-homekit-secure-video-mm7c90d21583/icloud).

::: info
HomeKit Secure Video requires a HomePod or Apple TV. Detection of people, cars, and packages is done entirely on the Apple Home Hub. AI accelerators like Coral.ai are unnecessary.
:::

<!--@include: ./parts/camera-preparation.md-->

## HomeKit Setup

Install the `HomeKit Plugin`.

The `HomeKit Plugin` will automatically enable itself on all the devices currently integrated into Scrypted. In any case, Verify the `HomeKit Plugin` is enabled for the camera. If it is not, enable it, then `Reload` the `HomeKit Plugin`.

![image](/img/homekit-plugin.png)

## HomeKit Pairing

Navigate to the Camera within Scrypted Management Console. View the `HomeKit` Settings and open the `Pairing` section. The pairing QR Code and manual codes can be found there. Use your iOS app to scan the QR Code and add it to the Home app.

![image](/img/homekit-qr.png)

## HomeKit Secure Video

HomeKit Secure Video (HKSV) requires cameras with motion sensors and specific codec settings. Both of these settings should have already been configured as part of the [Camera Configuration](/camera-preparation).

Enable `Stream and Recording` on the camera in the iOS Home app.

![image](/img/hksv-enable.jpg)

## HomeKit Troubleshooting

The [HomeKit Troubleshooting Guide](https://github.com/koush/scrypted/blob/main/plugins/homekit/README.md) can be found in the plugin or on Github.