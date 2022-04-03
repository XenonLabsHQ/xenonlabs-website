<template>
	<header class="header">
		<a class="header__wordmark" href="#"> <span class="header__wordmark__accent">Xenon</span>Labs. </a>
		<the-header-menu />
	</header>
</template>

<script>
import TheHeaderMenu from "@/components/wip/TheHeaderMenu.vue";

export default {
	name: "TheHeader",
	components: { TheHeaderMenu },
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 8px;

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
