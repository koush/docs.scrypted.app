### Scrypted NVR Setup

When using Scrypted NVR, license plate recognition must first be enabled on the camera. Be aware that this will use reduce the camera's overall detection performance to also accomodate license plate recognition:

1. Navigate to the camera in the Scrypted Management Console.
2. Click the Object Detection Settings.
3. Add `plate` to the detection list.
4. Click `Save`.

### LPR Sensor Setup

1. Set up a smart sensor as described in the steps above.
2. In the Detection dropdown, select `plate` (Scrypted NVR) or `licensePlate` (Unifi). The `vehicle` or `car` detection type will not work, as that detects the entire vehicle and not specfically the license plate.
3. Navigate to the `Recognition` tab.
4. Type the license plate to detect. Press enter to add it to the list. Multiple license plates may be provided, repeat this process for as many plates are desired.
5. Click `Save`.

<ImagePopup src="/img/lpr.png"></ImagePopup>

::: tip
License plate character recognition can be inaccurate depending on conditions. Changing the `Label Distance` setting will configure the detector to allow a number of missing or incorrect characters when attempting to match a specific plate.  Ie, a distance of 1 will match `ABCDE` to `ABCBE` or `ABCD`.
:::
