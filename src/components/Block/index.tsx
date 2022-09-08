import React from 'react'
import Styles from './style.module.scss'

interface IComponent {
  onCLick?: any
  children: React.ReactNode
}

export const Block: React.FC<IComponent> = (props) => {
  const { onCLick, children } = props

  return (
    <div className={Styles.block} onClick={onCLick}>
      {children}
    </div>
  )
}
