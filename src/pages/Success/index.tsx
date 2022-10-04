import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { SuccessContainer, DeliveryContainer, DeliveryInfo } from './styles'

import successImg from '../../assets/success-img.png'

const PAYMENT_METHODS = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
  money: 'Dinheiro',
} as const

type SuccessParams = {
  street: string
  number: string
  neighborhood: string
  city: string
  state: string

  paymentMethod: keyof typeof PAYMENT_METHODS
}

export function Success() {
  const { state: stateParams } = useLocation()
  const { street, number, neighborhood, city, state, paymentMethod } =
    (stateParams as SuccessParams) || ({} as SuccessParams)
  const navigate = useNavigate()

  useEffect(() => {
    if (!stateParams) {
      navigate('/')
    }
  }, [stateParams, navigate])

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <div>
        <DeliveryContainer>
          <DeliveryInfo iconColor="purple">
            <MapPin size={16} weight="fill" />
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {street}, {number}
                </strong>
              </span>
              <span>
                {neighborhood} - {city}, {state}
              </span>
            </div>
          </DeliveryInfo>
          <DeliveryInfo iconColor="yellow">
            <Timer size={16} weight="fill" />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </DeliveryInfo>
          <DeliveryInfo iconColor="orange">
            <CurrencyDollar size={16} />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>
                  {paymentMethod ? PAYMENT_METHODS[paymentMethod] : ''}
                </strong>
              </span>
            </div>
          </DeliveryInfo>
        </DeliveryContainer>

        <img src={successImg} alt="Uma ilustração de um entregador de moto" />
      </div>
    </SuccessContainer>
  )
}
