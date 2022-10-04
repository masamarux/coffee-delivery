import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 10rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-500']};
    text-shadow: 0.25rem 0.25rem 1px ${(props) => props.theme['purple-500']};
  }

  & > div {
    text-align: center;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-800']};

    margin-bottom: 2rem;
  }
`
