import React from 'react'
import QualityCards from './QualityCards'
import Services from './Services'
import Hero from './Hero'
import './Landing.scss'

export default function Landing() {
  return (
      <section id="whynot" className="landing">
        <div className="landing__focus">
          <Hero />
          <Services />
        </div>
        <QualityCards />
      </section>
  )
}