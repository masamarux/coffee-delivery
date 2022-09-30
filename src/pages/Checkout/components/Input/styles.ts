import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  input {
    border: 0;
    background-color: transparent;
  }
`
