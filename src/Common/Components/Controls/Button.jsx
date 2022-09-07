import React from 'react'
import './Button.scss'

export default function Button(props) {
  return (
      <a className={['btn__base', props.className].join(' ')} href={props.href}>
        { props.children }
      </a>
  )
}