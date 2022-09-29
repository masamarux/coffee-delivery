import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.75rem;
  }
`

export const LocationContainer = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-500']};
  padding: 0.5rem;
  border-radius: 8px;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-400']};
  }
`
