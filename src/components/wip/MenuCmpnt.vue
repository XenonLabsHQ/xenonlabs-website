<template>
  <div class="cmpnt menu-cmpnt">
    <div class="menu-btn" @click="ontoggle">
      <img src="@/assets/icons/hamburger.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCmpnt",
  methods: {
    ontoggle(event) {
      console.log("Toggled !");
    },
  },
};
</script>

<style lang="scss" scoped></style>
