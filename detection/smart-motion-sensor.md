# Smart Motion Sensor

## Setup

Scrypted can create a `Smart Motion Sensor` to report when a object is detected on a camera. This feature can be used with supported cameras that report smart detection events or [Scrypted NVR Object Detection](/scrypted-nvr/).

1. Install the `Video Analysis Plugin`.
2. Click `Add New`.
3. Select a camera to create a sensor.
4. Select the desired detections to report.
5. This sensor can be synced to other platforms to be used within automations.

![image](/img/smart-motion-sensor.png)

## License Plate Recognition

Scrypted can create a `Smart Motion Sensor` that triggers on specific license plates. This feature requires camera hardware with native LPR support (Unifi AI Cameras) or via software with Scrypted NVR Object Detection. License Plate Recognition is *highly* dependent on lighting conditions, vehicle speed, camera angle, and video quality. Refer to the manufacturers documentation for optimal setup.

1. Set up a smart motion sensor as described in the steps above.
2. In the Detection dropdown, select `plate` (Scrypted NVR) or `licensePlate` (Unifi). The `vehicle` or `car` detection type will not work, as that detects the entire vehicle and not specfically the license plate.
3. Navigate to the `Recognition` tab.
4. Type the license plate to detect. Press enter to add it to the list. Multiple license plates may be provided, repeat this process for as many plates are desired.
5. Click `Save`.

![image](/img/lpr.png)

::: tip
License plate character recognition can be inaccurate depending on conditions. Changing the `Label Distance` setting will configure the detector to allow a number of missing or incorrect characters when attempting to match a specific plate.  Ie, a distance of 1 will match `ABCDE` to `ABCBE` or `ABCD`.
:::
