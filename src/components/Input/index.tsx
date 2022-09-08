import React from 'react'
import Styles from './style.module.scss'

interface IComponent {
  onChange: any
  onKeyPress: any
  value: string
  name: string
  placeholder: string
  disabled?: boolean
}

export const Input: React.FC<IComponent> = (props) => {
  const { onChange, onKeyPress, value, name, placeholder, disabled } = props

  return (
    <input
      className={Styles.input}
      onChange={onChange}
      onKeyPress={onKeyPress}
      type='text'
      value={value}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}
