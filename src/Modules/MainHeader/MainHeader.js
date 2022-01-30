import React from "react";
import "./MainHeader.scss";

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="mh-title">
        <span className="mh-title-label-xenon">Xenon</span>Labs
        <span className="mhtilx-dot">.</span>
      </div>

      <div className="mh-menuitems">
        <a href="#home" className="mhmi-item">
          Acceuil
        </a>
        <a href="#aboutus" className="mhmi-item">
          Pourquoi nous ?
        </a>
        <a href="#contactus" className="mhmi-item">
          Notre équipe
        </a>
        <a href="#discord" className="mhmi-item">
          Contactez-nous
        </a>

        <div className="separator separator-vertical" />
        <a href="https://panel.xenonlabs.fr/" className="mhmi-item">
          Panel Serveurs
        </a>
      </div>
    </header>
  );
};

export default MainHeader;
