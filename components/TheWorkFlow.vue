<template>
	<section id="more">
		<h1>Choisissez notre système <span>innovant.</span></h1>
		<div class="workflows">
			<div class="workflows--cards">
				<img src="~/assets/icons/cash.svg" alt="Paiement" />
				<p>Nous n'avons pas de grille tarifaire, nous choisissions avec vous un prix correct et cohérent.</p>
			</div>

			<div class="workflows--cards">
				<img src="~/assets/icons/brush.svg" alt="Gain" />
				<p>Nos développeurs et graphistes sont indépendant et touchent la quasi-totalité de l'argent gagné.</p>
			</div>

			<div class="workflows--cards">
				<img src="~/assets/icons/people.svg" alt="Contact" />
				<p>Vous serez mis directement en relation avec l'équipe. Ni relais ni intermédiaire.</p>
			</div>
		</div>
	</section>
</template>
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
		font-size: 3vw;
	}
}

.workflows {
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	gap: 2em;
	max-width: 70%;

	&--cards {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--green-400);
		color: var(--text-color-2nd);
		border-radius: var(--radius-medium);
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
}

@media screen and (max-width: 600px) {
	#more {
		background-color: initial;

		h1 {
			display: flex;
			flex-direction: column;
			width: 100%;
			padding: 1.5em 1em;
			font-size: 17pt;
			background-color: var(--green-400);
			color: var(--black-400);
			box-sizing: border-box;
			white-space: nowrap;
		}
	}

	.workflows {
		flex-direction: column;
		width: 100%;
		max-width: initial;

		&--cards {
			width: 80%;
			padding: 2em;

			& > img {
				width: 2em;
				height: auto;
			}
		}

		&--cards:nth-child(1),
		&--cards:nth-child(3) {
			border-radius: var(--radius-big) 0 0 var(--radius-big);
			justify-content: flex-end;
			align-self: flex-end;
		}

		&--cards:nth-child(2) {
			border-radius: 0 var(--radius-big) var(--radius-big) 0;
			justify-content: flex-start;
			align-self: flex-start;
		}
	}
}
</style>
