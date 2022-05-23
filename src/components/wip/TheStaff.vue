<template>
	<section class="staff" id="staff">
		<div class="staff__thestaff">
			<h2 class="staff__title">Notre équipe</h2>

			<div class="members">
				<card-info-member name="voltis" img="Voltis.gif" />
				<card-info-member name="Taonix" img="Taonix.webp" />
				<card-info-member name="Powerm1nt" img="Powerm1nt.png" />
				<card-info-member name="Sigma" img="Sigma.png" />
			</div>
		</div>
	</section>
</template>

<script>
import CardInfoMember from "@/components/wip/CardInfoMember.vue";

export default {
	name: "TheStaff",
	components: { CardInfoMember },
};
</script>

<style lang="scss">
.staff {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-block: 5em;

	&__thestaff {
		display: flex;
		flex-direction: column;
		padding-inline: 5em;
	}
}

.members {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;
}
</style>
