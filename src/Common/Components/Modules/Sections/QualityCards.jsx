import React from 'react'
import './QualityCards.scss'

export default function QualityCards() {
  return (
      <div className="quality">
        <div className="quality__card">
          <div className="quality__card__title">
            <img alt="check-mark" src="/assets/icons/check.svg"/>
            Qualité professionnelle
          </div>
          <p className="quality__card__description">
            Notre équipe de développeur vous propose des produits finaux sans tâches, qui s’accorde avec un design et
            des
            solutions moderne.
          </p>
        </div>

        <div className="quality__card">
          <div className="quality__card__title">
            <img alt="cloud" src="/assets/icons/cloud.svg"/>
            Hebergement Supérieur
          </div>
          <p className="quality__card__description">
            Nous vous proposons un service d’hébergement en ligne pour correspondre parfaitement à votre application
            avec
            des systèmes opérationels 7j/7 et 24H/24.
          </p>
        </div>

        <div className="quality__card">
          <div className="quality__card__title">
            <img alt="money" src="/assets/icons/money.svg"/>
            Paiement flexible
          </div>
          <p className="quality__card__description">
            Nous acceptons les payements en 1, 2 ou 4 fois sans aucun frais supplémentaire.
          </p>
        </div>
      </div>
  )
}