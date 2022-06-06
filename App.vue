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
