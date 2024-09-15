# Diagnostics

To diagnose common server and camera issues, install the `Scrypted Diagnostics Plugin`.

## System Validation

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

## Camera Validation

Camera validation will check the camera's configuration and general functionality:

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