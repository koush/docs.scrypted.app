<script setup lang="ts"> 
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';

onMounted(() => {
  mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
});

</script>

<style>
.medium-zoom-overlay {
  z-index: 20;
}

.medium-zoom-image {
  z-index: 21;
}
</style>

# Home Assistant

The Scrypted Custom Component for Home Assistant adds support for managing Scrypted from your Home Assistant Dashboard, and creation of Scrypted NVR cards.

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<img src="/img/ha1.png" width="200" data-zoomable="true" >
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<!-- <img src="/img/ha2.png" width="200" data-zoomable="true"> -->
<video src="https://github.com/koush/docs.scrypted.app/assets/73924/65f6c214-2d79-43b6-9a45-23dd291a04f5" width="200" autoplay loop muted></video>
</div>

</div>

## Install Custom Component

The [Scrypted Custom Component](https://github.com/koush/ha_scrypted) repository can be found on github.

1. Install the custom component using the [Home Assistant Community Store (HACS)](https://hacs.xyz) by adding the `Custom Repository`:
```
https://github.com/koush/ha_scrypted
```
2. Go to `Settings > Devices & Services > Add New` and select `Scrypted`.
3. Enter the host, username, and password for your Scrypted server, as well as a name and icon for the side panel link in the Home Assistant menu.

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

1. Open Scrypted NVR inside Home Assistant using a **desktop browser**.
2. Navigate to the camera.
3. Open the the `Camera Settings`.
4. Copy the `Scrypted NVR Card Webpage URL`.

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
<img src="/img/ha-card-url.png" width="200" data-zoomable="true">
</div>

5. Add the following `Webpage Card` in Home Assistant and replace/paste the previously copied `Scrypted NVR Card Webpage URL` below:

```yaml
type: iframe
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>
aspect_ratio: '16:9'
allow_open_top_navigation: true
```

## Advanced Card Options

The Scrypted NVR card behavior can be configured using query string parameters on the `Webpage URL`.

### Auto Play

Play the card video on load.

`live=true`

```yaml[Auto Play]
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>?live=true
```

### Image Click

Open Scrypted NVR Timeline in Home Assistant when the still image is clicked.

`imageClick=ha`

```yaml[Image Click]
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>?imageClick=ha
```

### Video Click

Open Scrypted NVR Timeline in Home Assistant when the playing video is clicked.

`videoClick=ha`

```yaml[Video Click]
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>?videoClick=ha
```

### Multiple Parameters

Multiple parameters may be combined using `&`.

```yaml[Video Click]
url: >-
  /api/scrypted/<token>/endpoint/@scrypted/nvr/public/#/iframe/<id>?imageClick=ha&videoClick=ha&live=true
```

