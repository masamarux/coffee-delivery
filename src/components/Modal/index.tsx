import * as Dialog from '@radix-ui/react-dialog'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Input } from '../../pages/Checkout/components/Input'
import { getCEP } from '../../services/ViaCEP'

import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalClose,
  ModalEnterCity,
} from './styles'

export function Modal() {
  const [cep, setCep] = useState('')
  const { changeAddress, changeModalOpen, address } = useContext(CoffeeContext)

  async function handleConfirmButton() {
    const cepData = await getCEP(cep)

    const address = {
      city: cepData.localidade,
      state: cepData.uf,
    }

    changeAddress(address)
    changeModalOpen(false)
  }

  async function handleCloseButton() {
    const address = {
      city: '',
      state: '',
    }

    if (address.city.length > 0) changeAddress(address)

    changeModalOpen(false)
  }

  return (
    <Dialog.Portal>
      <ModalOverlay />
      <ModalContent>
        <ModalTitle>Por favor, informe seu cep abaixo</ModalTitle>
        <ModalDescription>
          <Input
            isCepMask
            inputSize="100%"
            required
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </ModalDescription>
        <footer>
          <ModalClose onClick={handleCloseButton}>Fechar</ModalClose>
          <ModalEnterCity onClick={handleConfirmButton}>
            Confirmar
          </ModalEnterCity>
        </footer>
      </ModalContent>
    </Dialog.Portal>
  )
}
