<template>
	<div class="info--member">
		<div class="info--member__info">
			<img class="info--member__avatar" :src="'src/assets/members/' + img" :alt="name + ' profile picture'" />
			<p class="info--member__name">{{ name }}</p>
		</div>
		<a class="btn-green">En savoir plus</a>
	</div>
</template>

<script>
export default {
	name: "CardInfoDev",
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

/* TODO: Extract to component */
.btn-green {
	color: #0a0c0a;
	border: none;
	background-color: #74e262;
	border-radius: 4px;
	padding: 0.8em 1.6em;
	font-weight: 500;
}
</style>
