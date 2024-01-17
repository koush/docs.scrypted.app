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

Navigate to the Camera within Scrypted Management Console. View the `HomeKit` Settings and open the `Pairing` section. The pairing QR Code and manual codes can be found there. Each Camera will have [its own QR Code](#homekit-bridge-vs-accessory-mode). Use your iOS app to scan the QR Code and add it to the Home app.

![image](/img/homekit-qr.png)

## HomeKit Secure Video

HomeKit Secure Video (HKSV) requires cameras with motion sensors and specific codec settings. Both of these settings should have already been configured as part of the [Camera Configuration](/camera-preparation).

Enable `Stream and Recording` on the camera in the iOS Home app.

![image](/img/hksv-enable.jpg)

## HomeKit Troubleshooting

The [HomeKit Troubleshooting Guide](https://github.com/koush/scrypted/blob/main/plugins/homekit/README.md) can be found in the plugin or on Github.

## HomeKit Bridge vs Accessory Mode

HomeKit can connect to two different types of devices: `Accessories` and `Bridges`. `Bridges` host multiple devices, while `Accessories` only host one. By default, cameras in Scrypted are paired in `Accessory Mode`. Each Camera in Scrypted will have its own QR Code. While this can be tedious to set up compared to Home Assistant and Homebridge which `Bridge` their cameras, `Accessory Mode` results in better performance:

When HomeKit connects to a `Bridge`, it can only send and receive one request and response at a time. That means if any device on that `Bridge`, requests to all other devices on that Bridge are delayed until the slow device sends a response. This delay can be particularly troublesome when the camera is slow to respond to snapshot requests.

For example, suppose a server has 10 cameras. When the Home app is opened on iOS, each camera is sent a snapshot request, one by one. If each camera takes 500 milliseconds to respond to the snapshot request to load the image, the server may take up to 5 seconds to process further requests, like viewing a camera stream or turning on a light.

This is a architectural limitation in HomeKit that will likely never be resolved (as there are no official camera `Bridges`), so the Scrypted recommendation to use Accessory Mode,  like real HomeKit Cameras.
