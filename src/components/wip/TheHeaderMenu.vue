<template>
  <nav class="menu-cmpnt">
    <ul class="menu-items" :class="{ 'menu-open': isOpen }">
      <li class="menu-item">Accueil</li>
      <li class="menu-item">Pourquoi nous</li>
      <li class="menu-item">Notre équipe</li>
      <li class="menu-item">Contact</li>
    </ul>

    <div class="menu-btn" @click="isOpen = !isOpen">
      <div class="hamburger">
        <div class="ham-line" />
        <div class="ham-line" />
        <div class="ham-line" />
      </div>
    </div>

    <div class="menu-bar"></div>
  </nav>
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
    window.addEventListener("resize", this.onResize);
  },

  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
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
  }
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  padding: 0;
  opacity: 0;

  background-color: rgb(#000, 75%);
  transition: all 0.1s ease-in-out;
  margin-block: 0;
}

.menu-item {
  list-style-type: none;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 32pt;
  font-weight: 600;
  color: white;
  padding: 15px 20px;

  @media screen and (max-width: 550px) {
    padding: 15px 0;
    font-size: 8vw;
  }

  &:hover {
    color: var(--accent-2nd);
  }
}

.menu-open {
  opacity: 1;
}
</style>
