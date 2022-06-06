<template>
	<header class="header">
		<base-logo />
		<the-header-menu />
	</header>
</template>

<script>
export default {
	name: "TheHeader",
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
