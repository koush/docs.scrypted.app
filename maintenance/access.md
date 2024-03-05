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
The email account linked with Scrypted Cloud does not provide Single Sign-On (SSO) access to a server. Otherwise a compromise in any service providing authentication (ie, Scrypted Cloud, Gmail, Apple Sign In, lost email password, etc) could provide other parties the ability to view to cameras or modify server settings. Similarly, a connection routing or caching issue could also make cameras accessible to other users of Scrypted Cloud. A separate local login (which is not controlled by a cloud provider) provides a backstop for malicious or accidental server access.
:::

## Share Server

First, create an [additional local user account](#additional-user-accounts) and grant access to the desired cameras in `Scrypted NVR`.


1. Open [home.scrypted.app](https://home.scrypted.app) and log in with the [Remote Access](#remote-access) configured above.
2. Click the `Share` icon.
3. Add the user email to the list that can access the server.
4. Copy the `Invite Code`.
5. Save.
6. Send the user the following information:
    * The previously copied `Invite Code`.
    * The local user account credentials.

::: tip
The user will not be automatically notified by email they have access to the server.
:::

<div style="width: 100%; display: flex; flex-direction: row;">

<div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
Grant Account Access
<img src="/img/maintenance/share-server.png" width="200" data-zoomable="true" >
</div>

</div>


## Join Server

1. Open [home.scrypted.app](https://home.scrypted.app) and log in with your email.
2. Provide the above email to the admin of the server.
3. Enter the invite code provided by the admin.
4. The browser will continue to the local login for the newly added server.
5. Log in with the local account credentials that was also provided by the admin. **This is not the email you used to sign in from the cloud.**
