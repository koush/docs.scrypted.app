# Experimental

## Cluster Mode

::: warning
`Cluster Mode` currently requires the beta server image and the beta NVR plugin.
:::

`Cluster Mode` enables distributed computing. Plugin, detection, decode, and encode will automatically be assigned to the best suitable machine in a cluster.

A machine can operate in either `server` or `client` mode. There can only be one `server` machine but there may be multiple `client` machines. The `server` machine will ingest the camera streams, while `client` machines will perform detection. Machines in a cluster can be a mix of operating systems and architectures. For example, you can use a NAS saving video Unraid (`server`) with a Mac Mini performing detection (`client`).

### Cluster Server Setup

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

::: warning
Compute plugins like OpenVINO will fail to load until a Cluster Client is set up and connected in the next section.
:::

### Cluster Client Setup

A Cluster client will perform video decoding and detection.

When adding a client, install Scrypted as usual (and switch to the beta tag). Account creation is not necessary. Once the server is running, create and edit Scrypted `.env` configuration file:

<!--@include: ../parts/cluster-setup-env.md-->

```sh
# Set worker type. There can be multiple clients.
SCRYPTED_CLUSTER_MODE=client
# this is the IP of the server machine,
# matching the SCRYPTED_CLUSTER_ADDRESS in the prior section.
SCRYPTED_CLUSTER_SERVER=192.168.2.130
SCRYPTED_CLUSTER_SECRET=swordfish
# designate this server as available for decode and detection workloads
SCRYPTED_CLUSTER_LABELS=compute,@scrypted/openvino
# if this is a mac, delete the previous line and
# use @scrypted/coreml label instead
# SCRYPTED_CLUSTER_LABELS=compute,@scrypted/coreml
```

Restart the client.

::: info
Cluster clients are not accessible at https port 10443 like the server. All connected clients can be viewed and managed from the primary server.
:::

### Optional Properties

```sh
# Custom name for the worker
SCRYPTED_CLUSTER_WORKER_NAME=my-worker-name
```
