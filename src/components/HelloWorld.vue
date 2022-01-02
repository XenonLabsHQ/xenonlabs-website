<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@800&display=swap");

.hello {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &,
  h1 {
    font-size: calc(1rem + 5vw);
    font-family: "Outfit", sans-serif;
    color: white;
    text-shadow: 0 0 5px white;
  }
}
</style>
