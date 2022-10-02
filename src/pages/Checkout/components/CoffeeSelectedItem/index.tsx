import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'

import { Button } from '../../../../components/Button'
import { SelectQuantity } from '../../../Home/components/SelectQuantity'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { CoffeeItem as CoffeeItemInterface } from '../../../../reducers/coffee/reducer'

import { CoffeeSelectedItemContainer, CoffeeSelectedItemLeft } from './styles'

interface CoffeeSelectedItemProps {
  item: CoffeeItemInterface
}

export function CoffeeSelectedItem({ item }: CoffeeSelectedItemProps) {
  const {
    removeCoffeeItemFromCart,
    incrementCoffeeItemQuantity,
    decrementCoffeeItemQuantity,
  } = useContext(CoffeeContext)
  const { title, price, alt, imgSrc, quantity } = item

  function handleIncrement() {
    incrementCoffeeItemQuantity(item.id)
  }

  function handleDecrement() {
    decrementCoffeeItemQuantity(item.id)
  }

  function handleRemoveItemFromCart() {
    removeCoffeeItemFromCart(item)
  }

  return (
    <CoffeeSelectedItemContainer>
      <CoffeeSelectedItemLeft>
        <img src={imgSrc} alt={alt} />
        <div>
          <span>{title}</span>
          <div>
            <SelectQuantity
              quantity={quantity}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
            <Button
              type="button"
              variant="gray"
              hasPurpleIcon
              onClick={handleRemoveItemFromCart}
            >
              <Trash size={16} />
              Remover
            </Button>
          </div>
        </div>
      </CoffeeSelectedItemLeft>

      <span>
        R${' '}
        {price &&
          (price * quantity).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}
      </span>
    </CoffeeSelectedItemContainer>
  )
}
