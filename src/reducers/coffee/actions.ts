import { Address, CoffeeItem } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  INCREMENT_COFFEE_QUANTITY = 'INCREMENT_COFFEE_QUANTITY',
  DECREMENT_COFFEE_QUANTITY = 'DECREMENT_COFFEE_QUANTITY',
  REMOVE_ALL_COFFEE_FROM_CART = 'REMOVE_ALL_COFFEE_FROM_CART',
  CHANGE_ADDRESS = 'CHANGE_ADDRESS',
  CHANGE_MODAL_OPEN = 'CHANGE_MODAL_OPEN',
}

export function addCoffeeItemToCartAction(coffeeItem: CoffeeItem) {
  return {
    type: 'ADD_COFFEE_TO_CART',
    payload: {
      coffeeItem,
    },
  }
}

export function removeCoffeeItemFromCartAction(coffeeItem: CoffeeItem) {
  return {
    type: 'REMOVE_COFFEE_FROM_CART',
    payload: {
      coffeeItem,
    },
  }
}

export function incrementCoffeeItemQuantityAction(coffeeId: string) {
  return {
    type: 'INCREMENT_COFFEE_QUANTITY',
    payload: {
      coffeeId,
    },
  }
}

export function decrementCoffeeItemQuantityAction(coffeeId: string) {
  return {
    type: 'DECREMENT_COFFEE_QUANTITY',
    payload: {
      coffeeId,
    },
  }
}

export function removeAllCoffeeItemFromCartAction() {
  return {
    type: 'REMOVE_ALL_COFFEE_FROM_CART',
  }
}

export function changeAddressAction(address: Address) {
  return {
    type: 'CHANGE_ADDRESS',
    payload: {
      address,
    },
  }
}

export function changeModalOpenAction(modalOpen: boolean) {
  return {
    type: 'CHANGE_MODAL_OPEN',
    payload: {
      modalOpen,
    },
  }
}
