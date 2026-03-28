import type { Profile, MenuItem, Section } from "./types"

export const profile: Profile = {
    name: "Paulo Lobo",
    role: "Desenvolvedor Frontend",
    description: "Descrição do perfil",
    photo: "/paulo.png",
    initials: "PL",
}

// Menu items - itens que aparecem no sidebar
export const menuItems: MenuItem[] = [
    { id: "resumo", label: "Resumo" },
    { id: "experiencias", label: "Experiências" },
    { id: "projetos", label: "Projetos" },
    { id: "educacao", label: "Educação" },
]



// Sections - reutiliza os menuItems para evitar duplicação
// Isso é MUITO importante: uma única fonte de verdade!
export const sections: Section[] = menuItems.map(item => ({
    id: item.id,
    label: item.label,
    content: getContentForSection(item.id),
}))

// Função auxiliar para retornar o conteúdo de cada seção
function getContentForSection(sectionId: string): string {
    const contentMap: Record<string, string> = {
        resumo: "Sou um desenvolvedor frontend apaixonado por criar interfaces incríveis com React, TypeScript e Tailwind CSS. Tenho experiência em desenvolvimento web moderno e adoro resolver problemas complexos.",
        experiencias: "Aqui vão suas experiências profissionais, empresas, cargos e realizações.",
        projetos: "Projetos interessantes que você desenvolveu, com tecnologias utilizadas e resultados.",
        educacao: "Formação acadêmica, certificações e cursos relevantes para sua carreira.",
    }
    
    return contentMap[sectionId] || ""
}