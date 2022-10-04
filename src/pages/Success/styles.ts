import styled, { css } from 'styled-components'

export const SuccessContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-500']};
    margin-bottom: 0.25rem;
  }

  & > span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-800']};
  }

  & > div {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    img {
      margin-bottom: -0.75rem;
    }
  }
`

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => css`
    background: linear-gradient(
          ${props.theme['gray-100']},
          ${props.theme['gray-100']}
        )
        padding-box,
      linear-gradient(
          90deg,
          ${props.theme['yellow-400']},
          ${props.theme['purple-400']}
        )
        border-box;
  `}
  border-radius: 6px 36px;
  border: 1px solid transparent;

  padding: 2.5rem;

  gap: 2rem;
`

const ICON_COLORS = {
  purple: 'purple-400',
  yellow: 'yellow-400',
  orange: 'yellow-500',
} as const

interface DeliveryInfoProps {
  iconColor: keyof typeof ICON_COLORS
}

export const DeliveryInfo = styled.div<DeliveryInfoProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  width: 32.875rem;

  & > svg {
    background-color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
    border-radius: 50%;
    padding: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  & > div {
    display: flex;
    flex-direction: column;

    span {
      color: ${(props) => props.theme['gray-700']};
    }
  }
`
