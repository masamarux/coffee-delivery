import React, { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize: string
  hasValue?: boolean
  hasErrors?: boolean
}

export type Ref = HTMLInputElement

export const Input = React.forwardRef<Ref, InputProps>(function Input(
  props,
  ref,
) {
  const { inputSize, required, hasValue, hasErrors, ...rest } = props

  return (
    <InputContainer
      inputSize={inputSize}
      optional={!required}
      hasErrors={hasErrors}
      data-domain={!hasValue ? 'Opcional' : ''}
    >
      <input ref={ref} {...rest} />
    </InputContainer>
  )
})
