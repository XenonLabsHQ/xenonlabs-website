import React from "react";
import MainHeader from "../../Modules/MainHeader/MainHeader";
import "./HomeView.scss";

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
              Nous n'avons pas de grille tarifaire, nous choisissions avec vous un prix correct et cohérent 
              Nos développeurs et graphistes sont indépendant et touchent la quasi-totalité de l'argent gagné
              Vous serez mis directement en relation avec l'équipe. Ni relais ni intermédiaire. 
              Qualité professionnelle. Nous ne laisserons aucune trace de XenonLabs dans notre produit final.
              Nous disposons d'une grande flexibilité. Payez en 1, 2 ou 4 fois sans frais.
              Toutes nos offres d'hebergement sont d'une grande qualité, à des prix très bas.
            </div>
          </div>
        </div>

        <div className="section section-contactus" id="contactus">
          <div className="section-text">
            <div className="section-title">Notre équipe</div>
            <div className="cards-members">
              <div className="member">
                <img className="avatar" />
                <div className="member-infos">
                  <div className="member-name">Sun.</div>
                  <div className="member-description">Developer of this site</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
