import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: #000;
  opacity: 0.5;
`

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 40rem;
  background-color: white;
  border: none;
  border-radius: 8px;
  padding: 2rem;

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ModalTitle = styled(Dialog.Title)``

export const ModalDescription = styled(Dialog.Description)`
  margin: 2rem 0;

  & > label {
    margin-bottom: 1rem;
  }
`

export const ModalEnterCity = styled(Dialog.Close)`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 3rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['purple-400']};
  color: ${(props) => props.theme['gray-100']};

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`

export const ModalClose = styled(Dialog.Close)`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['gray-100']};

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['gray-700']};
  }
`
