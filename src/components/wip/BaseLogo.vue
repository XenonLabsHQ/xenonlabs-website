<template>
	<a class="app__wordmark" href="#" @mouseenter="toggleRgb()" @mouseleave="toggleRgb()"
		><span class="app__wordmark__accent">Xenon</span>Labs.
	</a>
</template>

<script>
export default {
	name: "BaseLogo",
	methods: {
		toggleRgb() {
			const app = document.getElementById("app");
			app.classList.toggle("rgb");
		},
	},
};
</script>

<style lang="scss">
.app {
	&__wordmark {
		color: inherit;
		font-size: 2rem;
		text-decoration: none;
		font-weight: 200;
		z-index: 2;

		&__accent {
			font-weight: bold;
		}
	}
}
</style>
