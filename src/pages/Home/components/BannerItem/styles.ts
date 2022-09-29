import styled from 'styled-components'

const SVG_BACKGROUND = {
  orange: 'yellow-500',
  yellow: 'yellow-400',
  purple: 'purple-500',
  gray: 'gray-700',
} as const

interface BannerItemContainerProps {
  variant: keyof typeof SVG_BACKGROUND
}

export const BannerItemContainer = styled.div<BannerItemContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[SVG_BACKGROUND[props.variant]]};
    color: ${(props) => props.theme['gray-100']};
  }
`
