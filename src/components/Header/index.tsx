import { ShoppingCart, MapPin } from 'phosphor-react'

import { Button } from '../Button'

import { HeaderContainer, LocationContainer } from './styles'
import logoImg from '../../assets/logo-img.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  function handleNavigateToCheckout() {
    navigate('/checkout')
  }

  function handleNavigateToHome() {
    navigate('/')
  }

  return (
    <HeaderContainer>
      <button onClick={handleNavigateToHome}>
        <img
          src={logoImg}
          alt="Logo do site com um copo de café e um foguete por dentro"
        />
      </button>

      <div>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          Marechal Deodoro, AL
        </LocationContainer>

        <Button variant="secondary-light" onClick={handleNavigateToCheckout}>
          <ShoppingCart size={24} weight="fill" />
        </Button>
      </div>
    </HeaderContainer>
  )
}
