<template>
	<section id="staff" class="staff">
		<div class="staff__thestaff">
			<h2 class="staff__title">Notre équipe</h2>

			<div class="founders">
				<card-info-member name="Voltis" desc="Fondateur de XenonLabs." img="Voltis.gif" />
				<card-info-member name="Yalis" desc="Co-Fondateur de XenonLabs." img="Yalis.webp" />
			</div>

			<div class="members">
				<card-info-member name="Taonix" img="Taonix.webp" />
				<card-info-member name="Powerm1nt" img="Powerm1nt.png" />
				<card-info-member name="Sigma" img="Sigma.png" />
			</div>
		</div>
		<div class="staff__involving">
			<p>Vous êtes intéressé pour travailler avec nous?</p>
			<base-button class="btn__base__primary">Nous rejoindre</base-button>
		</div>
	</section>
</template>

<script>
import CardInfoMember from "@/components/wip/CardInfoMember.vue";
import BaseButton from "@/components/wip/BaseButton.vue";

export default {
	name: "TheStaff",
	components: { BaseButton, CardInfoMember },
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
		gap: 1em;
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

	& .info--member {
		&--info {
			flex-direction: column;
		}
	}
}

.members {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1em;
}
</style>
