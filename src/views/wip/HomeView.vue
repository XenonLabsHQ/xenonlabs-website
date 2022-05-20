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
			<li class="services__item">
				<img src="@/assets/icons/discord.svg" alt="-" />
				Développement de bots discord
			</li>

			<li class="services__item">
				<img src="@/assets/icons/globe.svg" alt="-" />
				Elaboration de site web
			</li>
			<li class="services__item">
				<img src="@/assets/icons/box.svg" alt="-" />
				Création de mods et de plugins Minecraft
			</li>
			<li class="services__item">
				<img src="@/assets/icons/database.svg" alt="-" />
				Solutions d'hébergements complètes
			</li>
		</ul>

		<div class="quality">
			<div class="quality__card">
				<div class="quality__card__title">
					<img alt="check-mark" src="@/assets/icons/check.svg" />
					Qualité professionnelle
				</div>
				<p class="quality__card__description">
					Notre équipe de développeur vous propose des produits finaux sans tâches, qui s’accorde avec un design et des
					solutions moderne.
				</p>
			</div>

			<div class="quality__card">
				<div class="quality__card__title">
					<img alt="cloud" src="@/assets/icons/cloud.svg" />
					Hebergement Supérieur
				</div>
				<p class="quality__card__description">
					Nous vous proposons un service d’hébergement en ligne pour correspondre parfaitement à votre application avec
					des systèmes opérationels 7j/7 et 24H/24.
				</p>
			</div>

			<div class="quality__card">
				<div class="quality__card__title">
					<img alt="money" src="@/assets/icons/money.svg" />
					Paiement flexible
				</div>
				<p class="quality__card__description">
					Nous acceptons les payements en 1, 2 ou 4 fois sans aucun frais supplémentaire.
				</p>
			</div>
		</div>
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
	min-height: calc(100vh - 80px);
	background-color: var(--black-500);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 8em;
}

.hero {
	display: flex;
	align-items: center;
	gap: 6em;

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
		color: var(--text-title);
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

@keyframes scroll_icon_animation {
	50% {
		transform: translateY(-16px);
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
		animation: scroll_icon_animation 3s ease-in-out infinite;
		transform: translateY(0);
	}
}

.services {
	display: grid;
	grid-template-columns: 1fr 1fr;
	list-style: none;
	grid-gap: 1em 4em;
	padding-left: 0;
	margin-block: 0;

	&__item {
		display: flex;
		align-items: center;
		gap: 1em;

		& > img {
			height: 1.5em;
			width: 1.5em;
		}
	}
}

.quality {
	display: flex;
	gap: 30px;
	padding-inline: 10px;

	&__card {
		display: flex;
		flex-direction: column;
		background-color: #121511;
		width: 20em;
		padding: 5px;

		&__title {
			color: var(--text-title);
			font-weight: bold;
			font-size: 14pt;
			display: flex;
			align-items: center;
			gap: 5px;

			img {
				width: 1.5rem;
				height: 1.5rem;
			}
		}

		&__description {
			color: white;
			font-size: 12pt;
			text-align: justify;
		}
	}
}
</style>
