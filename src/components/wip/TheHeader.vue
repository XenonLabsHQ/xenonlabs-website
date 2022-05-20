<template>
	<header class="header">
		<a class="header__wordmark" href="#" @mouseenter="toggleRgb()" @mouseleave="toggleRgb()"
			><span class="header__wordmark__accent">Xenon</span>Labs.
		</a>
		<the-header-menu />
	</header>
</template>

<script>
import TheHeaderMenu from "@/components/wip/TheHeaderMenu.vue";

export default {
	name: "TheHeader",
	components: { TheHeaderMenu },
	methods: {
		toggleRgb() {
			const app = document.getElementById("app");
			app.classList.toggle("rgb");
		},
	},
};
</script>

<style lang="scss">
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px 1rem;
	height: 5rem;

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
