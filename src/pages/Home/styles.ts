import styled from 'styled-components'

import bannerImg from '../../assets/banner-background.svg'

export const HomeContainer = styled.div`
  display: flex;
`

export const Banner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;

  max-height: 35.475rem;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 5.75rem 0;
  max-width: 70rem;
  margin: 0 auto;

  gap: 3.5rem;

  img {
    height: 22.5rem;
    width: 29.75rem;
  }
`

export const BannerLeft = styled.div`
  width: 54%;

  & > div {
    display: grid;
    gap: 1.25rem 2.5rem;
    grid-template-columns: 40% 60%;
  }
`

export const BannerTitle = styled.span`
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Baloo 2', cursive;
  display: block;
  color: ${(props) => props.theme['gray-900']};

  margin-bottom: 1rem;
`

export const BannerDescription = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  display: block;
  color: ${(props) => props.theme['gray-800']};

  margin-bottom: 4.125rem;
`

export const CoffeeContainer = styled.div`
  padding-top: 2rem;
  h2 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['gray-800']};
    font-size: 2rem;
    font-weight: 800;
  }
`

export const CoffeeItemsContainer = styled.div`
  padding-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;
`
