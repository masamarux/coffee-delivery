import { useContext, useEffect } from 'react'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Input } from './components/Input'
import { Button } from '../../components/Button'
import { FormHeader } from './components/FormHeader'
import { CoffeeSelectedItem } from './components/CoffeeSelectedItem'
import { CoffeeContext } from '../../contexts/CoffeeContext'

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

import { getCEP } from '../../services/ViaCEP'

type FieldValues = {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string

  paymentMethod: 'credit' | 'debit' | 'money'
}

const paymentFormSchema = zod.object({
  cep: zod.string().min(9).max(9),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(1),
  paymentMethod: zod.string(),
})

export function Checkout() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'credit',
    },
  })
  const { coffeeItemsCart, removeAllCoffeeItemFromCart } =
    useContext(CoffeeContext)
  const navigate = useNavigate()

  const totalPriceCoffeeItemsCart = coffeeItemsCart
    ? coffeeItemsCart.reduce((acc, coffeeItemCart) => {
        return acc + coffeeItemCart.price * coffeeItemCart.quantity
      }, 0)
    : 0
  const fretePrice = 3.5

  const complemento = watch('complement')
  const complementoHasValue = !!complemento

  const cep = watch('cep')

  const handleCreatePayment: SubmitHandler<FieldValues> = (data) => {
    removeAllCoffeeItemFromCart()

    navigate('/success', {
      state: {
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,

        paymentMethod: data.paymentMethod,
      },
    })

    reset()
  }

  useEffect(() => {
    if (cep) {
      const handleGetCEP = async () => {
        const cepData = await getCEP(cep)

        setValue('street', cepData.logradouro)
        setValue('city', cepData.localidade)
        setValue('state', cepData.uf)
        setValue('neighborhood', cepData.bairro)
      }

      if (cep.length === 9) {
        handleGetCEP()
      }
    }
  }, [cep, setValue])

  return (
    <CheckoutFormContainer onSubmit={handleSubmit(handleCreatePayment)}>
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
            <Input
              inputSize="12.5rem"
              type="text"
              placeholder="CEP"
              required
              hasErrors={!!errors.cep}
              {...register('cep')}
            />
            <Input
              inputSize="100%"
              type="text"
              placeholder="Rua"
              required
              hasErrors={!!errors.street}
              {...register('street')}
            />
            <div>
              <Input
                inputSize="12.5rem"
                type="text"
                placeholder="Número"
                required
                hasErrors={!!errors.number}
                {...register('number')}
              />
              <Input
                inputSize="21.75rem"
                type="text"
                placeholder="Complemento"
                hasValue={complementoHasValue}
                {...register('complement')}
              />
            </div>
            <div>
              <Input
                inputSize="12.5rem"
                type="text"
                placeholder="Bairro"
                required
                hasErrors={!!errors.neighborhood}
                {...register('neighborhood')}
              />
              <Input
                inputSize="17.25rem"
                type="text"
                placeholder="Cidade"
                required
                hasErrors={!!errors.city}
                {...register('city')}
              />
              <Input
                inputSize="3.75rem"
                type="text"
                placeholder="UF"
                required
                hasErrors={!!errors.state}
                {...register('state')}
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
          <Controller
            name="paymentMethod"
            defaultValue="credit"
            control={control}
            render={({ field: { value, onBlur, onChange, ref } }) => (
              <ToggleGroupRoot
                type="single"
                defaultValue="credit"
                value={value}
                onBlur={onBlur}
                onValueChange={onChange}
                ref={ref}
              >
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
            )}
          />
        </FormPaymentContainer>
      </div>
      <div>
        <FormTitle>Cafés selecionados</FormTitle>
        <CoffeeSelectedItemsContainer>
          {coffeeItemsCart &&
            coffeeItemsCart.map((coffeeItem) => (
              <div key={coffeeItem.id}>
                <CoffeeSelectedItem item={coffeeItem} />

                <Hr decorative orientation="horizontal" />
              </div>
            ))}

          <div>
            <ItemValuesContainer>
              Total de itens{' '}
              <span>
                R${' '}
                {totalPriceCoffeeItemsCart.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </ItemValuesContainer>
            <ItemValuesContainer>
              Entrega{' '}
              <span>
                R${' '}
                {fretePrice.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </ItemValuesContainer>
            <ItemTotalContainer>
              <span>Total</span>{' '}
              <span>
                R${' '}
                {(totalPriceCoffeeItemsCart + fretePrice).toLocaleString(
                  'pt-BR',
                  {
                    minimumFractionDigits: 2,
                  },
                )}
              </span>
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
