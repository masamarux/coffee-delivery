import styled from 'styled-components'

import bannerImg from '../../assets/banner-background.svg'

export const HomeContainer = styled.div`
  display: flex;
`

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 5.75rem 0;

  gap: 3.5rem;

  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const BannerLeft = styled.div`
  width: 54%;

  & > div {
    display: grid;
    gap: 1.25rem 2.5rem;
    grid-template-columns: 40% 60%;
  }
`

export const BannerTitle = styled.p`
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['gray-900']};

  margin-bottom: 1rem;
`

export const BannerDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['gray-800']};

  margin-bottom: 4.125rem;
`
