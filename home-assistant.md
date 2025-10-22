<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from './src/ImagePopup.vue';
</script>

# Home Assistant

The Scrypted Custom Component for Home Assistant adds support for managing Scrypted from your Home Assistant Dashboard, and creation of Scrypted NVR cards. A demo of the cards is available on the [Scrypted NVR Home Assistant Demo Site](https://ha-demo.scrypted.app).

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha1.png" width="200" ></ImagePopup>
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<!-- <ImagePopup src="/img/ha2.png" width="200"></ImagePopup> -->
<video src="https://github.com/koush/docs.scrypted.app/assets/73924/65f6c214-2d79-43b6-9a45-23dd291a04f5" width="200" autoplay loop muted></video>
</div>

</div>

## Addon Setup

:::tip
The Custom Component must be installed even if using the Scrypted Home Assistant Addon.
:::

If Scrypted was installed via the [Home Assistant Addon](https://github.com/koush/scrypted/wiki/Installation:-Home-Assistant-OS), complete the following steps, otherwise continue on to [Install Custom Component](#install-custom-component). 

1. Navigate to the Scrypted Addon in the Home Assistant sidebar. A separate dedicated Scrypted `admin` must be created in `Users` in the sidebar menu (the default `homeassistant` automatic login user can not be used).

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha-users.png" width="400"></ImagePopup>
</div>

2.  Now, remove the `Scrypted` sidebar item via the Addon configuration. The custom component will supercede the addon sidebar item.

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha-sidebar.png" width="400"></ImagePopup>
</div>

## Install Custom Component


The [Scrypted Custom Component](https://github.com/koush/ha_scrypted) repository can be found on github.

1. Install the custom component using the [Home Assistant Community Store (HACS)](https://hacs.xyz) by adding the `Custom Repository`:
```
https://github.com/koush/ha_scrypted
```
2. In the HACS panel, select `Scrypted` from the repository list and select the `INSTALL` button.
3. Go to `Settings > Devices & Services > Add Integration` and select `Scrypted`.
4. Enter the host, username, and password for your Scrypted server, as well as a name and icon for the side panel link in the Home Assistant menu.

|Setting|Sample Configuration|
|-|-|
|Host|192.168.2.124:10443|
|Username|admin|
|Password|swordfish!|

::: tip
If Scrypted was installed as a Home Assistant Addon, there is no default login. A dedicated admin account will need to be created for the custom component. The `Host` will be `127.0.0.1:10443`.
:::

Scrypted can now be accessed in the Home Assistant side panel.

## Card Setup

Scrypted NVR provides Home Assistant cards that feature low latency playback and two way audio. The NVR app is also deeply integrated into the Home Assistant UI.

There are two types of cards available:

* Camera Card
* Event Reel Card

### Custom Card Installation

::: warning
The Custom Card Installation step only needs to be done one time to make the Custom Cards available for usage. Do not add the Resources to Home Assistant twice.
:::

To begin using the Scrypted NVR Cards, you must first register the Custom Card javascript and css Resources in Home Assistant. Prepare the following paths by replacing `<token>` as appropriate with the same value from the Custom Component setup.

JavaScript Resource:
```
/api/scrypted/<token>/endpoint/@scrypted/nvr/assets/web-components.js
```

CSS Resource:
```
/api/scrypted/<token>/endpoint/@scrypted/nvr/assets/web-components.css
```

Then [Register the Resources](https://developers.home-assistant.io/docs/frontend/custom-ui/registering-resources/) in Home Assistant.

### Add Custom Card

Follow the instructions below, and then substitute the card id appopriately.


1. Open Scrypted NVR inside Home Assistant using a **desktop browser**.
2. Navigate to the camera.
3. Open the the `Camera Settings`.
4. Copy the `Scrypted NVR Card id`. This id can be used in either the Camera or Event Reel Card.

::: warning
If the Home Assistant `Integrate` configuration is unavailable, verify the following:
1. Scrypted must be opened from **inside** Home Assistant. The Home Assistant integration configuration is only available from inside Home Assistant.
2. The [Custom Component](#install-custom-component) (and [Addon setup](#addon-setup), if applicable) **must correctly be completed** prior to setting up the cards.
3. The Integration URL is available within the camera's settings reachable by clicking the settings icon *under the camera playback view*. Not to be confused with the primary NVR app settings.
:::

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha-card-url.png" width="800"></ImagePopup>
</div>

5. Add the following `Manual Card` in Home Assistant and replace/paste the previously copied `Scrypted NVR Card id` below:

```yaml
type: custom:scrypted-nvr-camera
id: 42
```

## Camera Card Options

The Scrypted NVR card behavior can be configured using yaml parameters.

### Auto Play

Play the card video on load.

```yaml[Auto Play]
type: custom:scrypted-nvr-camera
id: 42
live: true
```

### Image Click

The parameter `imageClick` can be used to customize how click events are handled when the snapshot is clicked.

|Value|Description|
|-|-|
|`ha`|Open the Home Assistant companion app when clicked.|
|`app`|Open the Scrypted NVR app when clicked.|
|`none`|Do nothing when clicked.|


Example: Open Scrypted NVR Timeline in Home Assistant when the still image is clicked.

```yaml[Image Click]
type: custom:scrypted-nvr-camera
id: 42
imageClick: ha
```

### Video Click

The parameter `videoClick` can be used to customize how click events are handled when the live video is clicked.

|Value|Description|
|-|-|
|`ha`|Open the Home Assistant companion app when clicked.|
|`app`|Open the Scrypted NVR app when clicked.|
|`none`|Do nothing when clicked.|

Example: Open Scrypted NVR Timeline in Home Assistant when the playing video is clicked.

```yaml[Video Click]
type: custom:scrypted-nvr-camera
id: 42
videoClick: ha
```

### Resolution

By default the Card live stream will use the `low-resolution` stream: it loads fast, uses minimal resources, is thus best suited for a small frame. The resolution can be changed with the `destination` parameter. Supported destination values include `low-resolution`, `remote`, and `local`.

:::warning
Using the high resolution stream (`local`) for a Cards is not recommended, as it can cause the Home Assistant Dashboard to become sluggish with multiple cards. 
:::

```yaml[Resolution]
type: custom:scrypted-nvr-camera
id: 42
destination: local
```

### Audio

By default the Card live stream will mute both the microphone and the speaker (two way audio).

::: warning
Browsers will prevent autoplay with audio playback and microphone access prior to user interaction via a click event. The dashboard must be set to Allow on [Chrome](https://championcr.com/topic/enable-auto-play/) and [Safari](https://help.mixlr.com/en/articles/1665450-enabling-auto-play-in-safari).
:::


```yaml[Audio]
type: custom:scrypted-nvr-camera
id: 42
speakerOn: true
microphoneOn: true
```

## Event Reel Card

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha-event-reel.png" width="400"></ImagePopup>
</div>

The Event Reel shows the recent highlighted events in a scrollable reel. The Event Reel card has its own parameters that can be used to used to customize the cameras and events shown:


|Name|Default Value|Description|
|-|-|-|
|ids|`All Cameras`|The camera `ids` shown in the reel. The `ids` parameter is a comma separated list of device ids to display in the camera grid. If this parameter is ommitted, all are shown by default.|
|hiddenDetections|`Motion`|The detection types to hide in the reel. `Person`, `Vehicle`, `Animal`, etc. All except generic `Motion` are shown by default.|
|cols|`Responsive`|The number of columns in the event reel.|
|count|`cols`|The total number of items to show in an event reel page. Can be combined with `cols` to create a reel with multiple rows.|
|aspectRatio|`1/1`|The aspect ratio of a detection thumbnail.|
|click|`ha`|The app that will be opened when clicked. Valid values include `ha` (Home Assistant), `app` (Scrypted NVR App), or `none` (do nothing).|

For example, for a 5x2 grid of events that only shows Person and Animal detections:

```yaml
type: custom:scrypted-nvr-events-carousel
click: ha
count: 10
cols: 5
hiddenDetections:
  - Motion
  - Vehicle
```

## Sizing Cards

Sizing cards in Sections view can be done using `grid_options`. For exampe, to make the Event Reel Card above full width:

```yaml
type: custom:scrypted-nvr-events-carousel
click: ha
count: 10
cols: 5
hiddenDetections:
  - Motion
  - Vehicle
grid_options:
  columns: full
```


Note that the `grid_options` configuration contains the standard [Sections view sizing parameters](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card#sizing-in-sections-view).

## Notifications

::: warning
The [Custom Component](#install-custom-component) (and [Addon setup](#addon-setup), if applicable) **must correctly be completed** prior to setting up notifications.
:::

Scrypted NVR Notifications can be delivered to the Home Assistant Companion app.

1. Install and configure the Scrypted Cloud plugin. This is necessary to receive notification images.
2. Install the Home Assistant Plugin for Scrypted.
3. Configure the Home Assistant Long Lived Access Token (this is not the same token used in the previous steps) and Address in the Plugin Settings.
4. The Home Assistant `notify` (Notify Service) entities should sync.
5. Find the companion app `Notify Service` entity within the Home Assistant Plugin. It will be named something similar to `mobile_app_iphonex`.
  * Enable the `Scrypted NVR Users` extension.
6. Configure the following settings within the `mobile_app_iphonex` device.
  * Assign a `Scrypted User`.
  * Paste the `Scrypted Token` used by the Home Assistant Custom Component.
  * **Click Save**.
7. After the settings have been saved, click the Link Companion App button. A notification will be sent to the companion app.
8. Click the notification to complete linking and allow customization of notifications from the companion app.
9. The Notification options can also be configured in the Scrypted Management Console.


<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha-notifications.png" width="200" ></ImagePopup>
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<!-- <ImagePopup src="/img/ha2.png" width="200"></ImagePopup> -->
<ImagePopup src="/img/ha-notifications-settings.png" width="200" ></ImagePopup>
</div>

</div>
