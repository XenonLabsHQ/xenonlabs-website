import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
      <footer className="footer">
        <section id="contact" className="footer__left">
          <h2>Contactez-nous</h2>

          <div className="contact">
            <div className="contact__cards">
              <div className="contact__cards__title">
                <img alt="discord" src="/assets/icons/discord_dark.svg"/>
                <h4>Rejoignez le serveur discord</h4>
              </div>
              <p className="contact__cards__description">
                Là où se trouve toute notre communauté, nos developpeurs et notre support.
              </p>

              <a className="contact__cards__follow" href="discordLink">
                <img alt="arrow" src="/assets/icons/arrow_dark.svg"/>
                Nous rejoindre
              </a>
            </div>

            <div className="contact__cards">
              <div className="contact__cards__title">
                <img alt="mail" src="/assets/icons/mail.svg"/>
                <h4>Contactez nous par mail</h4>
              </div>
              <p className="contact__cards__description">Vous pouvez aussi nous contacter via mail.</p>

              <a className="contact__cards__follow" href="'mailto:' + contactEmail">
                <img alt="arrow" src="/assets/icons/arrow_dark.svg"/>
                Nous contacter
              </a>
            </div>
          </div>
        </section>
        <section className="footer__right">
          <div className="footer__right__container">
            <base-logo/>
            <div className="footer__links">
              <a className="footer__link" href="">mentions légales</a>
              <a className="footer__link" href=""
              >FAQ</a>
            </div>
          </div>
          <a className="footer__link" href="#">
            Retourner en haut
            <img alt="arrow" src="/assets/icons/arrow.svg"/>
          </a>
        </section>
      </footer>
  )
}