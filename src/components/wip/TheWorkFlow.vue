<template>
	<section id="more">
		<h1>Choisissez notre système innovant</h1>
		<div class="workflows">
			<div class="workflow--cards">
				<img src="@/assets/icons/cash.svg" alt="Paiement" />
				<p>Nous n'avons pas de grille tarifaire, nous choisissions avec vous un prix correct et cohérent.</p>
			</div>

			<div class="workflow--cards">
				<img src="@/assets/icons/brush.svg" alt="Gain" />
				<p>Nos développeurs et graphistes sont indépendant et touchent la quasi-totalité de l'argent gagné.</p>
			</div>

			<div class="workflow--cards">
				<img src="@/assets/icons/people.svg" alt="Contact" />
				<p>Vous serez mis directement en relation avec l'équipe. Ni relais ni intermédiaire.</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "TheWorkFlow",
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

.workflow--cards {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--green-400);
	color: var(--text-color-2nd);
	border-radius: var(--radius-big);
	padding: 1em;
	gap: 1em;

	& > img {
		width: 5em;
		height: auto;
		user-select: none;
	}

	& > p {
		margin: 0;
		width: 25ch;
	}
}
</style>
