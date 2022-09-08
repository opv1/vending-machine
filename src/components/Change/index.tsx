import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { coins } from '../../const'
import { getChange } from '../../helpers'
import { TotalType } from '../../types'
import Styles from './style.module.scss'

export const Change: React.FC = () => {
  const { enteredPrice, choosedProduct } = useAppSelector((state) => state.main)

  const [total, setTotal] = useState<TotalType>({
    ten: [],
    five: [],
    two: [],
    one: [],
  })

  useEffect(() => {
    const difference = enteredPrice - Number(choosedProduct.price)
    const arrayCoins = getChange(difference, coins)

    const ten = [] as number[]
    const five = [] as number[]
    const two = [] as number[]
    const one = [] as number[]

    arrayCoins.forEach((coin) => {
      if (coin === 10) {
        ten.push(coin)
      }

      if (coin === 5) {
        five.push(coin)
      }

      if (coin === 2) {
        two.push(coin)
      }

      if (coin === 1) {
        one.push(coin)
      }
    })

    setTotal({ ten, five, two, one })
  }, [enteredPrice, choosedProduct])

  return (
    <div className={Styles.change}>
      {total.ten.length !== 0 && <span>10₽: {total.ten.length} coins</span>}
      {total.five.length !== 0 && <span>5₽: {total.five.length} coins</span>}
      {total.two.length !== 0 && <span>2₽: {total.two.length} coins</span>}
      {total.one.length !== 0 && <span>1₽: {total.one.length} coins</span>}
    </div>
  )
}
