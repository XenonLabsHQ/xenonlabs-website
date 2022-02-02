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
              <img class="avatar" src="{avatar_voltis}" />
              <div class="member-infos">
                <div class="member-name">Voltis</div>
                <div class="member-description">Fondateur & Developpeur Python.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="{avatar_yalis}" />
              <div class="member-infos">
                <div class="member-name">Yalis</div>
                <div class="member-description">Co-Fondateur.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="{avatar_sun}" />
              <div class="member-infos">
                <div class="member-name">Sun.</div>
                <div class="member-description">Fullstack dev.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="{avatar_sigma}" />
              <div class="member-infos">
                <div class="member-name">Sigma</div>
                <div class="member-description">FullStack & Pythonista.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="{avatar_fluxy}" />
              <div class="member-infos">
                <div class="member-name">Fluxy</div>
                <div class="member-description">Developpeur Java.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="{avatar_omega}" />
              <div class="member-infos">
                <div class="member-name">Omega</div>
                <div class="member-description">
                  Travaille avec JS & Lua.
                </div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="{avatar_taonix}" />
              <div class="member-infos">
                <div class="member-name">Taonix</div>
                <div class="member-description">Graphiste.</div>
              </div>
            </div>

            <div class="member">
              <img class="avatar" src="{avatar_wats}" />
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

<style scoped>

</style>