<template>
	<section class="landing">
		<div class="landing__focus">
			<TheHero />
			<TheServices />
		</div>
		<TheQualityCards />
	</section>
</template>

<script>
import TheHero from "@/components/wip/TheHero.vue";
import TheServices from "@/components/wip/TheServices.vue";
import TheQualityCards from "@/components/wip/TheQualityCards.vue";
export default {
	name: "TheLanding",
	components: { TheQualityCards, TheServices, TheHero },
};
</script>

<style lang="scss">
.landing {
	min-height: calc(100vh - 80px);
	background-color: var(--black-500);
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	gap: 4em;

	&__focus {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		gap: 4em;
	}
}
</style>
