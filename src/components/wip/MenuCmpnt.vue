<template>
  <div class="cmpnt menu-cmpnt">
    <div class="menu-btn" @click="isOpen = !isOpen">
      <img src="@/assets/icons/hamburger.svg" alt="" />
    </div>

    <div class="menu-overlay" :class="{ 'menu-overlay-open': isOpen }">
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

  created() {
    window.addEventListener("resize", this.onRezize);
  },

  destroyed() {
    window.removeEventListener("resize", this.onRezize);
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    onRezize() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-cmpnt {
  .menu-btn {
    user-select: none;
    position: relative;
    z-index: 2;
    display: none;

    @media screen and (max-width: 1080px) {
      display: initial;
    }
  }

  .menu-overlay {
    z-index: -1;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    min-width: 100vw;
    min-height: 100vh;
    transition: opacity 0.2s ease-in-out;
    display: none;

    @media screen and (max-width: 1080px) {
      display: initial;
    }

    &-open {
      z-index: 1;
      opacity: 1;
    }

    .menu-ov-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .menu-items {
        padding: 100px;
        user-select: none;

        .menu-item {
          text-align: center;
          font-size: 30pt;
          color: white;
          padding: 15px 20px;
          transition: color 0.1s ease-in-out;

          &:hover {
            color: var(--accent-2nd);
          }
        }
      }
    }
  }
}
</style>
