import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface CoffeeItem {
  id: string
  imgSrc: string
  alt: string
  title: string
  description: string
  price: number
  badges: string[]
  quantity: number
}

export interface Address {
  city: string
  state: string
}

interface CoffeeState {
  coffeeItems: CoffeeItem[]
  coffeeItemsCart: CoffeeItem[] | null
  address?: Address
  modalOpen: boolean
}

export function coffeesReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART:
      return produce(state, (draft) => {
        draft.coffeeItemsCart?.push(action.payload.coffeeItem)
      })

    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
      const index = state.coffeeItemsCart?.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeItem.id
      })

      if (index === undefined || index < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.coffeeItemsCart?.splice(index, 1)
      })
    }

    case ActionTypes.INCREMENT_COFFEE_QUANTITY: {
      const index = state.coffeeItemsCart?.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      if (index === undefined || index < 0) {
        return state
      }

      return produce(state, (draft) => {
        if (draft.coffeeItemsCart !== null) {
          draft.coffeeItemsCart[index].quantity += 1
        }
      })
    }

    case ActionTypes.DECREMENT_COFFEE_QUANTITY: {
      const index = state.coffeeItemsCart?.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      if (index === undefined || index < 0) {
        return state
      }

      return produce(state, (draft) => {
        if (
          draft.coffeeItemsCart !== null &&
          draft.coffeeItemsCart[index].quantity > 1
        ) {
          draft.coffeeItemsCart[index].quantity -= 1
        }
      })
    }

    case ActionTypes.REMOVE_ALL_COFFEE_FROM_CART:
      return produce(state, (draft) => {
        draft.coffeeItemsCart = []
      })

    case ActionTypes.CHANGE_ADDRESS:
      return produce(state, (draft) => {
        draft.address = action.payload.address
      })

    case ActionTypes.CHANGE_MODAL_OPEN:
      return produce(state, (draft) => {
        draft.modalOpen = action.payload.modalOpen
      })

    default:
      return state
  }
}
