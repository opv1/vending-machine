import React from 'react'
import { Product } from '../Product'
import { products } from '../../const'
import Styles from './style.module.scss'

export const Display: React.FC = () => {
  return (
    <div className={Styles.display}>
      <ul className={Styles.list}>
        {products.length !== 0 &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
    </div>
  )
}
