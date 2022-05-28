<template>
	<header class="header">
		<base-logo />
		<the-header-menu />
	</header>
</template>

<script>
import TheHeaderMenu from "@/components/TheHeaderMenu.vue";
import BaseLogo from "@/components/BaseLogo.vue";

export default {
	name: "TheHeader",
	components: { TheHeaderMenu, BaseLogo },
};
</script>

<style lang="scss">
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px 1rem;
	height: 5rem;
}
</style>
