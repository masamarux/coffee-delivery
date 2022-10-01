import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { SelectQuantityContainer } from './styles'

export function SelectQuantity() {
  const [quantity, setQuantity] = useState(0)

  function handleIncrement() {
    setQuantity((prevState) => prevState + 1)
  }
  function handleDecrement() {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1)
    }
  }
  return (
    <SelectQuantityContainer>
      <button onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </button>
    </SelectQuantityContainer>
  )
}
