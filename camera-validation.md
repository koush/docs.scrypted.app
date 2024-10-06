<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from './src/ImagePopup.vue';
</script>

# Camera Validation

After the camera has been installed and added to Scrypted, install the `Diagnostics` plugin and perform the validation process on the camera.

Camera validation will check the camera's configuration, motion sensor, snapshots, and other functionality:

```
============================================
Device Validation: Kitchen
============================================
Device Selected          Running
                         OK
Device Capabilities      Running
                         OK
Motion Detection         Running
                         OK
Recent Motion            Running
                         OK
Snapshot                 Running
                         OK
Streams                  Running
                         OK
Local                    Running
                         OK
Local (IDR)              Running
                         OK
Local Recorder           Running
                         Skipped (Duplicate)
Remote Recorder          Running
                         OK
Remote Recorder (IDR)    Running
                         OK
Remote                   Running
                         Skipped (Duplicate)
Low Resolution           Running
                         OK
Low Resolution (IDR)     Running
                         OK
Audio Codecs             Running
                         OK
============================================
Device Validation Complete: Kitchen
============================================
```

## Troubleshooting

The `Console` button in the camera's page within Scrypted can be used to view the logs for the camera, in case there are errors. The camera Plugin may also have documentation troubleshoot common issues.

## Continue Setup

After verifying the camera stream and motion sensor functionality, continue on to the [Platform](/platforms.md) or [Scrypted NVR](/scrypted-nvr/) setup.