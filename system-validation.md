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
