import type { DynamicIconImports } from "@/components/icon"
// Tipos definem a FORMA dos dados
// É como um molde para cookies - todos seguem o mesmo formato

export interface MenuItem {
  id: string
  label: string
}

export interface Section extends MenuItem {
  // Section herda id e label de MenuItem
  // "extends" significa que Section tem tudo que MenuItem tem, MAIS o content
  content: string
}

export interface Profile {
  name: string
  role: string
  description: string
  photo: string
  initials: string
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
}



export interface SocialMedia {
    name: string
    href: string
    icon: string
}