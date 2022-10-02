import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { v4 as uuid } from 'uuid'

import { coffees } from '../data/coffees'
import {
  addCoffeeItemToCartAction,
  decrementCoffeeItemQuantityAction,
  incrementCoffeeItemQuantityAction,
  removeCoffeeItemFromCartAction,
} from '../reducers/coffee/actions'
import { CoffeeItem, coffeesReducer } from '../reducers/coffee/reducer'

interface CoffeeContextType {
  coffeeItems: CoffeeItem[]
  coffeeItemsCart: CoffeeItem[] | null
  addCoffeeItemToCart: (coffeeItem: CoffeeItem) => void
  removeCoffeeItemFromCart: (coffeeItem: CoffeeItem) => void
  incrementCoffeeItemQuantity: (coffeeId: string) => void
  decrementCoffeeItemQuantity: (coffeeId: string) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffeeItems: coffees
        ? coffees.map((coffee) => ({
            id: uuid(),
            ...coffee,
          }))
        : [],
      coffeeItemsCart: [],
    },
    () => {
      const storedCoffees = localStorage.getItem(
        import.meta.env.VITE_LOCAL_STORAGE_NAME,
      )

      if (storedCoffees) {
        return JSON.parse(storedCoffees)
      }

      return {
        coffeeItems: coffees
          ? coffees.map((coffee) => ({
              id: uuid(),
              ...coffee,
            }))
          : [],
        coffeeItemsCart: [],
      }
    },
  )

  const { coffeeItems, coffeeItemsCart } = coffeeState

  function addCoffeeItemToCart(coffeeItem: CoffeeItem) {
    dispatch(addCoffeeItemToCartAction(coffeeItem))
  }

  function removeCoffeeItemFromCart(coffeeItem: CoffeeItem) {
    dispatch(removeCoffeeItemFromCartAction(coffeeItem))
  }

  function incrementCoffeeItemQuantity(coffeeId: string) {
    dispatch(incrementCoffeeItemQuantityAction(coffeeId))
  }

  function decrementCoffeeItemQuantity(coffeeId: string) {
    dispatch(decrementCoffeeItemQuantityAction(coffeeId))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeState)

    localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_NAME, stateJSON)
  }, [coffeeState])

  return (
    <CoffeeContext.Provider
      value={{
        coffeeItems,
        coffeeItemsCart,
        addCoffeeItemToCart,
        removeCoffeeItemFromCart,
        incrementCoffeeItemQuantity,
        decrementCoffeeItemQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
