<template>
	<main>
		<h1>Test Zone</h1>
		<card-info-member name="Sigma" img="Sigma.png" />
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
</style>
