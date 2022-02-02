<template>
	<TheHeader/>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
:root {
  --bg-default: #294523;
  --bg-evidence: #74e262;
  --bg-darker: #5bb04c;
  --bg-trans-darker: #57575750;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
}
</style>
