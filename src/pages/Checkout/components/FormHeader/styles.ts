import { Package } from 'phosphor-react'
import styled from 'styled-components'

const ICON_VARIANT = {
  purple: 'purple-400',
  yellow: 'yellow-500',
} as const

interface ButtonContainerProps {
  iconVariant: keyof typeof ICON_VARIANT
}

export const FormHeaderContainer = styled.div<ButtonContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme[ICON_VARIANT[props.iconVariant]]};
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

export const FormHeaderTitle = styled.span`
  color: ${(props) => props.theme['gray-800']};
  font-weight: 400;
  font-size: 1rem;
`

export const FormHeaderDescription = styled.span`
  color: ${(props) => props.theme['gray-700']};
  font-weight: 400;
  font-size: 0.875rem;
`
