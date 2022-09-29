import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?:
    | 'primary-dark'
    | 'primary-light'
    | 'secondary-dark'
    | 'secondary-light'
}

export function Button({
  children,
  variant = 'primary-dark',
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}
