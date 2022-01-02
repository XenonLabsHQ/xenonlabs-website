<template>
  <HelloWorld msg="Hello World !" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background: #1a212b;
}
</style>
