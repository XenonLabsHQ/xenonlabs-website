<template>
	<div class="info--member">
		<img
			class="info--member__avatar"
			:src="isProd() ? '/src' : '' + '/assets/members/' + img"
			:alt="name + ' profile picture'"
		/>
		<div class="info--member--info">
			<p class="info--member--info__name">{{ name }}</p>
			<p v-if="desc" class="info--member--info__desc">
				<img alt="badge" src="@/assets/icons/badge.svg" />
				{{ desc }}
			</p>

			<base-button class="btn__base__primary">En savoir plus</base-button>
		</div>
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
		desc: {
			type: String,
			required: false,
			default: "",
		},
		img: {
			type: String,
			required: true,
		},
		follow: {
			type: String,
			required: false,
			default: "",
		},
	},
	methods: {
		isProd() {
			if (process.env.NODE_ENV === "development") {
				console.log(process.env.NODE_ENV);
				return true;
			}
		},
	},
};
</script>

<style lang="scss">
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
