<template>
	<section id="whynot" class="landing">
		<div class="landing__focus">
			<TheHero />
			<TheServices />
		</div>
		<TheQualityCards />
	</section>
</template>
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
