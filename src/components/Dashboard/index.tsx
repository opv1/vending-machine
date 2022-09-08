import React, { useEffect, useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Info } from '../Info'
import { Input } from '../Input'
import { Block } from '../Block'
import { Change } from '../Change'
import { Product } from '../Product'
import {
  setCurrentStep,
  setEnteredPrice,
  setEnteredProductId,
  setChoosedProduct,
  setFirstInfo,
  setSecondInfo,
  setResetState,
} from '../../redux/stateSlice'
import { validatePrice, getProduct, validateProductPrice } from '../../helpers'
import { defaultValues, products, steps } from '../../const'
import { ValuesType } from '../../types'
import Styles from './style.module.scss'

export const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch()
  const { currentStep, enteredPrice, choosedProduct, firstInfo, secondInfo } =
    useAppSelector((state) => state.main)

  const [values, setValues] = useState<ValuesType>(defaultValues)
  const timerRef = useRef<any>(null)

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handlerKeyPressFirst = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.code === 'Enter') {
      if (validatePrice(values.inserted_money)) {
        const sumPrice = enteredPrice + Number(values.inserted_money)

        dispatch(setEnteredPrice(sumPrice))
        dispatch(setFirstInfo(`Inserted money: ${sumPrice}₽`))
        dispatch(setSecondInfo('Choose product'))
        dispatch(setCurrentStep(steps.second))
      } else {
        dispatch(setFirstInfo('Money is not accepted'))
        startTimer(() => dispatch(setFirstInfo(firstInfo)))
      }
    }
  }

  const handlerKeyPressSecond = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.code === 'Enter') {
      const product = getProduct(values.choose_roduct, products)

      if (product.length !== 0) {
        if (validateProductPrice(product[0], enteredPrice)) {
          dispatch(setChoosedProduct(product[0]))
          dispatch(setEnteredProductId(values.choose_roduct))
          dispatch(setSecondInfo('Success'))
          dispatch(setCurrentStep(steps.third))
        } else {
          dispatch(setSecondInfo('Not enough money'))
          startTimer(() => dispatch(setSecondInfo(secondInfo)))
        }
      } else {
        dispatch(setSecondInfo('Enter correct product number'))
        startTimer(() => dispatch(setSecondInfo(secondInfo)))
      }
    }
  }

  const resetState = () => {
    setValues(defaultValues)
    dispatch(setResetState())
  }

  const startTimer = (callback: () => void) => {
    timerRef.current = setTimeout(() => {
      callback()
    }, 500)
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div className={Styles.dashboard}>
      <Info text={firstInfo} />
      <Input
        onChange={handlerChange}
        onKeyPress={handlerKeyPressFirst}
        value={values.inserted_money}
        name='inserted_money'
        placeholder='MONEY'
        disabled={currentStep === steps.third}
      />
      <p>
        Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in
        1, 2, 5 and 10 ₽ coins.
      </p>
      <Info text={secondInfo} />
      <Input
        onChange={handlerChange}
        onKeyPress={handlerKeyPressSecond}
        value={values.choose_roduct}
        name='choose_roduct'
        placeholder='ID'
        disabled={currentStep !== steps.second}
      />
      <div className={Styles.row}>
        <Block>{currentStep === steps.third && <Change />}</Block>
        <Block onCLick={resetState}>
          {currentStep === steps.third && <Product product={choosedProduct} />}
        </Block>
      </div>
    </div>
  )
}
