# Motion Detection

Motion Detection plugins analyze the camera stream for motion. This is useful if the camera does not have a motion sensor or the motion sensor is sub par.

There are several Motion Detection Plugins available. Use the recommended Plugin for a given installation.

## WebGL Motion Sensor

Available only in the [Scrypted Desktop App](/desktop-application). Uses the GPU for hardware acceleration.

1. Enable the `WebGL Motion Sensor` Extension on the camera.
2. Optional: Configure motion zones to filter out windy trees or busy roads.

## WebAssembly Motion Sensor

Available only to [Scrypted NVR](/scrypted-nvr/) users. Uses SIMD for hardware acceleration.

1. Enable the `WebAssembly Motion Sensor` Extension on the camera.
2. Optional: Configure motion zones to filter out windy trees or busy roads.

## OpenCV

Accurate and customizeable motion detector.

1. Install the `OpenCV Plugin`.
2. Enable the `OpenCV Motion Sensor` Extension on the camera.
3. Optional: Configure motion zones to filter out windy trees or busy roads.
