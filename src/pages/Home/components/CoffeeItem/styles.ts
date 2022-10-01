import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(16rem - 3rem);
  padding: 1.5rem;
  text-align: center;

  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem 2.25rem;

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin-top: calc(0px - 2.5rem);
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 13.5rem;
  }
`

export const BadgesContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

export const Badge = styled.span`
  display: flex;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-500']};

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const CoffeeItemTitle = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-800']};
`

export const CoffeeItemDescription = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme['gray-600']};
`

export const FooterButtonsContainer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: ${(props) => props.theme['gray-700']};
    font-size: 1.5rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    span {
      font-size: 0.875rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
  }
`
