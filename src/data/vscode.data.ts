// em data/vscode.data.ts

import type { CodeSnippet } from "@/@types";

export const vscodeData: CodeSnippet[] = [
  {
    id: "vscode-eslint-prettier",
    title: "Configuração para a Stack ESLint + Prettier",
    description:
      "Coloque este conteúdo em `.vscode/settings.json`. Ele configura o VS Code para usar o Prettier como formatador padrão e o ESLint para corrigir erros, ambos ao salvar.",
    language: "jsonc",
    code: `{
  // ---- Configuração do Editor ----
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },

  // ---- Validação do ESLint ----
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  
  // ---- Configurações para Tailwind CSS ----
  "files.associations": {
    "*.css": "tailwindcss"
  },
  
  // ---- Excluir arquivos da busca para melhor performance ----
  "search.exclude": {
    "**/node_modules": true,
    "**/.next": true,
    "**/pnpm-lock.yaml": true
  }
}`,
  },
  {
    id: "vscode-biome",
    title: "Configuração para a Stack Biome",
    description:
      "Se você optou pelo Biome, use esta configuração em `.vscode/settings.json`. Ela define o Biome como a única ferramenta para formatação, linting e organização de imports ao salvar.",
    language: "jsonc",
    code: `{
  // ---- Configuração do Editor com Biome ----
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  },

  // ---- Configurações para Tailwind CSS ----
  "files.associations": {
    "*.css": "tailwindcss"
  },

  // ---- Excluir arquivos da busca para melhor performance ----
  "search.exclude": {
    "**/node_modules": true,
    "**/.next": true,
    "**/pnpm-lock.yaml": true
  }
}`,
  },
];