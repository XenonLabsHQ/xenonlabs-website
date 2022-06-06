<template>
	<TheHeader />
	<TheLanding />
	<TheWorkFlow />
	<TheStaff />
	<TheFooter />
</template>
<style lang="scss">
:root {
	--green-400: #74e262;
	--green-500: #59ae4b;
	--black-400: #121511;
	--black-500: #0a0c0a;
	--white-400: #f0f0f0;

	--bg: var(--black-500);
	--bg-2nd: var(--black-400);
	--text-color: var(--white-400);
	--text-color-2nd: var(--black-400);
	--text-title: var(--green-400);
	--accent: var(--green-500);
	--accent-2nd: var(--green-400);

	--radius: 4px;
	--radius-medium: 15px;
	--radius-big: 25px;
}

*::selection {
	background: var(--accent);
	color: var(--text-color-2nd);
}

html {
	scroll-behavior: smooth;
}

body {
	margin: 0;
	font-family: "Outfit", sans-serif;
	font-size: clamp(12px, 1.3vw, 18px);
	background-color: var(--bg);
	color: var(--text-color);
	overflow-x: hidden;
}

@keyframes rgbShift {
	0% {
		filter: hue-rotate(0deg);
	}

	100% {
		filter: hue-rotate(360deg);
	}
}

#app {
	padding: 0;
}

.rgb {
	animation: rgbShift 10s ease infinite;
}
</style>
