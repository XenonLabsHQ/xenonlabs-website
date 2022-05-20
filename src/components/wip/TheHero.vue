<template>
	<div class="hero">
		<img class="hero__logo" alt="Logo" src="@/assets/logo.svg" />
		<div class="hero__intro">
			<h1 class="hero__title">XenonLabs, Bienvenue!</h1>
			<p class="hero__description">Nos développeurs et graphistes indépendants</p>
			<p class="hero__description">seront ravis de construire avec vous vos projets.</p>
			<TheButtonScroll />
		</div>
	</div>
</template>

<script>
import TheButtonScroll from "@/components/wip/TheButtonScroll.vue";
export default {
	components: { TheButtonScroll },
};
</script>
<style lang="scss">
.hero {
	display: flex;
	align-items: center;
	gap: 4em;

	&__logo {
		height: 18em;
		width: 18em;
	}

	&__intro {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	&__title {
		color: var(--text-title);
		font-size: 36pt;
		padding-block: 5px;
		margin: 0;
	}

	&__description {
		font-size: 14pt;
		width: 45ch;
		font-weight: 500;
		text-wrap: normal;
		margin: 0;
	}
}
</style>
