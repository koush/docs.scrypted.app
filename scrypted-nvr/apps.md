<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Apps and Remote Access

<ImagePopup src="/img/scrypted-nvr/tablet.png"></ImagePopup>

Cameras and recordings can be viewed remotely via a browser or the app by enabling cloud access.

1. Install the `Scrypted Cloud Plugin`.
    * Scrypted Cloud must also be installed when self hosting. See below for self hosting instructions.
2. Login on the `Scrypted Cloud Plugin`.
3. Your cameras can now be viewed from anywhere at [nvr.scrypted.app](https://nvr.scrypted.app).

## iOS

2. [Install Scryped from the App Store](https://apps.apple.com/us/app/scrypted/id1658171214). This link must be opened on the iOS device or search for Scrypted on the App Store.
3. Login using the Scrypted Cloud credentials from the previous steps.
4. The app will prompt to login a second time. The second time, use your *local* Scrypted Server credentials.

## Android

1. [Install the Scrypted Android App](https://play.google.com/store/apps/details?id=app.scrypted.nvr) from the Google Play Store.
2. Login using the Scrypted Cloud credentials from the previous steps.
3. The app will prompt to login a second time. The second time, use your *local* Scrypted Server credentials.

## Windows, Mac, and Linux

1. Download the [Desktop Application](/desktop-application.md).
2. Enter the sign in code.
3. Select `Viewer` mode.

## Installable Web App

All of the above platforms can also install the Progressive Web App (PWA):

1. On your phone/desktop launch the appropriate browser:
    * iOS: Install with Safari
    * Android: Install with Chrome
    * Windows/Mac/Linux: Install with Edge or Chrome
2. Visit [the app installation link](https://nvr.scrypted.app/#/install-pwa) and log into Scrypted Cloud.
3. This page can be installed as an app. See [screenshot](https://user-images.githubusercontent.com/73924/194009896-359021b8-63a1-484f-aed7-35edeff92fa2.jpeg).
4. Launch the newly installed PWA.
5. Login with the Scrypted Cloud credentials used in the previous steps.
6. The app will prompt to login a second time. The second time, use your *local* Scrypted Server credentials.

<!-- 
## Self Hosting

Scrypted can optionally be self hosted on a personal custom domain. This setup process is for advanced users and offers no benefits over port forwarding, other than bypassing the Scrypted Cloud cloud login.
  * Install the `Scrypted Cloud Plugin`.
      * For `Port Forwarding Mode`, select `Custom Domain`.
      * Enter the personal custom domain into the `Hostname` setting such as `nvr.example.com`.
  * Set up a SSL Termination to the `Local HTTPS Port` on the Scrypted Server. This port is random and can be viewed or changed in the Scrypted Cloud Plugin settings. This can be done with nginx or a variety of other reverse proxies.

::: code-group

```[iOS]
Enter nvr.example.com at:
iOS Settings -> Scrypted -> Self Hosted -> Hostname
```
```md [Android]
Install using:
https://play.google.com/store/apps/details?id=app.scrypted.nvr
```
```md [Web]
Install using:
https://nvr.example.com/#/install-pwa
```
```[Desktop App]
In the Desktop app menu, click Reset Startup Settings.
Choose Viewer Mode.
Enter nvr.example.com when prompted for the optional Self Hosting domain.
``` -->
