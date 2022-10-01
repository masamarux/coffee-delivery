import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import { Input } from './components/Input'
import { Button } from '../../components/Button'
import { FormHeader } from './components/FormHeader'
import { CoffeeSelectedItem } from './components/CoffeeSelectedItem'

import {
  CheckoutFormContainer,
  CoffeeSelectedItemsContainer,
  FormAddressContainer,
  FormPaymentContainer,
  ToggleGroupRoot,
  ToggleGroupItem,
  InputsContainer,
  FormTitle,
  ItemValuesContainer,
  ItemTotalContainer,
  ButtonConfirmContainer,
  Hr,
} from './styles'

import coffeeImg from '../../assets/coffee/arabe.png'
import { useState } from 'react'

export function Checkout() {
  const [test, setTest] = useState('')
  return (
    <CheckoutFormContainer>
      <div>
        <FormTitle>Complete seu pedido</FormTitle>
        <FormAddressContainer>
          <FormHeader
            iconColorVariant="yellow"
            icon={<MapPinLine size={22} />}
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
          />
          <InputsContainer>
            <Input inputSize="12.5rem" type="text" placeholder="CEP" required />
            <Input inputSize="100%" type="text" placeholder="Rua" required />
            <div>
              <Input
                inputSize="12.5rem"
                type="text"
                placeholder="Número"
                required
              />
              <Input
                value={test}
                onChange={(e) => setTest(e.target.value)}
                inputSize="21.75rem"
                type="text"
                placeholder="Complemento"
              />
            </div>
            <div>
              <Input
                inputSize="12.5rem"
                type="text"
                placeholder="Bairro"
                required
              />
              <Input
                inputSize="17.25rem"
                type="text"
                placeholder="Cidade"
                required
              />
              <Input
                inputSize="3.75rem"
                type="text"
                placeholder="UF"
                required
              />
            </div>
          </InputsContainer>
        </FormAddressContainer>
        <FormPaymentContainer>
          <FormHeader
            icon={<CurrencyDollar size={22} />}
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />
          <ToggleGroupRoot type="single">
            <ToggleGroupItem value="credit">
              <CreditCard size={22} />
              CARTÃO DE CRÉDITO
            </ToggleGroupItem>
            <ToggleGroupItem value="debit">
              <Bank size={22} />
              CARTÃO DE DÉBITO
            </ToggleGroupItem>
            <ToggleGroupItem value="money">
              <Money size={22} />
              DINHEIRO
            </ToggleGroupItem>
          </ToggleGroupRoot>
        </FormPaymentContainer>
      </div>
      <div>
        <FormTitle>Cafés selecionados</FormTitle>
        <CoffeeSelectedItemsContainer>
          <CoffeeSelectedItem
            imgSrc={coffeeImg}
            title="Árabe"
            price={9.9}
            alt="Um café"
          />

          <Hr decorative orientation="horizontal" />
          <CoffeeSelectedItem
            imgSrc={coffeeImg}
            title="Árabe"
            price={9.9}
            alt="Um café"
          />

          <Hr decorative orientation="horizontal" />

          <div>
            <ItemValuesContainer>
              Total de itens <span>R$ 29,70</span>
            </ItemValuesContainer>
            <ItemValuesContainer>
              Entrega <span>R$ 3,50</span>
            </ItemValuesContainer>
            <ItemTotalContainer>
              <span>Total</span> <span>R$ 33,20</span>
            </ItemTotalContainer>
            <ButtonConfirmContainer>
              <Button type="submit" variant="secondary-dark">
                Finalizar Pedido
              </Button>
            </ButtonConfirmContainer>
          </div>
        </CoffeeSelectedItemsContainer>
      </div>
    </CheckoutFormContainer>
  )
}
