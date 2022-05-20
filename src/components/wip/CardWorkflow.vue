<template>
	<div class="workflow">
		<img :src="'src/assets/icons/' + img" :alt="alt" />
		<p>{{ description }}</p>
	</div>
</template>

<script>
export default {
	name: "CardWorkflow",
	props: {
		description: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.workflow {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--green-400);
	color: var(--text-color-2nd);
	border-radius: var(--radius-big);
	padding: 1em;
	gap: 1em;

	& > img {
		width: 5em;
		height: auto;
		user-select: none;
	}

	& > p {
		margin: 0;
		width: 25ch;
	}
}
</style>
