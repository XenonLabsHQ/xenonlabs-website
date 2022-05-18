<template>
	<TheHeader />
	<section class="landing">
		<div class="hero">
			<img class="hero__logo" alt="Logo" src="@/assets/logo.svg" />
			<div class="hero__intro">
				<h1 class="hero__title">XenonLabs.</h1>
				<p class="hero__description">Nos développeurs et graphistes indépendants</p>
				<p class="hero__description">seront ravis de construire avec vous vos projets.</p>

				<a class="hero__btn" href="#more">
					<div id="scroll_icon" />
					En savoir plus
				</a>
			</div>
		</div>

		<ul class="services">
			<li class="services__item">Développement de bots discord</li>
			<li class="services__item">Elaboration de site web</li>
			<li class="services__item">Création de mods et de plugins Minecraft</li>
			<li class="services__item">Solutions d'hébergements complètes</li>
		</ul>
	</section>
	<section id="more"></section>
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

.landing {
	background-color: var(--black-500);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 15px;
}

.hero {
	display: flex;
	align-items: center;
	gap: 20px;

	&__logo {
		height: 20em;
		width: 20em;
	}

	&__intro {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	&__title {
		font-size: 36pt;
		padding-block: 5px;
		margin: 0;
	}

	&__description {
		font-size: 14pt;
		width: 45ch;
		text-wrap: normal;
		margin: 0;
	}

	&__btn {
		text-decoration: none;
		color: var(--accent-2nd);
		font-weight: bold;
		font-size: 13pt;
		display: flex;
		align-items: center;
		gap: 12px;
	}
}

#scroll_icon {
	height: 35px;
	width: 17px;
	border: 2px var(--accent-2nd) solid;
	border-radius: 300px;
	position: relative;
	font-weight: bold;

	&::after {
		content: "";
		position: absolute;
		top: 70%;
		left: 6px;
		width: 5px;
		height: 5px;
		border-radius: 300px;
		background: var(--accent-2nd);
	}
}

.services {
	display: grid;
	list-style: none;
}
</style>
