<template>
  <div id="appstream-container" style="background-color: fuchsia;">
  </div>
</template>

<script setup lang="ts">
import initAppStream from "../lib/appstream_embed";

// This component is meant to be the placeholder for the appstream frame. This component, when startAppStream is called,
// calls into the AWS-provided appstream_embed.js to set up the actual streaming surface.
// In this example, security issues will prevent it from connecting properly, at the moment.

async function startAppStream(streamUrl: string, serverhostname: string) 
{
	initAppStream();

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
}

// expose this function to outside callers.
defineExpose({startAppStream});

</script>
