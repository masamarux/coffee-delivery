import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useState } from 'react'

import { Button } from '../../../../components/Button'
import {
  CoffeeItemContainer,
  BadgesContainer,
  Badge,
  CoffeeItemTitle,
  CoffeeItemDescription,
  FooterButtonsContainer,
} from './styles'

interface CoffeeItemProps {
  imgSrc: string
  alt: string
  title: string
  description: string
  price: number
  badges?: string[]
}

export function CoffeeItem({
  imgSrc,
  alt,
  title,
  description,
  price,
  badges,
}: CoffeeItemProps) {
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
    <CoffeeItemContainer>
      <img src={imgSrc} alt={alt} />
      <div>
        {badges && (
          <BadgesContainer>
            {badges.map((badge, index) => (
              <Badge key={`${new Date().getTime()}.${badge}-${index}`}>
                {badge.toUpperCase()}
              </Badge>
            ))}
          </BadgesContainer>
        )}

        <CoffeeItemTitle>{title}</CoffeeItemTitle>
        <CoffeeItemDescription>{description}</CoffeeItemDescription>

        <FooterButtonsContainer>
          <span>
            <span>R$</span>{' '}
            {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
          <div>
            <div>
              <button onClick={handleDecrement}>
                <Minus size={14} weight="bold" />
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>
                <Plus size={14} weight="bold" />
              </button>
            </div>
            <Button variant="primary-dark">
              <ShoppingCart weight="fill" size={22} />
            </Button>
          </div>
        </FooterButtonsContainer>
      </div>
    </CoffeeItemContainer>
  )
}
