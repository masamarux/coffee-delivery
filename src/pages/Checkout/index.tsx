import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import { Input } from './components/Input'

import {
  CheckoutFormContainer,
  CoffeeSelectedItemsContainer,
  FormAddressContainer,
  FormPaymentContainer,
  ToggleGroupRoot,
  ToggleGroupItem,
  InputsContainer,
} from './styles'
import { FormHeader } from './components/FormHeader'

export function Checkout() {
  return (
    <CheckoutFormContainer>
      <div>
        <label>Complete seu pedido</label>
        <FormAddressContainer>
          <FormHeader
            iconColorVariant="yellow"
            icon={<MapPinLine size={22} />}
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
          />
          <InputsContainer>
            <Input type="text" placeholder="CEP" required />
            <Input type="text" placeholder="Rua" required />
            <div>
              <Input type="text" placeholder="Número" required />
              <Input type="text" placeholder="Complemento" required />
            </div>
            <div>
              <Input type="text" placeholder="Bairro" required />
              <Input type="text" placeholder="Cidade" required />
              <Input type="text" placeholder="UF" required />
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
      <label>Cafés selecionados</label>
      <CoffeeSelectedItemsContainer></CoffeeSelectedItemsContainer>
    </CheckoutFormContainer>
  )
}
