import { ShoppingCart } from 'phosphor-react'

import { Button } from '../../../../components/Button'
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
            <SelectQuantity />
            <Button variant="primary-dark">
              <ShoppingCart weight="fill" size={22} />
            </Button>
          </div>
        </FooterButtonsContainer>
      </div>
    </CoffeeItemContainer>
  )
}
