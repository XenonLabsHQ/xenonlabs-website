import React from 'react'
import './Hero.scss'
import ButtonScroll from '../../Misc/ButtonScroll'

export default function Hero() {
  return (
      <div className="hero">
        <img className="hero__logo" alt="Logo" src="/public/logo.svg"/>
        <div className="hero__intro">
          <h1 className="hero__title"><span>XenonLabs, </span>Bienvenue !</h1>
          <p className="hero__description">
            Nos développeurs et graphistes indépendants seront ravis de construire avec vous vos projets.
          </p>
          <ButtonScroll />
        </div>
      </div>
  )
}