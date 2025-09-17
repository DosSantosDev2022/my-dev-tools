// Arquivo de dados para a navegação do seu DevHub

export const data = {
  versions: ["1.0.0"],
  navMain: [
    {
      title: "Início",
      url: "/",
      items: [], // Link principal, sem sub-itens
    },
    {
      title: "Configurações",
      url: "/configs",
      items: [
        {
          title: "ESLint",
          url: "/configs/eslint",
        },
        {
          title: "Prettier",
          url: "/configs/prettier",
        },
        {
          title: "BiomeJs",
          url: "/configs/biomejs",
        },
        {
          title: "TypeScript (tsconfig)",
          url: "/configs/typescript",
        },
        {
          title: "Next.js (next.config)",
          url: "/configs/nextjs",
        },
        {
          title: "VS Code (settings.json)",
          url: "/configs/vscode",
        },
        {
          title: "Husky",
          url: "/configs/husky",
        },
      ],
    },
    {
      title: "Snippets & Funções",
      url: "/snippets",
      items: [
        {
          title: "React Hooks",
          url: "/snippets/react-hooks",
        },
        {
          title: "Manipulação de Strings",
          url: "/snippets/string-utils",
        },
        {
          title: "Formatação de Datas",
          url: "/snippets/date-utils",
        },
        {
          title: "Route handlers",
          url: "/snippets/route-handlers",
        },
        {
          title: "Server actions",
          url: "/snippets/server-actions",
        },
        {
          title: "Funções de Array",
          url: "/snippets/array-utils",
        },
      ],
    },
    {
      title: "Ferramentas Úteis",
      url: "/tools",
      items: [
        {
          title: "Formatador JSON",
          url: "/tools/json-formatter",
        },
        {
          title: "Gerador de Senhas",
          url: "/tools/password-generator",
        },
        {
          title: "Conversor de Cores (Hex/RGB)",
          url: "/tools/color-converter",
        },
        {
          title: "Gerador de Slug",
          url: "/tools/slug-generator",
        },
        {
          title: "Codificador/Decodificador Base64",
          url: "/tools/base64-converter",
        },
      ],
    },
    {
      title: "Comandos CLI",
      url: "/cli",
      items: [
        {
          title: "Git",
          url: "/cli/git",
        },
        {
          title: "NPM / Yarn / PNPM",
          url: "/cli/package-managers",
        },
        {
          title: "Docker",
          url: "/cli/docker",
        },
      ],
    },
  ],
};