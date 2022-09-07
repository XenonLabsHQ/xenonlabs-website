import React from 'react'
import strings from '../../../data/strings.json'
import './Staff.scss'
import Button from '../../Controls/Button'

const membersProps = {
  discordLink: strings.links.discord,
  contactEmail: strings.links.email,
  m: strings.members,
}

export default function Staff() {
  return (
      <section id="staff" className="staff">
        <div className="staff__thestaff">
          <h2 className="staff__title">Notre équipe</h2>

          <section className="founders">
            <div className="info--member">
              <img className="info--member__avatar" src="/images/members/Voltis.gif" alt="Voltis Profile Picture"/>
              <div className="info--member--info">
                <p className="info--member--info__name">Voltis</p>
                <p className="info--member--info__desc">
                  <img alt="badge" src="/assets/icons/badge.svg"/>
                  Fondateur.
                </p>
                <Button className="btn__base__primary" href={membersProps.m.Voltis.follow}>En savoir plus
                </Button>
              </div>
            </div>

            <div className="info--member">
              <img className="info--member__avatar" src="/images/members/Yalis.webp" alt="Yalis Profile Picture"/>
              <div className="info--member--info">
                <p className="info--member--info__name">Yalis</p>
                <p className="info--member--info__desc">
                  <img alt="badge" src="/assets/icons/badge.svg"/>
                  Co-Fondateur.
                </p>
                <Button className="btn__base__primary" href={membersProps.m.Yalis.follow}>En savoir plus
                </Button>
              </div>
            </div>
          </section>

          <section className="members">
            <div className="info--member">
              <img className="info--member__avatar" src="/images/members/Sigma.webp" alt="Sigma Profile Picture"/>
              <div className="info--member--info">
                <p className="info--member--info__name">Sigma</p>
                <Button className="btn__base__primary" href={membersProps.m.Sigma.follow}>En savoir plus
                </Button>
              </div>
            </div>

            <div className="info--member">
              <img className="info--member__avatar" src="/images/members/Powerm1nt.webp"
                   alt="Powerm1nt Profile Picture"/>
              <div className="info--member--info">
                <p className="info--member--info__name">Powerm1nt</p>
                <Button className="btn__base__primary" href={membersProps.m.Powerm1nt.follow}>En savoir plus
                </Button>
              </div>
            </div>

            <div className="info--member">
              <img className="info--member__avatar" src="/images/members/Taonix.webp" alt="Taonix Profile Picture"/>
              <div className="info--member--info">
                <p className="info--member--info__name">Taonix</p>
                <Button className="btn__base__primary" href={membersProps.m.Taonix.follow}>En savoir plus
                </Button>
              </div>
            </div>
          </section>
        </div>
        <div className="staff__involving">
          <p>Vous êtes intéressé pour travailler avec nous?</p>
          <Button className="btn__base__primary" href={membersProps.discordLink}>Nous rejoindre</Button>
        </div>
      </section>
  )
}