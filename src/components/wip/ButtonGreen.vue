<template>
	<a class="btn--green">
		<slot></slot>
	</a>
</template>

<script>
export default {
	name: "ButtonGreen",
};
</script>

<style>
.btn--green {
	color: #0a0c0a;
	border: none;
	background-color: #74e262;
	border-radius: 4px;
	padding: 0.8em 1.6em;
	font-weight: 500;
}
</style>
