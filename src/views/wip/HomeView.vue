<template>
	<TheHeader />
	<TheLanding />
	<section id="more">
		<h1>Choisissez notre système innovent</h1>
		<div class="workflows">
			<CardWorkflow
				description="Nous n'avons pas de grille tarifaire, nous choisissions avec vous un prix correct et cohérent."
				img="cash.svg"
				alt="Payment"
			/>
			<CardWorkflow
				description="Nos développeurs et graphistes sont indépendant et touchent la quasi-totalité de l'argent gagné."
				img="brush.svg"
				alt="Gain"
			/>
			<CardWorkflow
				description="Vous serez mis directement en relation avec l'équipe. Ni relais ni intermédiaire."
				img="people.svg"
				alt="Contact"
			/>
		</div>
	</section>
</template>

<script>
import TheHeader from "@/components/wip/TheHeader.vue";
import CardWorkflow from "@/components/wip/CardWorkflow.vue";
import TheLanding from "@/components/wip/TheLanding.vue";

export default {
	components: { TheLanding, CardWorkflow, TheHeader },
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

#more {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	border-top: 1em solid var(--bg);
	border-bottom: 1em solid var(--bg);
	background-color: var(--black-400);
	gap: 4em;
	height: 50vh;
}

.workflows {
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	gap: 2em;
	max-width: 60%;
}
</style>
