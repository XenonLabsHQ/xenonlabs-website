<template>
	<section id="staff" class="staff">
		<div class="staff__thestaff">
			<h2 class="staff__title">Notre équipe</h2>

			<div class="founders">
				<div class="info--member">
					<img class="info--member__avatar" src="@/assets/members/Voltis.gif" alt="Voltis Profile Picture" />
					<div class="info--member--info">
						<p class="info--member--info__name">Voltis</p>
						<p class="info--member--info__desc">
							<img alt="badge" src="@/assets/icons/badge.svg" />
							Fondateur.
						</p>

						<base-button class="btn__base__primary">En savoir plus</base-button>
					</div>
				</div>

				<div class="info--member">
					<img class="info--member__avatar" src="@/assets/members/Yalis.webp" alt="Yalis Profile Picture" />
					<div class="info--member--info">
						<p class="info--member--info__name">Yalis</p>
						<p class="info--member--info__desc">
							<img alt="badge" src="@/assets/icons/badge.svg" />
							Co-Fondateur.
						</p>

						<base-button class="btn__base__primary">En savoir plus</base-button>
					</div>
				</div>
			</div>

			<div class="members">
				<div class="info--member">
					<img class="info--member__avatar" src="@/assets/members/Sigma.png" alt="Sigma Profile Picture" />
					<div class="info--member--info">
						<p class="info--member--info__name">Sigma</p>

						<base-button class="btn__base__primary">En savoir plus</base-button>
					</div>
				</div>

				<div class="info--member">
					<img class="info--member__avatar" src="@/assets/members/Powerm1nt.png" alt="Powerm1nt Profile Picture" />
					<div class="info--member--info">
						<p class="info--member--info__name">Powerm1nt</p>

						<base-button class="btn__base__primary">En savoir plus</base-button>
					</div>
				</div>

				<div class="info--member">
					<img class="info--member__avatar" src="@/assets/members/Taonix.webp" alt="Taonix Profile Picture" />
					<div class="info--member--info">
						<p class="info--member--info__name">Taonix</p>

						<base-button class="btn__base__primary">En savoir plus</base-button>
					</div>
				</div>
			</div>
		</div>
		<div class="staff__involving">
			<p>Vous êtes intéressé pour travailler avec nous?</p>
			<base-button class="btn__base__primary">Nous rejoindre</base-button>
		</div>
	</section>
</template>

<script>
import BaseButton from "@/components/wip/BaseButton.vue";

export default {
	name: "TheStaff",
	components: { BaseButton },
};
</script>

<style lang="scss">
.staff {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-block: 5em;
	gap: 3em;

	&__thestaff {
		display: flex;
		flex-direction: column;
		padding-inline: 5em;
		gap: 3em;
	}

	&__involving {
		display: flex;
		gap: 1em;
	}
}

.founders {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1em;

	.info--member {
		&__avatar {
			height: fit-content;
		}

		&--info {
			flex-direction: column;
			align-items: flex-start;
			gap: 0;
		}
	}
}

.members {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1em;
}

.info--member {
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1.2em;
	background-color: #121511;
	border-radius: 8px;
	width: 100%;
	max-width: 413px;
	box-sizing: border-box;
	gap: 1em;

	&__avatar {
		height: 2.5em;
		border-radius: 8px;
	}

	&--info {
		display: flex;
		align-items: center;
		gap: 1em;
		font-weight: 200;
		color: #fff;

		&__name {
			margin-block: 0;
			font-size: 1.2em;
			font-weight: 500;
		}

		&__desc {
			display: flex;
			align-items: center;
			gap: 5px;

			img {
				width: clamp(12px, 1.3vw, 18px);
				height: clamp(12px, 1.3vw, 18px);
			}
		}
	}
}
</style>
