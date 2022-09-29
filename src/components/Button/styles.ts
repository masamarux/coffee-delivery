import styled from 'styled-components'

const BUTTON_VARIANT = {
  'primary-dark': ['purple-400', 'white', 'white', 'white'],
  'primary-light': ['purple-300', 'white', 'white', 'white'],
  'secondary-dark': ['yellow-400', 'white', 'white', 'white'],
  'secondary-light': ['yellow-300', 'yellow-500', 'yellow-400', 'yellow-300'],
} as const

interface ButtonContainerProps {
  variant: keyof typeof BUTTON_VARIANT
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme[BUTTON_VARIANT[props.variant][0]]};
  color: ${(props) => props.theme[BUTTON_VARIANT[props.variant][1]]};

  &:hover {
    background-color: ${(props) =>
      props.theme[BUTTON_VARIANT[props.variant][2]]};
    color: ${(props) => props.theme[BUTTON_VARIANT[props.variant][3]]};
  }
`
