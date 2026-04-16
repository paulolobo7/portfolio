import { IconType } from "react-icons"

export interface MenuItem {
  id: string
  label: string
}

export interface Profile {
  name: string
  role: string
  description: string
  photo: string
}

export interface Education {
    id: number
    institution: string
    curso: string
    date: string
    description: string
}

export interface Experience {
    id: number
    empresa: string
    cargo: string
    date: string
    description: string
    skills: string[]
}

export interface Projects {
    id: number
    title: string
    description: string
    skills: string[]
    link?: string
    github?: string
    iframeUrl?: string
    img?: string
}

export interface SocialMedia {
    name: string
    href: string
    icon: IconType
}