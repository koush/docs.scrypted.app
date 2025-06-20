# Cluster Mode

`Cluster Mode` enables distributed computing. Plugin, detection, decode, and encode will automatically be assigned to the best suitable machine in a cluster.

<!--@include: ../scrypted-nvr/parts/nas-tip.md-->

A Scrypted installation can operate in either `server` or `client` mode. There can only be one `server` machine but there may be multiple `client` machines. The `server` machine will ingest the camera streams, while `client` machines will perform detection. Machines in a cluster can be a mix of operating systems and architectures. For example, you can use a NAS saving video Unraid (`server`) with a Mac Mini performing detection (`client`).

## Cluster Mode Networking

Cluster servers and clients must be on the same network with no NAT or firewall between them.

## Cluster Server Setup

The Cluster server will ingest the camera streams and save them to the NVR storage.

<!--@include: ../parts/cluster-setup-env.md-->

```sh
# Set worker type. There can only be one server.
SCRYPTED_CLUSTER_MODE=server
# This is the IP of this machine.
SCRYPTED_CLUSTER_ADDRESS=192.168.2.130
SCRYPTED_CLUSTER_SECRET=swordfish
SCRYPTED_CLUSTER_LABELS=storage
```

Restart the server.

Upon successful configuration, Cluster workers, including the server itself, will be listed within the `Plugins` page in the Scrypted Management Console sidebar.

::: warning
Compute plugins like OpenVINO will fail to load until a Cluster Client is set up and connected in the next section.
:::

## Cluster Client Setup

A Cluster client will perform video decoding and detection.

When adding a client, install Scrypted as usual. Account creation is not necessary. Once the server is running, create and edit Scrypted `.env` configuration file:

::: tip
When using the Scrypted Desktop App as a Cluster Client, it must be started in Server Mode. The startup mode can be changed in the app's system menu via `Reset Startup Settings`.
:::

<!--@include: ../parts/cluster-setup-env.md-->

```sh
# Set worker type. There can be multiple clients.
SCRYPTED_CLUSTER_MODE=client
# this is the IP of the server machine,
# matching the SCRYPTED_CLUSTER_ADDRESS in the prior section.
SCRYPTED_CLUSTER_SERVER=192.168.2.130
SCRYPTED_CLUSTER_SECRET=swordfish
# designate this worker as available for decode and detection workloads
SCRYPTED_CLUSTER_LABELS=compute,transcode,@scrypted/openvino
# if this is a mac, delete the previous line and
# use @scrypted/coreml label instead
# SCRYPTED_CLUSTER_LABELS=compute,transcode,@scrypted/coreml
```

Restart the client.

::: info
Cluster clients are not accessible at https port 10443 like the server. All connected clients can be viewed and managed from the primary server.

`Plugins` in the sidebar will show connected workers and their running processes.

`Server Settings` in the sidebar will show `Cluster Settings`.
:::

## Optional Properties

```sh
# Custom name for the worker
SCRYPTED_CLUSTER_WORKER_NAME=my-worker-name
```
