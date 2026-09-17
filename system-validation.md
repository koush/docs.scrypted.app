# System Validation

After Scrypted has been installed, install the `Diagnostics` plugin and run `System Validation` to validate the environment. This tool can also be used to verify cameras after they have been added.

System validation will check network settings and server hardware properties:

```
============================================
System Validation
============================================
Scrypted Installation    Running
                         OK
IPv4 (jsonip.com)        Running
                         66.219.189.10
IPv6 (jsonip.com)        Running
                         2002:559:76c::3cf
IPv4 (wtfismyip.com)     Running
                         66.219.189.10
IPv6 (wtfismyip.com)     Running
                         2002:559:76c::3cf
Scrypted Server Address  Running
                         192.168.2.130, 2002:559:76c::3cf
                         OK
CPU Count                Running
                         12
Memory                   Running
                         31 GB
GPU Passthrough          Running
                         OK
Cloud Plugin             Running
                         OK
OpenVINO Plugin          Running
                         OK
GPU Decode               Running
                         OK
Deprecated Plugins       Running
                         OK
============================================
System Validation Complete
============================================
```

## Validation Resolutions

### IPv6

IPv6 on the network and Scrypted server is recommended for optimal performance when streaming from cellular networks.

### Scrypted Server Address

Specifying the `Scrypted Server Address` will affect how Scrypted advertises devices via the `HomeKit` plugin and how it communicates with other devices on the local network. Selecting a pair of wired ethernet addresses (one IPv4 and one IPv6) is recommended.

### GPU Passthrough and GPU Decode

If this fails, it is usually due to the system not properly passing through GPU due to installation via an unsupported method. Or the system may not have a GPU at all. Resolving this is recommended for `Scrypted NVR` systems.
