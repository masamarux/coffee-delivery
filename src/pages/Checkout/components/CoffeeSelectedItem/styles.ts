import styled from 'styled-components'

export const CoffeeSelectedItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  img {
    height: 4rem;
    width: 4rem;
  }

  & > span {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const CoffeeSelectedItemLeft = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;

  & > span {
    color: ${(props) => props.theme['gray-800']};
  }

  & > div {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
  }

  gap: 1.25rem;
`
