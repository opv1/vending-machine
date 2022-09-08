import { ProductType } from './types'

export const validatePrice = (price: string) => {
  if (price === '50' || price === '100' || price === '200' || price === '500') {
    return true
  } else {
    return false
  }
}

export const getProduct = (productId: string, products: ProductType[]) => {
  return products.filter(
    (product: ProductType) => String(product.id) === productId,
  )
}

export const validateProductPrice = (
  product: ProductType,
  enteredPrice: number,
) => {
  if (Number(product.price) <= Number(enteredPrice)) {
    return true
  } else {
    return false
  }
}

export const getChange = (sum: number, coins: number[]) => {
  const copy = [...coins]
  const denomination = []
  let result = sum

  while (result > 0 && copy.length > 0) {
    if (copy[0] <= result) {
      denomination.push(copy[0])
      result = result - copy[0]
    } else {
      copy.shift()
    }
  }

  return denomination
}
