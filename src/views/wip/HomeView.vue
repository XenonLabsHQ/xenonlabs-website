<template>
	<TheHeader />
	<section class="section__head">
		<div class="section__head__description">
			<img class="section__head__logo" alt="Logo" src="@/assets/logo.svg" />
			<div class="section__intro">
				<h1 class="section__intro__title">XenonLabs.</h1>
				<p class="section__intro__desc">
					Nos développeurs et graphistes indépendants seront ravis de construire avec vous vos projets.
				</p>
			</div>
		</div>
	</section>
</template>

<script>
import TheHeader from "@/components/wip/TheHeader.vue";

export default {
	components: { TheHeader },
};
</script>

<style lang="scss">
:root {
	--green-400: #74e262;
	--green-500: #59ae4b;
	--black-400: #121511;
	--black-500: #0a0c0a;
	--white-400: #f0f0f0;

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
	overflow-x: hidden;
}

#app {
	padding-inline: 20px;
}

.section__head {
	background-color: var(--black-500);
	display: flex;

	&__logo {
		height: 25em;
		width: 25em;
	}

	&__description {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.section__intro {
		display: flex;
		flex-direction: column;

		&__title {
			font-size: 36pt;
			padding-block: 5px;
			margin: 0;
		}

		&__desc {
			font-size: 14pt;
			width: 20em;
		}
	}
}
</style>
