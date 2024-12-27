# Object Detection

Object Detection plugins analyze the camera stream for recognizable objects (people, cars, animals, packages). These plugins are only used by [Scrypted NVR](/scrypted-nvr/) for smart detections.

There are several Object Detection Plugins available. Choose the best one for your [Scrypted NVR Server](/server-hardware).

## CoreML

Uses the [Neural Engine](https://www.makeuseof.com/what-is-a-neural-engine-how-does-it-work/) only available on Apple Silicon.

## OpenVINO

Available on all platforms. Can use Intel CPU, GPU, and NPU for hardware acceleration. The `Console` will show the available hardware.

## ONNX

Available on all platforms. Can use NVIDIA and AMD GPU for hardware acceleration. NVIDIA requires CUDA to be installed on the host. The `Console` will show the available hardware.

## Tensorflow Lite

Available on all platforms. Can use [Coral.ai](https://coral.ai) TPU for hardware acceleration.

To use a Coral EdgeTPU within docker:

1. The docker host must install the appropriate EdgeTPU drivers:
  * EdgeTPU USB Drivers: https://coral.ai/docs/accelerator/get-started/
  * EdgeTPU M.2 or PCIe Drivers: https://coral.ai/docs/m2/get-started/
2. Modify `~/.scrypted/docker-compose.yml` on the host to pass throug the appropriate USB or PCI devices.
3. Then recreate the docker container:
```sh
cd ~/.scrypted
docker compose down
docker compose up -d
```
4. Upon successful installation, the `Tensorflow Lite` Plugin will report the device in Settings and the `Console` log.
```
edge tpus [{'type': 'pci', 'path': '/dev/apex_0'}]
model: yolov8n_full_integer_quant_320
added tpu {'type': 'pci', 'path': '/dev/apex_0'}
```
