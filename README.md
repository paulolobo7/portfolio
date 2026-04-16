# 🗂️ Portfólio — Paulo Lobo

Meu portfólio pessoal desenvolvido com Next.js, apresentando minha trajetória, experiências, projetos e formação acadêmica. Os projetos podem ser visualizados diretamente na página, sem precisar sair do portfólio.

## ✨ Funcionalidades

- **Visualização de projetos embutida** — abre o site do projeto em um modal com iframe
- **Tema claro/escuro** — alternância automática baseada no sistema
- **Layout responsivo** — sidebar + conteúdo no desktop, empilhado no mobile
- **Navegação por âncoras** — botões no sidebar rolam suavemente até cada seção

## 🚀 Tecnologias

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## 📦 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/paulolobo7/portfolio

# Acesse a pasta
cd portfolio

# Instale as dependências
pnpm install

# Rode o servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── constants/        # Dados do portfólio (perfil, projetos, experiências...)
│   ├── providers/        # ThemeProvider
│   ├── globals.css       # Estilos globais e classes utilitárias
│   ├── layout.tsx        # Layout raiz com metadados
│   └── page.tsx          # Página principal
└── components/
    ├── ui/               # Componentes base (shadcn/ui)
    ├── profile.tsx       # Sidebar com foto, nome e navegação
    ├── mode-toggle.tsx   # Botão de alternância de tema
    └── icon.tsx          # Componente de ícone
```

## 📬 Contato

- **GitHub:** [github.com/paulolobo7](https://github.com/paulolobo7)
- **LinkedIn:** [linkedin.com/in/paulo-lobo-2b36382b2](https://www.linkedin.com/in/paulo-lobo-2b36382b2)
- **Email:** paulorobertocabrallobo@gmail.com
