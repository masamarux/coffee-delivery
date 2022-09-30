import styled, { css } from 'styled-components'

const BUTTON_VARIANT = {
  'primary-dark': ['purple-500', 'gray-200', 'purple-400', 'gray-200'],
  'primary-light': ['purple-300', 'white', 'white', 'white'],
  'secondary-dark': ['yellow-400', 'white', 'white', 'white'],
  'secondary-light': ['yellow-300', 'yellow-500', 'yellow-400', 'yellow-300'],
  gray: ['gray-400', 'gray-700', 'gray-500', 'gray-800'],
} as const

interface ButtonContainerProps {
  variant: keyof typeof BUTTON_VARIANT
  hasPurpleIcon: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme[BUTTON_VARIANT[props.variant][0]]};
  color: ${(props) => props.theme[BUTTON_VARIANT[props.variant][1]]};

  ${(props) =>
    props.hasPurpleIcon &&
    css`
      svg {
        color: ${props.theme['purple-400']};
      }
    `}

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.theme[BUTTON_VARIANT[props.variant][2]]};
    color: ${(props) => props.theme[BUTTON_VARIANT[props.variant][3]]};
  }
`
