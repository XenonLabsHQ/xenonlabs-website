import React from 'react'
import './WorkFlow.scss'

export default function WorkFlow() {
  return (
      <section id="more">
        <h1>Choisissez notre système <span>innovant.</span></h1>
        <div className="workflows">
          <div className="workflows--cards">
            <img src="/assets/icons/cash.svg" alt="Paiement"/>
            <p>Nous n'avons pas de grille tarifaire, nous choisissions avec vous un prix correct et cohérent.</p>
          </div>

          <div className="workflows--cards">
            <img src="/assets/icons/brush.svg" alt="Gain"/>
            <p>Nos développeurs et graphistes sont indépendant et touchent la quasi-totalité de l'argent gagné.</p>
          </div>

          <div className="workflows--cards">
            <img src="/assets/icons/people.svg" alt="Contact"/>
            <p>Vous serez mis directement en relation avec l'équipe. Ni relais ni intermédiaire.</p>
          </div>
        </div>
      </section>
  )
}