import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { validateProductPrice } from '../../helpers'
import Styles from './style.module.scss'

interface IComponent {
  product: any
}

export const Product: React.FC<IComponent> = (props) => {
  const { product } = props

  const { enteredPrice } = useAppSelector((state) => state.main)

  const access = validateProductPrice(product, enteredPrice)

  return (
    <li
      className={
        access
          ? `${Styles.product} ${Styles.product_access}`
          : `${Styles.product}`
      }
    >
      <span className={Styles.name}>{product.name}</span>
      <span className={Styles.type}>{product.type}</span>
      <span className={Styles.price}>{product.price}₽</span>
      <span className={Styles.id}>{product.id}</span>
    </li>
  )
}
