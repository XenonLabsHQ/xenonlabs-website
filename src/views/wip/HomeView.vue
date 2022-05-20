<template>
	<TheHeader />
	<section class="landing">
		<div class="landing__focus">
			<TheHero />
			<TheServices />
		</div>
		<TheQualityCards />
	</section>
	<section id="more">
		<p>Hello!</p>
	</section>
</template>

<script>
import TheHeader from "@/components/wip/TheHeader.vue";
import TheHero from "@/components/wip/TheHero.vue";
import TheServices from "@/components/wip/TheServices.vue";
import TheQualityCards from "@/components/wip/TheQualityCards.vue";

export default {
	components: { TheQualityCards, TheServices, TheHero, TheHeader },
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
	--bg-2nd: var(--black-400);
	--text-color: var(--white-400);
	--text-color-2nd: var(--black-400);
	--text-title: var(--green-400);
	--accent: var(--green-500);
	--accent-2nd: var(--green-400);

	--radius: 4px;
	--radius-big: 8px;
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
	justify-content: space-between;
	flex-direction: column;
	gap: 4em;
	border-bottom: 0.5em solid var(--bg);

	&__focus {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		gap: 4em;
	}
}

#more {
	height: 100vh;
	background-color: var(--black-400);
}
</style>
