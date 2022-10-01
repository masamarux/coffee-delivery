import { createContext, ReactNode, useReducer, useState } from 'react'

interface CoffeeItem {
  imgSrc: string
  alt: string
  title: string
  description: string
  price: number
  badges: string[]
  quantity: number
}

interface CoffeeContextType {
  coffeeItems: CoffeeItem[]
  coffeeItemsCart: CoffeeItem[]
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeItems, dispatch] = useReducer(
    (state: CoffeeItem[], action: any) => {
      return state
    },
    [],
  )

  const coffeeItemsCart: CoffeeItem[] = coffeeItems.filter(
    (coffeeItem) => coffeeItem.quantity > 0,
  )

  // function increaseCoffeeQuantity

  return (
    <CoffeeContext.Provider
      value={{
        coffeeItems,
        coffeeItemsCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
