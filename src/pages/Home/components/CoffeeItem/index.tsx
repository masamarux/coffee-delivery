import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'

import { Button } from '../../../../components/Button'
import {
  CoffeeContext,
  CoffeeItem as CoffeeItemInterface,
} from '../../../../contexts/CoffeeContext'
import { SelectQuantity } from '../SelectQuantity'
import {
  CoffeeItemContainer,
  BadgesContainer,
  Badge,
  CoffeeItemTitle,
  CoffeeItemDescription,
  FooterButtonsContainer,
} from './styles'

interface CoffeeItemProps {
  item: CoffeeItemInterface
}

export function CoffeeItem({ item }: CoffeeItemProps) {
  const { title, description, price, badges, alt, imgSrc } = item
  const { addCoffeeItemToCart } = useContext(CoffeeContext)
  const [itemQuantity, setItemQuantity] = useState(0)

  function handleAddCoffeeItemToCart() {
    if (itemQuantity > 0)
      addCoffeeItemToCart({
        ...item,
        quantity: itemQuantity,
      })
  }

  function handleIncrement() {
    setItemQuantity((prevState) => prevState + 1)
  }

  function handleDecrement() {
    if (itemQuantity > 0) {
      setItemQuantity((prevState) => prevState - 1)
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
            <SelectQuantity
              quantity={itemQuantity}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
            <Button variant="primary-dark" onClick={handleAddCoffeeItemToCart}>
              <ShoppingCart weight="fill" size={22} />
            </Button>
          </div>
        </FooterButtonsContainer>
      </div>
    </CoffeeItemContainer>
  )
}
