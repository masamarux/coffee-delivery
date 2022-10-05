import styled from 'styled-components'
import { shade } from 'polished'
import * as Dialog from '@radix-ui/react-dialog'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  & > button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.75rem;
  }
`

export const ButtonContainer = styled.div`
  position: relative;
`

export const CartQuantity = styled.div`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-500']};
  border-radius: 50%;
  line-height: 0;
  height: 1.25rem;
  width: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
`

export const DialogRoot = styled(Dialog.Root)``

export const DialogTrigger = styled(Dialog.Trigger)`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-500']};
  padding: 0.5rem;
  border-radius: 8px;
  gap: 0.5rem;
  border: 0;

  svg {
    color: ${(props) => props.theme['purple-400']};
  }

  &:hover {
    background-color: ${(props) => shade(0.1, props.theme['purple-300'])};
    color: ${(props) => props.theme['purple-500']};
  }
`
