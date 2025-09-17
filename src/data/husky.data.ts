// em data/husky.data.ts

import type { CodeSnippet } from "@/@types";

export const huskyData: CodeSnippet[] = [
  {
    id: "husky-installation",
    title: "1. Instalação",
    description:
      "Instale o Husky para gerenciar os git hooks e o `lint-staged` para rodar scripts apenas nos arquivos que estão no 'stage' do git.",
    language: "bash",
    code: `pnpm install -D husky lint-staged`,
  },
  {
    id: "husky-init",
    title: "2. Ativação",
    description:
      "Este comando inicializa o Husky no seu projeto, criando a pasta `.husky` e adicionando o script `prepare` ao `package.json`.",
    language: "bash",
    code: `npx husky init`,
  },
  {
    id: "husky-lint-staged-eslint",
    title: "3. Configuração do `lint-staged` (com ESLint + Prettier)",
    description:
      "Adicione esta configuração ao seu `package.json`. Ela define quais comandos serão executados em quais arquivos antes de cada commit.",
    language: "json",
    code: `// Dentro do seu package.json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,css}": "prettier --write"
}`,
  },
  {
    id: "husky-lint-staged-biome",
    title: "3. Configuração do `lint-staged` (com Biome)",
    description:
      "Se você usa o Biome, a configuração do `lint-staged` é mais simples, pois um único comando cuida de tudo.",
    language: "json",
    code: `// Dentro do seu package.json
"lint-staged": {
  "*.{js,jsx,ts,tsx,json,md,css}": "biome check --apply"
}`,
  },
  {
    id: "husky-pre-commit-hook",
    title: "4. Criação do Hook `pre-commit`",
    description:
      "Execute este comando uma vez para criar o hook que irá disparar o `lint-staged` antes de cada commit. Isso garante que nenhum código fora do padrão seja enviado ao repositório.",
    language: "bash",
    code: `npx husky add .husky/pre-commit 'npx lint-staged'`,
  },
];