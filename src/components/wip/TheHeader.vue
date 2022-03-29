<template>
	<header class="header">
		<a class="header__wordmark" href="#">
			<span class="header__wordmark__accent">Xenon</span>Labs.
		</a>
		<img src="@/assets/icons/hamburger.svg" @click=debug alt="">
	</header>
</template>

<script>
export default {
	name: "TheHeader",
	methods: {
		debug() {
			console.log('clicked')
		}
	}
}
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

		&__accent {
			font-weight: bold;
		}
	}
}

</style>