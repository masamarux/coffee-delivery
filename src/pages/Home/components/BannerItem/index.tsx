import { ReactNode } from 'react'

import { BannerItemContainer } from './styles'

interface BannerItemProps {
  icon: ReactNode
  title: string
  variant?: 'orange' | 'yellow' | 'purple' | 'gray'
}

export function BannerItem({ icon, title, variant = 'gray' }: BannerItemProps) {
  return (
    <BannerItemContainer variant={variant}>
      <span>{icon}</span>
      {title}
    </BannerItemContainer>
  )
}
