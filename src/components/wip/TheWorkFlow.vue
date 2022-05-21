<template>
	<section id="more">
		<h1>Choisissez notre système innovant</h1>
		<div class="workflows">
			<CardWorkflow
				description="Nous n'avons pas de grille tarifaire, nous choisissions avec vous un prix correct et cohérent."
				img="cash.svg"
				alt="Paiement"
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
import CardWorkflow from "@/components/wip/CardWorkflow.vue";

export default {
	name: "TheWorkFlow",
	components: {
		CardWorkflow,
	},
};
</script>

<style lang="scss">
#more {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	border-top: 1em solid var(--bg);
	border-bottom: 1em solid var(--bg);
	background-color: var(--black-400);
	padding-top: 2em;
	padding-bottom: 4em;
	min-height: 50vh;
	gap: 4em;

	h1 {
		font-size: clamp(16pt, 1vw, 25pt);
	}
}

.workflows {
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	gap: 2em;
	max-width: 70%;

	@media screen and (min-width: 2550px) {
		max-width: 55%; // Fixes a bug on big screen
	}
}
</style>
