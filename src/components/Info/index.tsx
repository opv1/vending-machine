import React from 'react'
import Styles from './style.module.scss'

interface IComponent {
  text: string
}

export const Info: React.FC<IComponent> = (props) => {
  const { text } = props

  return (
    <div className={Styles.info}>
      <span>{text}</span>
    </div>
  )
}
