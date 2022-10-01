import styled from 'styled-components'

export const SelectQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  & > span {
    text-align: center;
    width: 20px;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${(props) => props.theme['purple-400']};
    }

    &:hover {
      svg {
        color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
