import styled, { css } from 'styled-components'

interface InputContainerProps {
  inputSize: string
  optional?: boolean
  hasValue?: boolean
  hasErrors?: boolean
}

export const InputContainer = styled.label<InputContainerProps>`
  position: relative;
  display: block;
  box-sizing: border-box;

  input {
    position: relative;
    display: block;
    box-sizing: border-box;
    flex: 1;
    width: ${(props) => props.inputSize};
    padding: 0.75rem;
    background-color: ${(props) => props.theme['gray-300']};

    border: 1px solid
      ${(props) =>
        props.hasErrors ? props.theme['red-400'] : props.theme['gray-400']};
    border-radius: 4px;
    color: ${(props) => props.theme['gray-700']};

    &::-webkit-input-placeholder {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['gray-600']};
    }

    &:-ms-input-placeholder {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['gray-600']};
    }

    &::placeholder {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['gray-600']};
    }
  }

  ${(props) =>
    props.optional &&
    css`
      &::after {
        content: ${!props.hasValue && css`'' attr(data-domain)`};
        position: absolute;
        top: 1rem;
        right: calc(0px + 0.75rem);
        display: flex;

        font-weight: 400;
        font-size: 0.75rem;
        font-style: italic;
        color: ${(props) => props.theme['gray-600']};
      }
    `}/* display: flex;
  align-items: center;
  box-sizing: content-box;



  

  input {
    
  } */
`

export const InputOptionalText = styled.span``
