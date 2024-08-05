# Dummy Detection

## Dummy Switch Plugin

The `Dummy Switch Plugin` can be used to create `Motion` and `Binary` sensors within Scrypted that are triggered by an external event, like the `Webhook Plugin` or `Mail Plugin`.

## Mail Plugin

Older `RTSP Cameras` that do not support `ONVIF` may support mail delivery of motion events. The `Mail (SMTP) Plugin` can be used to listen for incoming mail, and trigger a motion sensor linked to that `RTSP Camera`. 

## Dummy Switch Plugin Setup

1. Install the `Dummy Switch Plugin`.
2. `Add New` Dummy Switch. This switch will activate a motion sensor.
3. Find the RTSP Camera within Scrypted.
4. Enable the `Custom Motion Sensor` Extension.
5. Select the `Dummy Switch` that was created and `Save`.

<ImagePopup src="/img/camera-dummy-switch.png"></ImagePopup>


## Mail Plugin Setup

1. Install the `Mail Plugin`.
2. Enable the `Mail` Extension on the `Dummy Switch` that was previously configured.
3. Enter a unique mail address (any username and domain is valid, it won't actually be sent there) and `Save`.

<ImagePopup src="/img/mail-setup.png"></ImagePopup>

### Camera Setup

1. Open the Camera's web admin page or app.
2. Navigate to SMTP Settings.
3. Enter the IP of your `Scrypted Server` as the SMTP server.
4. Disable `Login Anonymously` if it is enabled.
5. Provide any authentication credentials (Scrypted does not require it).
6. Provide the email address that was used in the previous step for both the Sender and Recipient.
7. Navigate to Event or Motion Settings.
8. Enable Send SMTP/Mail on the motion event.

<ImagePopup src="/img/amcrest-motion-setup.png"></ImagePopup>
<ImagePopup src="/img/amcrest-motion-event.png"></ImagePopup>
