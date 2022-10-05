import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { Modal } from '../Modal'
import { Button } from '../Button'

import {
  HeaderContainer,
  CartQuantity,
  ButtonContainer,
  DialogRoot,
  DialogTrigger,
} from './styles'
import logoImg from '../../assets/logo-img.svg'

export function Header() {
  const { coffeeItemsCart, address, modalOpen, changeModalOpen } =
    useContext(CoffeeContext)
  const navigate = useNavigate()

  function handleNavigateToCheckout() {
    navigate('/checkout')
  }

  function handleNavigateToHome() {
    navigate('/')
  }

  useEffect(() => {
    if (address === undefined) {
      changeModalOpen(true)
    }
  }, [changeModalOpen, address])

  return (
    <>
      <HeaderContainer>
        <button onClick={handleNavigateToHome}>
          <img
            src={logoImg}
            alt="Logo do site com um copo de café e um foguete por dentro"
          />
        </button>

        <div>
          <DialogRoot open={modalOpen} onOpenChange={changeModalOpen}>
            <DialogTrigger>
              <MapPin size={24} weight="fill" />
              {address?.city !== '' &&
                address?.city !== undefined &&
                `${address?.city}, ${address?.state}`}
            </DialogTrigger>
            <Modal />
          </DialogRoot>

          <ButtonContainer>
            <Button
              variant="secondary-light"
              onClick={handleNavigateToCheckout}
            >
              {coffeeItemsCart && coffeeItemsCart.length > 0 && (
                <CartQuantity>{coffeeItemsCart.length}</CartQuantity>
              )}

              <ShoppingCart size={24} weight="fill" />
            </Button>
          </ButtonContainer>
        </div>
      </HeaderContainer>
    </>
  )
}
