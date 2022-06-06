<template>
	<a class="btn__scroll" href="#more">
		<span />
		En savoir plus
	</a>
</template>

<script>
export default {
	name: "TheButtonScroll",
};
</script>
<style lang="scss">
@keyframes scroll_icon_animation {
	50% {
		transform: translateY(-16px);
	}
}

.btn__scroll {
	margin-top: 1em;
	text-decoration: none;
	color: var(--accent-2nd);
	font-weight: bold;
	font-size: 13pt;
	display: flex;
	align-items: center;
	align-self: start;
	gap: 12px;

	& span {
		height: 35px;
		width: 17px;
		border: 2px var(--accent-2nd) solid;
		border-radius: 300px;
		position: relative;
		font-weight: bold;

		&::after {
			content: "";
			position: absolute;
			top: 70%;
			left: 6px;
			width: 5px;
			height: 5px;
			border-radius: 300px;
			background: var(--accent-2nd);
			animation: scroll_icon_animation 3s ease-in-out infinite;
			transform: translateY(0);
		}
	}
}
</style>
