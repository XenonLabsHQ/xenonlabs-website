<template>
  <header class="main-header">
    <div class="mh-title">
      <span class="mh-title-label-xenon">Xenon</span>Labs
      <span class="mhtilx-dot">.</span>
    </div>

    <div class="mh-menuitems">
      <a href="#home" class="mhmi-item"> Accueil </a>
      <a href="#aboutus" class="mhmi-item"> Pourquoi nous ? </a>
      <a href="#contactus" class="mhmi-item"> Notre équipe </a>
      <a href="#discord" class="mhmi-item"> Contactez-nous </a>

      <div class="separator separator-vertical" />
      <a href="https://panel.xenonlabs.fr/" class="mhmi-item">
        Panel Serveurs
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="stylus" scoped>
@keyframes anim-mobile-logo
  from
    opacity: 0

  to
    opacity: 1


.main-header
  background: var(--bg-darker)
  height: 80px
  position: sticky
  top: 0
  overflow: hidden
  display: flex
  align-items: center
  justify-content: space-around
  gap: 20vw
  padding: 0 15px
  z-index: 999
  border-bottom: 1px solid #505050b3
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.349)

  @supports (backdrop-filter: blur())
    backdrop-filter: blur(20px)
    background: var(--bg-trans-darker)

  @media screen and (max-width: 1080px)
    display: none

  .mh-title
    font-size: 30pt
    color: white
    font-weight: 200

    .mh-title-label-xenon
      font-weight: 600

    .mhtilx-dot
      font-weight: 500

  .mh-menuitems
    display: flex
    align-items: center
    gap: 20px
    user-select: none

    .mhmi-item
      color: white
      font-size: 18px
      height: 22px
      text-decoration: none
      padding: 5px

      &:after {
        content: ""
        display: block
        width: 100%
        height: 3px
        position: relative
        top: 5px
        opacity: 0
        background: white
        transition: 0.1s opacity ease-in-out, 0.1s top ease-in-out
        pointer-events: none
        user-select: none
        border-radius: 300px
        cursor: pointer
      }

      &:hover
        &::after
          opacity: 1
          top: 0

.separator
  background-color: #e4e1e1
  display: inline-block
  width: 3px
  border-radius: 300px

  &-vertical
    height: 25px
</style>
