type ProductType = {
  id: number
  name: string
  type: string
  price: string
}

export const defaultState = {
  currentStep: 'first',
  enteredPrice: 0,
  enteredProductId: '',
  choosedProduct: {} as ProductType,
  firstInfo: 'Insert money',
  secondInfo: '/',
}

export const defaultValues = {
  inserted_money: '',
  choose_roduct: '',
}

export const products = [
  { id: 1, name: 'Lay’s', type: 'Chips', price: '75' },
  { id: 2, name: 'Coca-Cola', type: 'Drink', price: '180' },
  { id: 3, name: 'Light', type: 'Rusks', price: '220' },
  { id: 4, name: 'Chaka', type: 'Peanut', price: '600' },
  { id: 5, name: 'Water', type: 'Drink', price: '40' },
  { id: 6, name: 'Fanta', type: 'Cold drink', price: '400' },
  { id: 7, name: 'Nutella', type: 'Chocolate paste', price: '550' },
]

export const steps = {
  first: 'first',
  second: 'second',
  third: 'third',
}

export const coins = [10, 5, 2, 1]
