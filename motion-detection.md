# Motion Detection

Motion Detection plugins analyze the camera stream for motion. This is useful if the camera does not have a motion sensor or the motion sensor is sub par. Motion Detection is also used by [Scrypted NVR](/scrypted-nvr/) for smart detections.

There are several Motion Detection Plugins available. 

Adding or replacing a Motion Sensor on a camera is easy:
1. Install the appropriate Motion Detection Plugin for your server.
2. Enable it on the camera.
3. Optional: Configure motion zones to filter out windy trees or busy roads.

## WebGL Motion Sensor

Available only in the [Scrypted Desktop App](/desktop-application). Uses the GPU for hardware acceleration.

## OpenCV

Accurate and highly customizeable motion detector.

## PAM-Diff

Deprecated. This motion detector runs in environments without `Python`. Not recommended for use.
