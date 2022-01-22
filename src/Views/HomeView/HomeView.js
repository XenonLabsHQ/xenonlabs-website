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
            <div className="section-title">A Propos de nous</div>
            <div className="section-description">
              A Propos ...
            </div>
          </div>
        </div>

        <div className="section section-contactus" id="contactus">
          <div className="section-text">
            <div className="section-title">Un Projet ? Contactez-Nous !</div>
            <div className="section-description">
              Contact details ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
