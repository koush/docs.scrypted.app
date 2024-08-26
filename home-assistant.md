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

1.  Remove the `Scrypted` sidebar item via the Addon configuration.

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha-sidebar.png" width="400"></ImagePopup>
</div>

2. The Addon installation has a default `homeassistant` user for automatic login. A separate dedicated Scrypted `admin` must be created in `Users` in the sidebar menu.

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha-users.png" width="400"></ImagePopup>
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

There are several types of cards available:

* Single Camera Card
* Camera Grid Card
* Event Reel Card

:::tip
Configuring multiple cameras within a single `Camera Grid Card` dramatically improves performance and load times.
:::

Follow the instructions below, and then substitute the card URL appopriately.


1. Open Scrypted NVR inside Home Assistant using a **desktop browser**.
2. Navigate to the camera.
3. Open the the `Camera Settings`.
4. Copy the `Scrypted NVR Card Webpage URL`. (Substitute this with [Camera Grid](#camera-grid-card) or [Event Reel](#event-reel-card) URL if desired.)

::: warning
If the Home Assistant `Integrate` configuration is unavailable, verify the following:
1. Scrypted must be opened from **inside** Home Assistant. The Home Assistant integration configuration is only available from inside Home Assistant.
2. The [Custom Component](#install-custom-component) (and [Addon setup](#addon-setup), if applicable) **must correctly be completed** prior to setting up the cards.
3. The Integration URL is available within the camera's settings reachable by clicking the settings icon *under the camera playback view*. Not to be confused with the primary NVR app settings.
:::

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha-card-url.png" width="200"></ImagePopup>
</div>

5. Add the following `Webpage Card` in Home Assistant and replace/paste the previously copied `Scrypted NVR Card Webpage URL` below:

```yaml
type: iframe
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>
aspect_ratio: '16:9'
allow_open_top_navigation: true
```

## Camera Card Options

The Scrypted NVR card behavior can be configured using query string parameters on the `Webpage URL`.

### Auto Play

Play the card video on load.

`live=true`

```yaml[Auto Play]
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>?live=true
```

### Image Click

The parameter `imageClick` can be used to customize how click events are handled when the snapshot is clicked.

|Value|Description|
|-|-|
|`ha`|Open the Home Assistant companion app when clicked.|
|`app`|Open the Scrypted NVR app when clicked.|


Example: Open Scrypted NVR Timeline in Home Assistant when the still image is clicked.

`imageClick=ha`

```yaml[Image Click]
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>?imageClick=ha
```

### Video Click

The parameter `videoClick` can be used to customize how click events are handled when the live video is clicked.

|Value|Description|
|-|-|
|`ha`|Open the Home Assistant companion app when clicked.|
|`app`|Open the Scrypted NVR app when clicked.|

Example: Open Scrypted NVR Timeline in Home Assistant when the playing video is clicked.

`videoClick=ha`

```yaml[Video Click]
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>?videoClick=ha
```

### Resolution

By default the Card live stream will use the `low-resolution` stream: it loads fast, uses minimal resources, is thus best suited for a small frame. The resolution can be changed with the `destination` parameter. Supported destination values include `low-resolution`, `remote`, and `local`.

:::warning
Using the high resolution stream (`local`) for a Cards is not recommended, as it can cause the Home Assistant Dashboard to become sluggish with multiple cards. 
:::

`destination=local`

`destination=remote`

```yaml[Resolution]
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>?destination=local
```

### Audio

By default the Card live stream will mute both the microphone and the speaker (two way audio).

::: warning
Browsers will prevent autoplay with audio playback and microphone access prior to user interaction via a click event. The dashboard must be set to Allow on [Chrome](https://championcr.com/topic/enable-auto-play/) and [Safari](https://help.mixlr.com/en/articles/1665450-enabling-auto-play-in-safari).
:::

`microphone=on`

`speaker=on`

```yaml[Audio]
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>?speaker=on&microphone=on
```

### Scrollable

By default the Camera Grid is not scrollable. Use the following to make it scrollable:

`scrollable=true`

```yaml
type: iframe
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframegrid?ids=1,2,3&scrollable=true
allow_open_top_navigation: true
```

### Multiple Parameters

Multiple parameters may be combined using `&`.

```yaml[Video Click]
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>?imageClick=ha&videoClick=ha&live=true
```

## Camera Grid Card

Multiple cameras can be configured within a single `Webpage Card`. Configuration is similar to the single camera card, albeit a slightly different url format. The iframe url is:

|Card Type|URL Fragment|
|-|-|
|Single Camera (Reference)|`...#/iframe/<id>`|
|Camera Grid|`...#/iframegrid?ids=<id1>,<id2>`|

 The `ids` parameter is a comma separated list of device ids to display in the camera grid. The grid card works best in a [Panel View](https://www.home-assistant.io/dashboards/panel/), but can be adjusted for [Masonry View](https://www.home-assistant.io/dashboards/masonry/) by using fixed column values.

For example:

```yaml
type: iframe
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframegrid?ids=<id1>,<id2>
allow_open_top_navigation: true
```

The Camera Grid card has additional parameters that can be used to used to customize the layout based on the device type and screen orientation:

|Name|Device Type|Screen Orientation|Default Value|
|-|-|-|-|
|phonePortraitCols|Phone|Portrait|`1`|
|phoneLandscapeCols|Phone|Landscape|`2`|
|tabletPortraitCols|Tablet|Portrait|`2`|
|tabletLandscapeCols|Tablet|Landscape|`3`|
|desktopMinWidth|Desktop Browser|N/A|`480` (pixels)|
|cols|All Devices|N/A|N/A|

Use `desktopMinWidth` to set the minimum width of a camera within the grid and controls the cell wrap behavior. For example, with the default value of `480`, if the screen is `960` pixels, the grid will be 2 columns. If the screen is `1920` pixels, the grid will be 4 columns.

Use `cols` to set a fixed number of columns for all screen sizes and orientations.

## Event Reel Card

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha-event-reel.png" width="400"></ImagePopup>
</div>

The Event Reel shows the recent highlighted events in a scrollable reel. Configuration is similar to the single camera card, albeit a slightly different url format. The iframe url is:

|Card Type|URL Fragment|
|-|-|
|Single Camera  (Reference)|`...#/iframe/<id>`|
|Event Reel|`...#/iframeevents?ids=<id1>,<id2>`|

The Event Reel card has additional parameters that can be used to used to customize the cameras and events shown:


|Name|Default Value|Description|
|-|-|-|
|ids|`All Cameras`|The camera `ids` shown in the reel. The `ids` parameter is a comma separated list of device ids to display in the camera grid. If this parameter is ommitted, all are shown by default.|
|hiddenDetections|`Motion`|The detection types to hide in the reel. `Person`, `Vehicle`, `Animal`, etc. All except generic `Motion` are shown by default.|
|cols|`Responsive`|The number of columns in the event reel.|
|count|`cols`|The total number of items to show in an event reel page. Can be combined with `cols` to create a reel with multiple rows.
|aspectRatio|`1/1`|The aspect ratio of a detection thumbnail.|
|click|`ha`|The app that will be opened when clicked. Valid values include `ha` (Home Assistant) and `app` (Scrypted NVR App)|

For example, for a 4x1 grid of events:

```yaml
type: iframe
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframeevents?ids=<id1>,<id2>&cols=4
allow_open_top_navigation: true
aspect_ratio: 4:1
```

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
6. After the settings have been saved, click the Link Companion App button. A notification will be sent to the companion app.
7. Click the notification to complete linking and allow customization of notifications from the companion app.
7. The Notification options can also be configured in the Scrypted Management Console.


<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<ImagePopup src="/img/ha-notifications.png" width="200" ></ImagePopup>
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<!-- <ImagePopup src="/img/ha2.png" width="200"></ImagePopup> -->
<ImagePopup src="/img/ha-notifications-settings.png" width="200" ></ImagePopup>
</div>

</div>
