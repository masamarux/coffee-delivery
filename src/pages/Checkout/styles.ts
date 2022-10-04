import styled from 'styled-components'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { darken } from 'polished'

export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  box-sizing: content-box;

  & > div:first-of-type {
    width: 40rem;
  }

  & > div:last-of-type {
    width: 100%;
  }
`

export const FormAddressContainer = styled.div`
  margin-top: 0.9375rem;
  padding: 2.5rem;
  flex: 1;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
`

export const FormTitle = styled.label`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.125rem;
`

export const InputsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }

  & > label {
    margin-bottom: 1rem;
  }

  & > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const FormPaymentContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
`

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  margin-top: 2rem;
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

  padding: 1rem 0.875rem;
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

export const CoffeeSelectedItemsContainer = styled.div`
  margin-top: 0.9375rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 2.75rem;

  hr {
    margin: 1.5rem 0;
  }
`

export const Hr = styled(SeparatorPrimitive.Root)`
  &[data-orientation='horizontal'] {
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme['gray-400']};
    margin: 1.5rem 0;
  }
`

export const ItemValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  span {
    font-size: 1rem;
  }
`

export const ItemTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.75rem;

  span {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ButtonConfirmContainer = styled.div`
  display: flex;

  button {
    width: 100%;
  }
`
