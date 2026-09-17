# HomeKit

Cameras imported into Scrypted can be streamed to the iOS/macOS Home App including support for [HomeKit Secure Video](https://support.apple.com/guide/icloud/set-up-homekit-secure-video-mm7c90d21583/icloud).

::: info
HomeKit Secure Video requires a HomePod or Apple TV. Detection of people, cars, and packages is done entirely on the Apple Home Hub. AI accelerators like Coral.ai are unnecessary.
:::

<!--@include: ./parts/camera-preparation.md-->

## HomeKit Setup

Install the `HomeKit Plugin`.

The `HomeKit Plugin` will automatically enable itself on all the devices currently integrated into Scrypted. In any case, Verify the `HomeKit Plugin` is enabled for the camera. If it is not, enable it, then `Reload` the `HomeKit Plugin`.

<ImagePopup src="/img/homekit-plugin.png"></ImagePopup>

## HomeKit Pairing

Navigate to the Camera within Scrypted Management Console. View the `HomeKit` Settings and open the `Pairing` section. The pairing QR Code and manual codes can be found there. Each Camera will have [its own QR Code](#homekit-bridge-vs-accessory-mode). Use your iOS app to scan the QR Code and add it to the Home app.

<ImagePopup src="/img/homekit-qr.png"></ImagePopup>

## HomeKit Secure Video

HomeKit Secure Video (HKSV) requires cameras with motion sensors and specific codec settings. Both of these settings should have already been configured as part of the [Camera Configuration](/camera-preparation).

Enable `Stream and Recording` on the camera in the iOS Home app.

<ImagePopup src="/img/hksv-enable.jpg"></ImagePopup>

## HomeKit Bridge vs Accessory Mode

HomeKit can connect to two different types of devices: `Accessories` and `Bridges`. `Bridges` host multiple devices, while `Accessories` only host one. By default, cameras in Scrypted are paired in `Accessory Mode`. Each Camera in Scrypted will have its own QR Code. While this can be tedious to set up compared to Home Assistant and Homebridge which Bridge their cameras, Accessory Mode results in better performance:

When HomeKit connects to a Bridge, it can only send and receive one request and response at a time. That means if any device on that Bridge, requests to all other devices on that Bridge are delayed until the slow device sends a response. This delay can be particularly troublesome when the camera is slow to respond to snapshot requests.

For example, suppose a server has 10 cameras on a Bridge. When the Home app is opened on iOS, each camera is sent a snapshot request, one by one. If each camera takes 500 milliseconds to respond to the snapshot request to load the image, the Bridge may take up to 5 seconds to process further requests, like viewing a camera stream or turning on a light.

This is a architectural limitation in HomeKit that will likely never be resolved (as there are no official camera Bridges), so the Scrypted recommendation to use Accessory Mode,  like real HomeKit Cameras.

## HomeKit Secure Video V3

HKSV3 was released in September 2026. The primary feature is H265 codec support via new transports.

|               | Local Streaming   | Remote Streaming | Recording       |
| ------------- | ----------------- | ---------------- | --------------- |
| HKSV (Legacy) | RTP H264          | RTP H264         | H264/H265 *[1]* |
| HKSV3         | Multitier RTP H265| WebRTC H265 *[4]*| H264/H265 *[2][3]* |

1. HKSV Legacy Recrodings were updated with H265 support with the release of HKSV3. They both share the same transport, and when HKSV3 was implemented, H265 came with it.
2. HKSV3 Recordings have reliability issues that were discovered after exhustive testing. Uploads may fail from one home hub (Apple TV), and succeed from another home hub, depending on which one was assigned the camera detection session. Strangely, uplaods from one home hub may not be visible when a different home hub becomes the selected hub.
3. The new CMAF transport is not fully implemented or documented yet.
4. iOS WebRTC implementation is slower to connect than the legacy RTP transport.

The choice in HKSV version to use is dependent on the codecs on your cameras. If your camera is H265 only, use HKSV3. **Otherwise using H264 and the legacy HKSV version is still the better choice**. Notably, the legacy HKSV option supports using reliable H264 streaming while also providing a high quality H265 stream for recording.