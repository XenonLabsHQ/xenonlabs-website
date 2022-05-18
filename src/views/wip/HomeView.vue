<template>
	<TheHeader />
	<section class="section__head">
		<img class="section__head__logo" alt="Logo" src="@/assets/logo.svg" />
		<div class="section__intro">
			<h1 class="section__intro__title">XenonLabs.</h1>
			<p class="section__intro__desc">Nos développeurs et graphistes indépendants</p>
			<p class="section__intro__desc">seront ravis de construire avec vous vos projets.</p>

			<a class="section__intro__morebtn" href="#more"
				><div class="section__intro__morebtn__bidule"></div>
				En savoir plus
			</a>
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
	align-items: center;
	justify-content: center;
	gap: 15px;

	&__logo {
		height: 25em;
		width: 25em;
	}

	.section__intro {
		display: flex;
		flex-direction: column;
		gap: 10px;

		&__title {
			font-size: 36pt;
			padding-block: 5px;
			margin: 0;
		}

		&__desc {
			font-size: 14pt;
			width: 45ch;
			text-wrap: normal;
			margin: 0;
		}

		&__morebtn {
			text-decoration: none;
			color: var(--accent-2nd);
			font-weight: bold;
			font-size: 18pt;
			display: flex;
			align-items: center;
			gap: 12px;

			&__bidule {
				height: 2em;
				width: 1em;
				border: 2px var(--accent-2nd) solid;
				border-radius: 300px;
				position: relative;

				&::after {
					content: "";
					position: absolute;
					top: 70%;
					left: 8px;
					width: 0.3em;
					height: 0.3em;
					border-radius: 300px;
					background: var(--accent-2nd);
				}
			}
		}
	}
}
</style>
