import React from 'react'
import "./MainHeader.scss";

const MainHeader = () => {
    return (
        <header className="main-header">
            <div className="mh-title">XenonLabs</div>
            
            <div className="mh-menuitems">
                <div className="mhmi-item">Acceuil</div>
                <div className="mhmi-item">A Propos de Nous</div>
                <div className="mhmi-item">Contactez-nous</div>
            </div>
        </header>
    )
}

export default MainHeader
