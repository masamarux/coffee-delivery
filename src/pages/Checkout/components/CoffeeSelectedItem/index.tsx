import { Trash } from 'phosphor-react'
import { Button } from '../../../../components/Button'
import { SelectQuantity } from '../../../Home/components/SelectQuantity'
import { CoffeeSelectedItemContainer, CoffeeSelectedItemLeft } from './styles'

interface CoffeeSelectedItemProps {
  imgSrc: string
  title: string
  price: number
  alt: string
}

export function CoffeeSelectedItem({
  imgSrc,
  alt,
  title,
  price,
}: CoffeeSelectedItemProps) {
  return (
    <CoffeeSelectedItemContainer>
      <CoffeeSelectedItemLeft>
        <img src={imgSrc} alt={alt} />
        <div>
          <span>{title}</span>
          <div>
            <SelectQuantity />
            <Button variant="gray" hasPurpleIcon>
              <Trash size={16} />
              Remover
            </Button>
          </div>
        </div>
      </CoffeeSelectedItemLeft>

      <span>
        R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>
    </CoffeeSelectedItemContainer>
  )
}
