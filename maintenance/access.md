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

# Users and Remote Access

## Additional User Accounts

Additional local user accounts can be added in the Scrypted Management Console.

By default, non-admin users can not to view/edit any devices, install plugins, or otherwise have access to anything on the server. Enable the `Scrypted NVR Users` extension to allow the user access to `Scrypted NVR`, then grant the account permissions to specific cameras.

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Enable NVR Users Extension
<img src="/img/maintenance/nvr-users.png" width="200" data-zoomable="true" >
</div>


<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Grant Access to Cameras
<img src="/img/maintenance/nvr-permissions.png" width="200" data-zoomable="true">
</div>

</div>

## Remote Access

For turnkey remote access, install the `Scrypted Cloud` plugin and click `Login` to link an email account. The email account linked with `Scrypted Cloud` can only be used to *reach* the server. A local account, as provisioned above, can then be used to log into the server.

::: info
The email account linked with Scrypted Cloud can not be used for Single Sign-On (SSO). Requiring a local account login is a mandatory security measure and by design. Any compromise or defect in any service providing authentication (ie, Scrypted Cloud, Gmail, lost email password, etc) could provide other parties the ability to view to cameras or modify server settings.
:::
