<template>
  <nav class="nav">
    <ul class="nav__list" :class="{ nav__list__open: isOpen }">
      <li class="nav__item">Accueil</li>
      <li class="nav__item">Pourquoi nous</li>
      <li class="nav__item">Notre équipe</li>
      <li class="nav__item">Contact</li>
    </ul>

    <div class="nav__btn" @click="isOpen = !isOpen">
      <div class="nav__hamburger">
        <div class="nav__hamburger__line" />
        <div class="nav__hamburger__line" />
        <div class="nav__hamburger__line" />
      </div>
    </div>

    <div class="nav__bar"></div>
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
.nav {
  &__list {
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

    &__open {
      opacity: 1;
    }
  }

  &__item {
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

  &__btn {
    user-select: none;
    position: relative;
    z-index: 2;
    display: none;

    @media screen and (max-width: 1080px) {
      display: initial;
    }
  }

  &__hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 30px;

    &__line {
      z-index: 2;
      height: 3px;
      background-color: white;
      border-radius: 300px;
    }
  }
}
</style>
