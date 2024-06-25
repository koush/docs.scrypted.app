# Camera Report Card

This report card is intended to help guide your purchasing decisions.
* **Do not buy cloud cameras.**
* Notes per plugin are included after the report card.

### Local Cameras

|Manufacturer|Codecs|Bitrate|Motion|Talkback|Snapshots|Doorbell|
|------------|------|-------|------|-------------|---------|--------|
|Hikvision   |     A|      A|     A|            A|        A|       N|
|Amcrest     |     A|      A|     A|            A|        A|       Y|
|ONVIF       |     A|      A|     A|            A|        A|       Y|
|Unifi       |     A|      B|     A|            A|       D*|       Y|
|Reolink     |    A-|      B|     C|           A*|        A|       Y|
|Tapo        |    A-|      B|     C|           C*|        F|       Y|


### Cloud Cameras

**DO NOT BUY**. These cameras are all cloud cameras and should not be purchased.

|Manufacturer|Codecs|Bitrate|Motion|Two Way Audio|Snapshots|Doorbell|
|------------|------|-------|------|-------------|---------|--------|
|Ring        |     D|      F|     D|            A|        F|       Y|
|Tuya        |     C|      F|     B|            F|        F|       N|
|Arlo        |     C|      F|     D|            F|        F|       N|
|Google Gen 2|     C|      F|     F|            F|        F|       Y|
|Nest        |     F|      F|     D|            F|        F|       Y|

## Hikvision

Excellent high end cameras.

## Amcrest

Excellent budget cameras. Do not buy Amcrest Smart Home `ASH-` models as most of them do not support RTSP and are not compatible with Scrypted. The `AD-` models work great.                                                

## ONVIF

Not all ONVIF cameras support motion events and two way audio. For example, Hikvision and Amcrest support both, but Reolink only supports Motion. Codec quality and performance will vary by manufacturer.

## Unifi

This is the only local camera known to support the Opus audio codec, which is the ideal codec for streaming. Offers 3 streams. Unifi does not allow codec configuration. This has caused issues, such as breaking HomeKit Secure Video, in the past. Do not enable `Enhanced Mode` as that changes the camera codec to H.265 which is not compatible with most other platforms.

Unifi snapshots are only refreshed every 10 seconds. Snapshots are also very low resolution and look pixelated in the Home app and elsewhere. Using Prebuffer Snapshots resolves this at the cost of significant CPU usage, however, those are on a 5 second refresh.

## Reolink

Offers 3 RTMP streams. Two way audio is only supported on the Doorbell and possibly some other newer models.

## Tapo

Motion detection seems spotty. The camera does not have a snapshot url. That means snapshots are decoded from the video stream, and this causes additional CPU load. Tapo uses a proprietary two way audio protocol that may be broken on current or future firmware updates.

## Ring

Camera can't be prebuffered because motion events will not be delivered while viewing. SIP stream contains SEI information, requiring bitstream processing which adds latency. Motion is cloud delivered and slow/buggy. Snapshots can't be requested while someone is viewing the stream and must be pulled from a live stream. This can be expensive and will use excessive bandwidth. **Ring Edge supports local video streaming**. Unable to configure codecs which may be unsuitable for remote streaming due to high bandwidth, and requires transcoding.

## Arlo

Camera can't be prebuffered because motion events will not be delivered while viewing. Two Way Audio is not implemented. Motion is cloud delivered and slow/buggy. Snapshots can't be requested while someone is viewing the stream and must be pulled from a live stream. This can be expensive and will use excessive bandwidth.

## Google Camera Gen 2

Camera can't be prebuffered because motion events will not be delivered while viewing. Spotty motion events. Difficult setup. No snapshots. Do not buy. Throw in garbage.

## Nest

Camera can't be prebuffered because motion events will not be delivered while viewing. Spotty motion events. Difficult setup. Spotty snapshots. Do not buy. Throw in garbage.

## Tuya

No notes yet. Seems better than other cloud cameras, but still severely limited.
