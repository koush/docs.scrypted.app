# Motion Detection

Motion Detection plugins analyze the camera stream for motion. This is useful if the camera does not have a motion sensor or the motion sensor is sub par. Motion Detection is also used by [Scrypted NVR](/scrypted-nvr/) for smart detections.

There are several Motion Detection Plugins available. 

## WebGL Motion Sensor

Available only in the [Scrypted Desktop App](/desktop-application). Uses the GPU for hardware acceleration.

1. Enable the `WebGL Motion Sensor` Extension on the camera.
2. Optional: Configure motion zones to filter out windy trees or busy roads.

## OpenCV

Accurate and customizeable motion detector.

1. Install the `OpenCV Plugin`.
2. Enable the `OpenCV Motion Sensor` Extension on the camera.
3. Optional: Configure motion zones to filter out windy trees or busy roads.

## PAM-Diff

::: danger
Deprecated. This motion detector runs in environments without `Python`. Not recommended for use.
:::

1. Install the `PAM-Diff Plugin`.
2. Enable the `PAM-Diff Motion Sensor` Extension on the camera.
3. Optional: Configure motion zones to filter out windy trees or busy roads.
