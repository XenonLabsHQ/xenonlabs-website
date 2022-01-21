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
      </div>
    </div>
  );
};

export default HomeView;
