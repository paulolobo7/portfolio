import type { Profile, MenuItem, Education, Experience, Projects } from "./types"

export const profile: Profile = {
    name: "Paulo Lobo",
    role: "Desenvolvedor Front-End Júnior",
    description: "Desenvolvedor Front-End Júnior com foco em TypeScript e React, dedicado à criação de aplicações escaláveis, responsivas e acessíveis. Possuo experiência na construção de interfaces modernas e performáticas, sempre seguindo boas práticas de desenvolvimento e padrões de engenharia de software. Atualmente, sou graduando em Sistemas de Informação pelo Centro Universitário do Maranhão (Ceuma) e busco constantemente aprimorar minhas habilidades, com forte interesse em desenvolvimento de software e na evolução contínua como profissional.",
    photo: "/paulolobo.png",
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
        institution: "Centro Universitário do Maranhão (CEUMA)", 
        curso: "Sistemas de Informação", 
        date: "2026-2030", 
        description: "Graduação em andamento, com foco em desenvolvimento e engenharia de software."
    },
    {
        id: 3,
        institution: "INCODE TECH SCHOOL",
        curso: "Escola de Programação",
        date: "2026-2027",
        description: "Curso intensivo focado em programação, desenvolvimento web e tecnologias modernas do mercado."
    }
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
        title: "Routines",
        iframeUrl: "https://routines-six.vercel.app/",
        description: "Routines é uma ferramenta para criar, organizar e acompanhar suas rotinas diárias de forma simples e eficiente, com o auxílio do método Pomodoro para otimizar a produtividade.",
        skills: ["Typescript", "React.js", "Next.js", "Tailwind CSS"],
        link: "https://routines-six.vercel.app",
        github: "https://github.com/paulolobo7/routines",
        img: "/routines.png"
    }
]

// Menu items - itens que aparecem no sidebar
export const menuItems: MenuItem[] = [
    { id: "resumo", label: "Resumo" },
    { id: "experiencias", label: "Experiências" },
    { id: "projetos", label: "Projetos" },
    { id: "educacao", label: "Educação" },
]





