import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { SelectQuantityContainer } from './styles'

interface SelectQuantityProps {
  quantity: number
  handleIncrement: () => void
  handleDecrement: () => void
}

export function SelectQuantity({
  handleIncrement,
  handleDecrement,
  quantity,
}: SelectQuantityProps) {
  return (
    <SelectQuantityContainer>
      <button type="button" onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </button>
    </SelectQuantityContainer>
  )
}
