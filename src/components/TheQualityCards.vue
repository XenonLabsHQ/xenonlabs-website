<template>
	<div class="quality">
		<card class="quality__card">
			<div class="quality__card__title">
				<img alt="check-mark" src="@/assets/icons/check.svg" />
				Qualité professionnelle
			</div>
			<p class="quality__card__description">
				Notre équipe de développeur vous propose des produits finaux sans tâches, qui s’accorde avec un design et des
				solutions moderne.
			</p>
		</card>

		<card class="quality__card">
			<div class="quality__card__title">
				<img alt="cloud" src="@/assets/icons/cloud.svg" />
				Hebergement Supérieur
			</div>
			<p class="quality__card__description">
				Nous vous proposons un service d’hébergement en ligne pour correspondre parfaitement à votre application avec
				des systèmes opérationels 7j/7 et 24H/24.
			</p>
		</card>

		<card class="quality__card">
			<div class="quality__card__title">
				<img alt="money" src="@/assets/icons/money.svg" />
				Paiement flexible
			</div>
			<p class="quality__card__description">
				Nous acceptons les payements en 1, 2 ou 4 fois sans aucun frais supplémentaire.
			</p>
		</card>
	</div>
</template>

<script>
export default {
	name: "TheQualityCards",
};
</script>

<style lang="scss">
.quality {
	display: flex;
	gap: 30px;
	padding: 2em 2em 0 2em;

	&__card {
		display: flex;
		flex-direction: column;
		width: 20em;
		padding: 2em;

		&__title {
			color: var(--text-title);
			font-weight: bold;
			font-size: 14pt;
			display: flex;
			align-items: center;
			gap: 0.8em;

			img {
				width: 1.5rem;
				height: 1.5rem;
			}
		}

		&__description {
			color: var(--text-color);
			font-size: 1em;
			line-height: 1.6em;
			text-align: justify;
		}

		&:nth-child(2) {
			background-color: var(--bg-2nd);
		}
	}

	@media screen and (max-width: 900px) {
		flex-direction: column;
		padding: 0;
		&__card {
			width: 100vw;

			&__title {
				justify-content: center;
			}

			&__description {
				font-size: clamp(12px, 4vw, 18px);
				padding-inline: 2em;
			}
		}
	}
}
</style>
