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
            <div className="section-title">
              XenonLabs, Bienvenue !
            </div>
            <div className="section-desctiption">
              lorem
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
