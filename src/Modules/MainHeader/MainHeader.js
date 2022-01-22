import React from "react";
import "./MainHeader.scss";

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="mh-title">
        <span className="mh-title-label-xenon">Xenon</span>Labs<span className="mhtilx-dot">.</span>
      </div>

      <div className="mh-menuitems">
        <a href="#home" className="mhmi-item">Acceuil</a>
        <a className="mhmi-item">Contactez-nous</a>
        <a className="mhmi-item">A Propos de Nous</a>
        <div className="separator separator-vertical" />
        <a className="mhmi-item">Panel Serveurs</a>
      </div>
    </header>
  );
};

export default MainHeader;
