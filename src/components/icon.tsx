"use client"

import type { LucideProps } from "lucide-react"
import { DynamicIcon, type IconName } from "lucide-react/dynamic"

interface IconProps extends LucideProps {
  name: IconName
}

export const Icon = ({ name, ...props }: IconProps) => (
  <DynamicIcon name={name} {...props} />
)
