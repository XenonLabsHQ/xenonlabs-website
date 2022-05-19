<template>
	<main>
		<h1>Test Zone</h1>

		<div class="members">
			<card-info-member name="Wats" img="Wats_.webp" />
			<card-info-member name="Fluxy" img="Fluxy.webp" />
			<card-info-member name="Taonix" img="Taonix.webp" />
			<card-info-member name="Oméga" img="Omega.webp" />
			<card-info-member name="Sun" img="Sun.webp" />
			<card-info-member name="Sigma" img="Sigma.png" />
		</div>
	</main>
</template>

<script>
import CardInfoMember from "@/components/wip/CardInfoMember.vue";
export default {
	name: "TestView",
	components: { CardInfoMember },
};
</script>

<style>
body {
	color: white;
	background-color: #0a0c0a;
	margin: 1em;
	font-family: "Outfit", sans-serif;
	font-size: clamp(12px, 1vw, 18px);
	overflow-x: hidden;
}

.members {
	margin: 0 auto;
	max-width: 1100px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	grid-gap: 20px;
}
</style>
