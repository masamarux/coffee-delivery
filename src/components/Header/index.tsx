import { ShoppingCart, MapPin } from 'phosphor-react'

import { Button } from '../Button'

import { HeaderContainer, LocationContainer } from './styles'
import logoImg from '../../assets/logo-img.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoImg}
        alt="Logo do site com um copo de café e um foguete por dentro"
      />
      <div>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          Marechal Deodoro, AL
        </LocationContainer>

        <Button variant="secondary-light">
          <ShoppingCart size={24} weight="fill" />
        </Button>
      </div>
    </HeaderContainer>
  )
}
