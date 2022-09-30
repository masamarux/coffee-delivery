import { ReactNode } from 'react'

import {
  FormHeaderContainer,
  FormHeaderTitle,
  FormHeaderDescription,
} from './styles'

interface FormHeaderProps {
  icon: ReactNode
  iconColorVariant?: 'purple' | 'yellow'
  title: string
  description: string
}

export function FormHeader({
  icon,
  title,
  description,
  iconColorVariant = 'purple',
}: FormHeaderProps) {
  return (
    <FormHeaderContainer iconVariant={iconColorVariant}>
      {icon}
      <div>
        <FormHeaderTitle>{title}</FormHeaderTitle>
        <FormHeaderDescription>{description}</FormHeaderDescription>
      </div>
    </FormHeaderContainer>
  )
}
