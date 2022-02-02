<template>
  <div class="activity activity-homeview">
    <TheHeader />

    <div class="sections">
      <div class="section section-home" id="home">
        <div class="section-text">
          <div class="section-title">XenonLabs, Bienvenue !</div>
          <div class="section-description">
            Développement de bots discord,
            <br />
            Création de mods et de plugins Minecraft,
            <br />
            Elaboration de site web, <br />
            Solutions d'hébergements complètes.
            <br />
            Nos développeurs et graphistes indépendants seront ravis de
            construire avec vous vos projets.
          </div>
        </div>
      </div>

      <div class="section section-aboutus" id="aboutus">
        <div class="section-text">
          <div class="section-title">Pourquoi nous choisir ?</div>
          <div class="section-description">
            <ul class="sdesc-list">
              <li>
                Nous n'avons pas de grille tarifaire, nous choisissions avec
                vous un prix correct et cohérent.
              </li>
              <li>
                Nos développeurs et graphistes sont indépendant et touchent la
                quasi-totalité de l'argent gagné.
              </li>
              <li>
                Vous serez mis directement en relation avec l'équipe. Ni
                relais ni intermédiaire.
              </li>
              <li>
                Qualité professionnelle. Nous ne laisserons aucune trace de
                XenonLabs dans notre produit final.
              </li>
              <li>
                Nous disposons d'une grande flexibilité. Payez en 1, 2 ou 4
                fois sans frais.
              </li>
              <li>
                Toutes nos offres d'hebergement sont d'une grande qualité, à
                des prix très bas.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section section-contactus" id="contactus">
        <div class="section-text">
          <div class="section-title">Notre équipe</div>
          <div class="cards-members">
            <div class="member">
              <img class="avatar" src="@/assets/members/Voltis.gif" />
              <div class="member-infos">
                <div class="member-name">Voltis</div>
                <div class="member-description">Fondateur & Developpeur Python.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="@/assets/members/Yalis.webp" />
              <div class="member-infos">
                <div class="member-name">Yalis</div>
                <div class="member-description">Co-Fondateur.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="@/assets/members/Sun.webp" />
              <div class="member-infos">
                <div class="member-name">Sun.</div>
                <div class="member-description">Fullstack dev.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="@/assets/members/Sigma.webp" />
              <div class="member-infos">
                <div class="member-name">Sigma</div>
                <div class="member-description">FullStack & Pythonista.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="@/assets/members/Fluxy.webp" />
              <div class="member-infos">
                <div class="member-name">Fluxy</div>
                <div class="member-description">Developpeur Java.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="@/assets/members/Omega.webp" />
              <div class="member-infos">
                <div class="member-name">Omega</div>
                <div class="member-description">
                  Travaille avec JS & Lua.
                </div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="@/assets/members/Taonix.webp" />
              <div class="member-infos">
                <div class="member-name">Taonix</div>
                <div class="member-description">Graphiste.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="@/assets/members/Wats_.webp" />
              <div class="member-infos">
                <div class="member-name">Wats</div>
                <div class="member-description">Graphiste.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-discord" id="discord">
        <div class="section-text">
          <div class="section-title">Contactez-nous</div>
          <div class="section-description">
            <div class="sdesc-contactlinks">
              <a
                href="https://discord.gg/V2XyYSSFdD"
                target="_blank"
                rel="noreferrer"
              >
                Rejoindre notre Discord
              </a>
              <a href="mailto:contact@xenonlabs.fr">
                Nous contacter par mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "Home",
  components: {
    TheHeader
  }
};
</script>

<style lang="stylus">
.cards-members
  display: grid
  grid-template-columns: repeat(5, 1fr)
  grid-auto-rows: minmax(100px, auto)
  gap: 50px
  place-items: center

  @media screen and (max-width: 1080px)
    grid-template-columns: repeat(3, 1fr)
    gap: 10px
    grid-auto-rows: minmax(50px, auto)

  .member
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar
      border-radius: 300px
      border: 1px solid #505050b3
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.349)
      user-select: none
      pointer-events: none

      @media screen and (max-width: 1080px)
        height: 80px

      @media screen and (max-width: 500px)
        height: 15vw

    .member-infos
      display: flex
      flex-direction: column
      align-items: center

      .member-name
        font-size: 30pt
        font-weight: 600

        @media screen and (max-width: 800px)
          font-size: 16pt

      .member-description
        font-size: 12pt
        font-weight: 300

        @media screen and (max-width: 800px)
          font-size: 9.5pt

.section
  border-bottom: 1px solid #505050b3
  color: white
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.349)

  .section-text
    display: flex
    flex-direction: column
    justify-content: center
    height: 100%
    padding: 0 100px
    gap: 20px

    @media screen and (max-width: 1080px)
      align-items: center
      justify-content: center
      padding: 0 80px

    @media screen and (max-width: 750px)
      padding: 0 30px

    .section-title
      font-size: 50pt
      font-weight: 600

      @media screen and (max-width: 1080px)
        font-size: 35pt
        align-self: center

      @media screen and (max-width: 750px)
        font-size: 5vw

    .section-description
      max-width: 32em
      font-size: 16pt
      font-weight: 300

      @media screen and (max-width: 650px)
        font-size: 12pt
        font-weight: 500

      @media screen and (max-width: 1080px)
        align-self: center

  &-home
    background-color: var(--bg-darker)
    height: 100vh
    color: white

  &-aboutus
    padding: 100px 0
    height: 80vh
    background-color: #222521
    color: white

    .section-description
      max-width: 33em !important

    .section-title,
    .section-description
      align-self: flex-end

    .sdesc-list
      display: flex
      flex-direction: column
      gap: 20px

  &-contactus
    background-color: #217c4a
    height: 110vh

    .section-text
      color: white
      align-items: center

  &-discord
    height: 70vh
    background-color: #207044

    .sdesc-contactlinks
      display: flex
      gap: 10px
      font-weight: 600

      a
        color: #222521
</style>
