import { ShoppingCart, MapPin } from 'phosphor-react'

import { Button } from '../Button'

import {
  HeaderContainer,
  LocationContainer,
  CartQuantity,
  ButtonContainer,
} from './styles'
import logoImg from '../../assets/logo-img.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { coffeeItemsCart } = useContext(CoffeeContext)
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

        <ButtonContainer>
          <Button variant="secondary-light" onClick={handleNavigateToCheckout}>
            {coffeeItemsCart && coffeeItemsCart.length > 0 && (
              <CartQuantity>{coffeeItemsCart.length}</CartQuantity>
            )}

            <ShoppingCart size={24} weight="fill" />
          </Button>
        </ButtonContainer>
      </div>
    </HeaderContainer>
  )
}
