import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { v4 as uuid } from 'uuid'

import { coffees } from '../data/coffees'
import {
  addCoffeeItemToCartAction,
  decrementCoffeeItemQuantityAction,
  incrementCoffeeItemQuantityAction,
  removeCoffeeItemFromCartAction,
  removeAllCoffeeItemFromCartAction,
  changeAddressAction,
  changeModalOpenAction,
} from '../reducers/coffee/actions'
import { CoffeeItem, coffeesReducer, Address } from '../reducers/coffee/reducer'

interface CoffeeContextType {
  coffeeItems: CoffeeItem[]
  coffeeItemsCart: CoffeeItem[] | null
  address?: Address
  modalOpen: boolean
  addCoffeeItemToCart: (coffeeItem: CoffeeItem) => void
  removeCoffeeItemFromCart: (coffeeItem: CoffeeItem) => void
  incrementCoffeeItemQuantity: (coffeeId: string) => void
  decrementCoffeeItemQuantity: (coffeeId: string) => void
  removeAllCoffeeItemFromCart: () => void
  changeAddress: (address: Address) => void
  changeModalOpen: (modalOpen: boolean) => void
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
      address: undefined,
      modalOpen: false,
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
        address: undefined,
        modalOpen: false,
      }
    },
  )

  const { coffeeItems, coffeeItemsCart, address, modalOpen } = coffeeState

  function addCoffeeItemToCart(coffeeItem: CoffeeItem) {
    dispatch(addCoffeeItemToCartAction(coffeeItem))
  }

  function removeCoffeeItemFromCart(coffeeItem: CoffeeItem) {
    dispatch(removeCoffeeItemFromCartAction(coffeeItem))
  }

  function removeAllCoffeeItemFromCart() {
    dispatch(removeAllCoffeeItemFromCartAction())
  }

  function incrementCoffeeItemQuantity(coffeeId: string) {
    dispatch(incrementCoffeeItemQuantityAction(coffeeId))
  }

  function decrementCoffeeItemQuantity(coffeeId: string) {
    dispatch(decrementCoffeeItemQuantityAction(coffeeId))
  }

  function changeAddress(address: Address) {
    dispatch(changeAddressAction(address))
  }

  function changeModalOpen(modalOpen: boolean) {
    dispatch(changeModalOpenAction(modalOpen))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeState)

    localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_NAME, stateJSON)
  }, [coffeeState])

  return (
    <CoffeeContext.Provider
      value={{
        address,
        coffeeItems,
        coffeeItemsCart,
        modalOpen,
        addCoffeeItemToCart,
        removeCoffeeItemFromCart,
        incrementCoffeeItemQuantity,
        decrementCoffeeItemQuantity,
        removeAllCoffeeItemFromCart,
        changeAddress,
        changeModalOpen,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
