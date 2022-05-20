<template>
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
