import styled from 'styled-components'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { darken } from 'polished'

export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-direction: row;
`

export const FormAddressContainer = styled.div`
  padding: 2.5rem;
  width: 40rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
`

export const InputsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`

export const FormPaymentContainer = styled.div``

export const CoffeeSelectedItemsContainer = styled.div``

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  display: flex;
  gap: 0.75rem;
  width: 100%;
`

export const ToggleGroupItem = styled(ToggleGroup.Item)`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  width: 33%;

  font-size: 0.75rem;
  line-height: 1.6;
  font-weight: 400;

  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-700']};
  svg {
    color: ${(props) => props.theme['purple-400']};
  }

  transition: background-color 0.2s, color 0.2s;

  &[data-state='on'] {
    background-color: ${(props) => props.theme['purple-300']};
    color: ${(props) => props.theme['gray-700']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-800']};
  }

  &[data-state='on']:hover {
    background-color: ${(props) => darken(0.1, props.theme['purple-300'])};
    color: ${(props) => props.theme['gray-800']};
  }
`
