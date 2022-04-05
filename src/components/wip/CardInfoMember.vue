<template>
	<div class="info--member">
		<div class="info--member__info">
			<img class="info--member__avatar" :src="'src/assets/members/' + img" :alt="name + ' profile picture'" />
			<p class="info--member__name">{{ name }}</p>
		</div>
		<base-button class="btn__base__primary">En savoir plus</base-button>
	</div>
</template>

<script>
import BaseButton from "@/components/wip/BaseButton.vue";

export default {
	name: "CardInfoMember",
	components: {
		BaseButton,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.info--member {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.2em;
	background-color: #121511;
	border-radius: 8px;
	width: 100%;
	max-width: 413px;

	&__info {
		display: flex;
		align-items: center;
		gap: 1.2em;
	}

	&__avatar {
		height: 2.5em;
		border-radius: 8px;
	}

	&__name {
		margin-block: 0;
		font-size: 1.2em;
		font-weight: bold;
		color: #fff;
	}
}
</style>
