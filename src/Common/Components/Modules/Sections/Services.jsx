import React from 'react'
import './Services.scss'

export default function Services() {
  return (
      <ul className="services">
        <li className="services__item">
          <img src="/assets/icons/discord.svg" alt="-"/>
          Développement de bots discord
        </li>

        <li className="services__item">
          <img src="/assets/icons/globe.svg" alt="-"/>
          Elaboration de site web
        </li>
        <li className="services__item">
          <img src="/assets/icons/box.svg" alt="-"/>
          Elaboration d'APIs de traduction et de moderation
        </li>
        <li className="services__item">
          <img src="/assets/icons/database.svg" alt="-"/>
          Solutions d'hébergements complètes
        </li>
      </ul>
  )
}