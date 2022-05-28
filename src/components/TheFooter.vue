<template>
	<footer class="footer">
		<section class="footer__left">
			<h2>Contactez-nous</h2>

			<div class="contact">
				<div class="contact__cards">
					<div class="contact__cards__title">
						<img alt="discord" src="@/assets/icons/discord_dark.svg" />
						<h4>Rejoignez le serveur discord</h4>
					</div>
					<p class="contact__cards__description">
						Là où se trouve toute notre communauté, nos developpeurs et notre support.
					</p>

					<a class="contact__cards__follow" :href="discordLink">
						<img alt="arrow" src="@/assets/icons/arrow_dark.svg" />
						Nous rejoindre
					</a>
				</div>

				<div class="contact__cards">
					<div class="contact__cards__title">
						<img alt="mail" src="@/assets/icons/mail.svg" />
						<h4>Contactez nous par mail</h4>
					</div>
					<p class="contact__cards__description">Vous pouvez aussi nous contacter via mail.</p>

					<a class="contact__cards__follow" :href="'mailto:' + contactEmail">
						<img alt="arrow" src="@/assets/icons/arrow_dark.svg" />
						Nous contacter
					</a>
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
import BaseLogo from "@/components/BaseLogo.vue";
import strings from "@/assets/strings.json";

export default {
	name: "TheFooter",
	components: { BaseLogo },
	data() {
		return {
			discordLink: strings.links.discord,
			contactEmail: strings.links.email,
		};
	},
};
</script>

<style lang="scss">
.footer {
	display: flex;
	justify-content: center;
	margin-top: 8em;
	background-color: var(--bg-2nd);
	padding-top: 2em;
	padding-bottom: 2em;
	min-height: 320px;
	position: relative;
	gap: 4em;

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

	&__cards {
		display: flex;
		flex-direction: column;
		background-color: var(--green-400);
		color: var(--black-400);
		padding: 1em 1.5em;
		border-radius: var(--radius-medium);
		width: 280px;

		&__title {
			display: flex;
			align-items: center;
			gap: 10px;

			& h4 {
				font-size: 13pt;
				font-weight: 500;
				margin: 0;
			}

			& & img {
				width: 2em;
				height: 2em;
			}
		}

		&__description {
			min-height: 4em;
		}

		&__follow {
			text-decoration: none;
			color: var(--black-400);
			display: flex;
			align-items: center;
			align-self: flex-end;
			gap: 0.5em;

			&:hover {
				text-decoration: underline;
			}

			& img {
				transform: rotate(90deg);
			}
		}
	}
}

@media screen and (max-width: 900px) {
	.footer {
		background-color: var(--bg);
		flex-direction: column;

		&__left {
			& > h2 {
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

		&__links {
			flex-direction: row;
			justify-content: space-between;
		}

		&__right {
			align-items: center;
			gap: 1em;

			&__container {
				display: flex;
				flex-direction: column;
				gap: 0.5em;
			}
		}
	}

	.contact {
		flex-direction: column;
		align-items: center;

		&__cards {
			width: 80%;

			&__description {
				font-size: 12pt;
			}
		}

		&__cards:first-child {
			border-radius: var(--radius-big) 0 0 var(--radius-big);
			justify-content: flex-end;
			align-self: flex-end;

			&__follow {
				justify-content: flex-start;
			}
		}

		&__cards:last-child {
			border-radius: 0 var(--radius-big) var(--radius-big) 0;
			justify-content: flex-start;
			align-self: flex-start;

			&__follow {
				align-self: flex-end;
			}
		}
	}
}
</style>
