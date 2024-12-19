<script setup lang="ts"> 
import { onMounted } from 'vue';
import ImagePopup from '../src/ImagePopup.vue';
</script>

# Windows - PowerShell

Scrypted NVR on Windows must install the [Install](/desktop-application) or [Migrate](/maintenance/migration.md#migrating-to-the-desktop-application) to the [Desktop Application](#desktop-app). The Desktop App has GPU acceleration, is fully self contained with zero dependencies, and requires a license. The free version of Scrypted may be installed using the PowerShell Installation below.



This [script](https://github.com/koush/scrypted/blob/main/install/local/install-scrypted-dependencies-win.ps1) will download all the dependencies, including Node.js, Additional Tools for Node.js, Python, and install Scrypted as a service.

Open a **PowerShell Terminal** by clicking Start, type "Windows PowerShell" and click "Run as Administrator" option

<ImagePopup src="/img/windows/powershell.png" width="400" ></ImagePopup>

Use the Copy button in the snippet below and paste it into Powershell to [allow execution of unsigned scripts](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.3).

```powershell
Set-ExecutionPolicy Unrestricted
```

Press "y" to accept execution policy change

<ImagePopup src="/img/windows/scripts.png" width="400" ></ImagePopup>

Use the Copy button in the snippet below to copy and paste it into Powershell to install Scrypted.

```powershell
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/koush/scrypted/main/install/local/install-scrypted-dependencies-win.ps1'))
```


After installation, a firewall permission dialog may be shown. This must be set to allow all networks, including public networks.
  * If this prompt does not show up, you **must** go to the Windows Firewall settings and allow `Node.js JavaScript Runtime` and `Python` to communicate with `Private` and `Public` networks as shown below.

<ImagePopup src="/img/windows/firewall.png" width="400" ></ImagePopup>

<!--@include: ../server-port.md-->
