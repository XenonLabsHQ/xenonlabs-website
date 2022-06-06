<template>
	<router-view />
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");

:root {
	--bg-default: #294523;
	--bg-evidence: #74e262;
	--bg-darker: #5bb04c;
	--bg-trans-darker: #57575750;
}

html {
	scroll-behavior: smooth;
}

body {
	margin: 0;
	font-family: "Outfit", sans-serif;
	background: var(--bg-darker);
}

.default {
	&--alink {
		text-decoration: none;
	}
}
</style>
