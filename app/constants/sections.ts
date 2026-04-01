import type { Profile, MenuItem, Section, Education, Experience, Projects,} from "./types"

export const profile: Profile = {
    name: "Paulo Lobo",
    role: "Desenvolvedor Frontend",
    description: "Olá mundo, meu nome é Paulo, sou um desenvolvedor front-end junior com foco em Typescript e React.js.",
    photo: "/paulo.png",
    initials: "PL",
}

export const educacao: Education[] = [
    {
        id: 1, 
        institution: "IEMA-Gonçalves Dias", 
        curso: "Técnico em Redes de Computadores", 
        date: "2023 - 2025", 
        description: "Curso técnico focado em redes, segurança e infraestrutura de TI."
    },
    
    {
        id: 2, 
        institution: "Ceuma", 
        curso: "Sistemas de Informação", 
        date: "2026-Cursando", 
        description: "Graduação em andamento, com foco em desenvolvimento de software, banco de dados e engenharia de software."
    },
]

export const experiencias: Experience[] = [
    {
        id:1, 
        empresa: "IEMA-DIRETORIA", 
        cargo: "Estagiário - Suporte Técnico", 
        date: "2025 - 2025", 
        description: "Durante meu estágio no IEMA – Diretoria, iniciei minha trajetória na área de tecnologia atuando com suporte técnico, lidando com demandas reais em um ambiente profissional e colaborativo. Essa experiência foi essencial para o meu crescimento, permitindo-me desenvolver habilidades na resolução de problemas relacionados a computadores, sistemas e rede, além de aprimorar minha comunicação no atendimento aos usuários. Também tive a oportunidade de atuar no suporte em eventos de grande porte, garantindo o funcionamento adequado dos equipamentos e sistemas. Trabalhar nesse contexto contribuiu para fortalecer minha responsabilidade, organização e capacidade de lidar com diferentes situações do dia a dia, consolidando minha base para atuação na área.", 
        skills: ["Suporte Técnico", "Manutenção de Hardware", "Gestão de Redes", "Atendimento ao Cliente"]
    },
]

export const projetos: Projects[] = [
    {
        id: 1,
        title: "Projetos em Desenvolvimento....",
        description: "",
        skills: [""],
        link: "",
        github: "",
    }
]

// Menu items - itens que aparecem no sidebar
export const menuItems: MenuItem[] = [
    { id: "resumo", label: "Resumo" },
    { id: "experiencias", label: "Experiências" },
    { id: "projetos", label: "Projetos" },
    { id: "educacao", label: "Educação" },
]



// Sections - reutiliza os menuItems para evitar duplicação
// Isso é MUITO importante: uma única fonte de verdade!
export const sections: Section[] = menuItems.map((item => ({
    id: item.id,
    label: item.label,
    content: "",
})))



