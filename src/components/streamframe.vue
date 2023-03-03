<template>
  <div id="appstream-container" style="background-color: fuchsia;">
  </div>
</template>

<script setup lang="ts">
import initAppStream from "../lib/appstream_embed";

async function startAppStream(streamUrl: string, serverhostname: string) 
{
	const contenthostName = `content.${serverhostname}`;

	//isLoading.value = false;
	//isStreaming.value = true;
	//await Task.Yield();

	initAppStream();
	//await Task.Yield();

	//const customStreamUrl = streamUrl.replace(/\/\/appstream2\..+?\.aws\.amazon\.com\//, `//${contenthostName}/`);
	const customStreamUrl = streamUrl;

	const AppStream = window.AppStream;

	const appStreamOptions = {
		sessionURL: customStreamUrl,
		userInterfaceConfig: {
			[AppStream.Embed.Options.HIDDEN_ELEMENTS]: [
				AppStream.Embed.Elements.TOOLBAR,
			],
		},
	};

	console.info("Starting AppStream with the following options:", appStreamOptions);

	new AppStream.Embed("appstream-container", appStreamOptions);

	//isStreaming.value = true;
}

defineExpose({startAppStream});

</script>
