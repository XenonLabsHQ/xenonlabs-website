<template>
	<footer class="footer">
		<section class="footer__left">
			<h3>Contactez-nous</h3>

			<div class="contact">
				<div class="contact__card">
					<h4>Rejoignez le serveur discord</h4>
					<p>Là où se trouve toute notre communauté, nos developpeurs et notre support</p>
				</div>
				<div class="contact__card">
					<h4>Contactez nous par mail</h4>
					<p>Vous pouvez aussi nous contacter via mail.</p>
				</div>
			</div>
		</section>
		<section class="footer__right">
			<div class="footer__right__container">
				<base-logo />
				<div class="footer__links">
					<a class="footer__link" href="">mentions légales</a>
					<a class="footer__link" href="">FAQ</a>
				</div>
			</div>
			<a class="footer__link" href="#">
				Retourner en haut
				<img alt="arrow" src="@/assets/icons/arrow.svg" />
			</a>
		</section>
	</footer>
</template>

<script>
import BaseLogo from "@/components/wip/BaseLogo.vue";

export default {
	name: "TheFooter",
	components: { BaseLogo },
};
</script>

<style lang="scss">
.footer {
	display: flex;
	justify-content: center;

	margin-top: 8em;
	background-color: var(--bg-2nd); // Keep for accessibility
	padding-top: 2em;
	padding-bottom: 2em;
	min-height: 320px;
	position: relative;
	gap: 4em;

	&::before {
		content: "";
		position: absolute;
		inset: 0 -40px;
		z-index: -1;
		height: 100%;
		background-color: var(--bg-2nd);
	}

	&__right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	&__links {
		display: flex;
		flex-direction: column;
	}

	&__link {
		color: #fff;
		text-decoration: none;
		font-size: 1.2em;
		margin-bottom: 0.5em;
		display: flex;
		align-items: center;
		gap: 0.5em;

		& img {
			width: 1em;
			height: 1em;
		}

		&:hover {
			text-decoration: underline;
		}
	}
}

.contact {
	display: flex;
	gap: 4em;
}
</style>
