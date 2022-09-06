import React, { useState } from 'react'
import "./HeaderMenu.scss"

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className={['nav', `${isOpen ? 'nav__open' : ''}`].join(' ')}>
        <ul className="nav__list">
          <li className="nav__list__item">
            <a href="#home">Accueil</a>
          </li>
          <li className="nav__list__item">
            <a href="#whynot">Pourquoi nous</a>
          </li>

          <li className="nav__list__item">
            <a href="#staff">Notre équipe</a>
          </li>

          <li className="nav__list__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="nav__hamburger" onClick={() => {
            if (!isOpen) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "initial";

            setIsOpen(!isOpen);
        }}>
          <div className="nav__hamburger__line"/>
          <div className="nav__hamburger__line"/>
          <div className="nav__hamburger__line"/>
        </div>
      </nav>
  )
}
