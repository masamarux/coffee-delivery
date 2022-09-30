import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?:
    | 'primary-dark'
    | 'primary-light'
    | 'secondary-dark'
    | 'secondary-light'
    | 'gray'
  hasPurpleIcon?: boolean
}

export function Button({
  children,
  variant = 'primary-dark',
  hasPurpleIcon = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} hasPurpleIcon={hasPurpleIcon} {...rest}>
      {children}
    </ButtonContainer>
  )
}
