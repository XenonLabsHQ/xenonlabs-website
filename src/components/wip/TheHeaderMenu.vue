<template>
  <div class="cmpnt menu-cmpnt">
    <div class="menu-btn" @click="isOpen = !isOpen">
      <div class="hamburger">
        <div class="ham-line" />
        <div class="ham-line" />
        <div class="ham-line" />
      </div>
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
  name: "TheHeaderMenu",

  data() {
    return {
      isOpen: false,
    };
  },

  created() {
    window.addEventListener("resize", this.onRezize);
  },

  unmounted() {
    window.removeEventListener("resize", this.onRezize);
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

    .hamburger {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 30px;

      .ham-line {
        z-index: 2;
        height: 3px;
        background-color: white;
        border-radius: 300px;
      }
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
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 32pt;
          font-weight: 600;
          color: white;
          padding: 15px 20px;
          transition: color 0.1s ease-in-out;

          @media screen and (max-width: 550px) {
            padding: 15px 0;
            font-size: 8vw;
          }

          &:hover {
            color: var(--accent-2nd);
          }
        }
      }
    }
  }
}
</style>
