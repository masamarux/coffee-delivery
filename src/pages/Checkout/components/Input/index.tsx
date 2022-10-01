import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize: string
}

export function Input({ inputSize, required, value, ...rest }: InputProps) {
  console.log(value)
  return (
    <InputContainer
      inputSize={inputSize}
      optional={!required}
      data-domain={!value ? 'Opcional' : ''}
    >
      <input {...rest} />
    </InputContainer>
  )
}
