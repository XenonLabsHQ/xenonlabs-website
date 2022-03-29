<template>
	<TheHeader/>
</template>

<script>
import TheHeader from "@/components/wip/TheHeader.vue";
export default {
	components: {TheHeader}
}
</script>

<style lang="scss">
:root {
	--green-400: #74E262;
	--green-500: #59AE4B;
	--black-400: #121511;
	--black-500: #0A0C0A;
	--white-400: #F0F0F0;

	--bg: var(--black-500);
	--bg-2nd: var(--green-500);
	--text-color: var(--white-400);
	--text-color-2nd: var(--black-400);
	--text-title: var(--green-400);
	--accent: var(--black-400);
	--accent-2nd: var(--green-400);

	--radius: 4px;
	--radius-big: 8px;
}

html {
	scroll-behavior: smooth;
}

body {
	margin: 0;
	font-family: "Outfit", sans-serif;
	font-size: clamp(12px, 1vw, 18px);
	background-color: var(--bg);
	color: var(--text-color);
}

#app {
	padding-inline: 20px;
}
</style>
