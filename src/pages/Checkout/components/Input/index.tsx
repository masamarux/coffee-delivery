import React, { InputHTMLAttributes } from 'react'
import { IMaskInput } from 'react-imask'

import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize: string
  hasValue?: boolean
  hasErrors?: boolean
  isCepMask?: boolean
}

export type Ref = HTMLInputElement

export const Input = React.forwardRef<Ref, InputProps>(function Input(
  props,
  ref,
) {
  const { inputSize, required, hasValue, hasErrors, isCepMask, ...rest } = props

  return (
    <InputContainer
      inputSize={inputSize}
      optional={!required}
      hasErrors={hasErrors}
      data-domain={!hasValue ? 'Opcional' : ''}
    >
      {isCepMask ? (
        <IMaskInput
          mask="00000-000"
          unmask={true}
          ref={ref}
          inputRef={ref}
          {...rest}
        />
      ) : (
        <input ref={ref} {...rest} />
      )}
    </InputContainer>
  )
})
