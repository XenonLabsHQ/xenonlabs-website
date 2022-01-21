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
              Donnons ensemble vie à votre projet. Nos développeurs et
              graphistes indépendants seront ravis de construire avec vous votre
              projet. Développement de bots discord, création de mods ou de
              plugins Minecraft, élaboration de site web, ou encore hébergement
              de tout type de projets.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
