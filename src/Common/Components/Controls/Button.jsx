import React from 'react'
import './Button.scss'

export default function Button(props) {
  return (
      <a className="btn__base">
        { props.children }
      </a>
  )
}