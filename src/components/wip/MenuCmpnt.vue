<template>
  <div class="cmpnt menu-cmpnt">
    <div class="menu-btn" @click="ontoggle">
      <img src="@/assets/icons/hamburger.svg" alt="" />
    </div>

    <div class="menu-overlay">
      <div class="menu-ov-container">
        <div class="menu-items">
          <div class="menu-item">Accueil</div>
          <div class="menu-item">Pourquoi nous</div>
          <div class="menu-item">Notre équipe</div>
          <div class="menu-item">Contact</div>
        </div>
      </div>
    </div>
    <div class="menu-bar"></div>
  </div>
</template>

<script>
export default {
  name: "MenuCmpnt",
  methods: {
    ontoggle() {
      console.log("Toggled !");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-cmpnt {
  .menu-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;

    .menu-ov-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .menu-items {
        padding: 100px;

        .menu-item {
          text-align: center;
          font-size: 30pt;
          color: white;
          padding: 15px 10px;
        }
      }
    }
  }
}
</style>
