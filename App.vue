<template>
	<Head>
		<Meta charset="utf-8" />
		<Meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<Meta name="viewport" content="width=device-width,initial-scale=1.0" />
		<Link rel="icon" href="/favicon.ico" />
		<Meta name="theme-color" content="#000000" />
		<Meta name="description" content="XenonLabs: Donnons vie à votre projet" />
		<Meta property="twitter:site" content="@XenonLabs_" />
		<Meta property="twitter:creator" content="@XenonLabs_" />
		<Meta property="twitter:creator:id" content="@XenonLabs_" />
		<Meta property="og:url" content="https://xenonlabs.fr" />
		<Meta name="twitter:title" content="XenonLabs: Donnons vie à votre projet" />
		<Meta name="twitter:card" content="summary" />
		<Meta name="twitter:description" content="XenonLabs: Donnons vie à votre projet" />

		<Title>XenonLabs.</Title>
	</Head>

	<router-view />
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");

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

#app {
	padding: 0;
}
</style>
