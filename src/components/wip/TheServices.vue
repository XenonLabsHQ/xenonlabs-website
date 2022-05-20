<template>
	<ul class="services">
		<li class="services__item">
			<img src="@/assets/icons/discord.svg" alt="-" />
			Développement de bots discord
		</li>

		<li class="services__item">
			<img src="@/assets/icons/globe.svg" alt="-" />
			Elaboration de site web
		</li>
		<li class="services__item">
			<img src="@/assets/icons/box.svg" alt="-" />
			Création de mods et de plugins Minecraft
		</li>
		<li class="services__item">
			<img src="@/assets/icons/database.svg" alt="-" />
			Solutions d'hébergements complètes
		</li>
	</ul>
</template>

<script>
export default {
	name: "TheServices",
};
</script>

<style lang="scss">
.services {
	display: grid;
	grid-template-columns: 1fr 1fr;
	list-style: none;
	grid-gap: 1em 4em;
	padding-left: 0;
	margin-block: 0;

	&__item {
		display: flex;
		align-items: center;
		gap: 1em;

		& > img {
			height: 1.5em;
			width: 1.5em;
		}
	}
}

@media screen and (max-width: 900px) {
	.services {
		display: flex;
		flex-direction: column;
	}
}
</style>
