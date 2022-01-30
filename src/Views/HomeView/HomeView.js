import React from "react";
import MainHeader from "../../Modules/MainHeader/MainHeader";
import "./HomeView.scss";
import avatar_sun from "../../Common/Assets/Avatars/Sun.webp";
import avatar_fluxy from "../../Common/Assets/Avatars/Fluxy.webp";
import avatar_omega from "../../Common/Assets/Avatars/Omega.webp";
import avatar_taonix from "../../Common/Assets/Avatars/Taonix.webp";
import avatar_voltis from "../../Common/Assets/Avatars/Voltis.gif";
import avatar_wats from "../../Common/Assets/Avatars/Wats_.webp";
import avatar_yalis from "../../Common/Assets/Avatars/Yalis.webp";


const HomeView = () => {
  return (
    <div className="activity activity-homeview">
      <MainHeader />

      <div className="sections">
        <div className="section section-home" id="home">
          <div className="section-text">
            <div className="section-title">XenonLabs, Bienvenue !</div>
            <div className="section-description">
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

        <div className="section section-aboutus" id="aboutus">
          <div className="section-text">
            <div className="section-title">Pourquoi nous choisir ?</div>
            <div className="section-description">
              <ul className="sdesc-list">
                <li>Nous n'avons pas de grille tarifaire, nous choisissions avec vous un prix correct et cohérent.</li>
                <li>Nos développeurs et graphistes sont indépendant et touchent la quasi-totalité de l'argent gagné.</li>
                <li>Vous serez mis directement en relation avec l'équipe. Ni relais ni intermédiaire.</li>
                <li>Qualité professionnelle. Nous ne laisserons aucune trace de XenonLabs dans notre produit final.</li>
                <li>Nous disposons d'une grande flexibilité. Payez en 1, 2 ou 4 fois sans frais.</li>
                <li>Toutes nos offres d'hebergement sont d'une grande qualité, à des prix très bas.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section section-contactus" id="contactus">
          <div className="section-text">
            <div className="section-title">Notre équipe</div>
            <div className="cards-members">
            <div className="member">
                <img className="avatar" src={avatar_voltis} />
                <div className="member-infos">
                  <div className="member-name">Voltis</div>
                  <div className="member-description">Fondateur.</div>
                </div>
              </div>

              <div className="member">
                <img className="avatar" src={avatar_yalis} />
                <div className="member-infos">
                  <div className="member-name">Yalis</div>
                  <div className="member-description">Co-Fondateur.</div>
                </div>
              </div>
              
              <div className="member">
                <img className="avatar" src={avatar_sun} />
                <div className="member-infos">
                  <div className="member-name">Sun.</div>
                  <div className="member-description">Fullstack dev.</div>
                </div>
              </div>

              <div className="member">
                <img className="avatar" src={avatar_fluxy} />
                <div className="member-infos">
                  <div className="member-name">Fluxy</div>
                  <div className="member-description">Developpeur Java.</div>
                </div>
              </div>

              <div className="member">
                <img className="avatar" src={avatar_omega} />
                <div className="member-infos">
                  <div className="member-name">Omega</div>
                  <div className="member-description">Travaille avec JS & Lua.</div>
                </div>
              </div>
              
              <div className="member">
                <img className="avatar" src={avatar_taonix} />
                <div className="member-infos">
                  <div className="member-name">Taonix</div>
                  <div className="member-description">Graphiste.</div>
                </div>
              </div>

              <div className="member">
                <img className="avatar" src={avatar_wats} />
                <div className="member-infos">
                  <div className="member-name">Wats</div>
                  <div className="member-description">Graphiste.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-discord" id="discord">
          <div className="section-text">
            <div className="section-title">Contactez-nous</div>
            <div className="section-description">
              <div className="sdesc-contactlinks">
                <a href="https://discord.gg/V2XyYSSFdD" target="_blank" rel="noreferrer">Nous joindre sur Discord</a>
              <a href="mailto:contact@xenonlabs.fr">Nous contacter par mail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
