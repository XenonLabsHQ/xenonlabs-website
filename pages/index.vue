<template>
	<TheHeader />
	<TheLanding />
	<TheWorkFlow />
	<TheStaff />
	<TheFooter />
</template>
<style lang="scss">
@keyframes rgbShift {
	0% {
		filter: hue-rotate(0deg);
	}
	100% {
		filter: hue-rotate(360deg);
	}
}

.rgb {
	animation: rgbShift 10s ease infinite;
}
</style>
