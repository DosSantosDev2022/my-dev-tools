// em data/eslint.data.ts

import type { CodeSnippet } from "@/@types";

export const eslintData: CodeSnippet[] = [
  {
    id: "eslint-installation",
    title: "1. Instalação das Dependências",
    description:
      "O primeiro passo é instalar o ESLint e todos os plugins e configurações necessários como dependências de desenvolvimento.",
    language: "bash",
    code: `pnpm install -D eslint eslint-config-next @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-simple-import-sort eslint-plugin-tailwindcss`,
  },
  {
    id: "eslintrc-config",
    title: "2. Arquivo de Configuração (`.eslintrc.json`)",
    description:
      "Este é o arquivo principal onde definimos as regras, plugins e extensões. A ordem em 'extends' é importante: 'prettier' deve ser o último para desativar regras de estilo que possam conflitar com ele.",
    language: "json",
    code: `{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "plugins": [
    "@typescript-eslint",
    "simple-import-sort",
    "tailwindcss"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  "rules": {
    // Desativa a regra de prop-types, já que usamos TypeScript
    "react/prop-types": "off",
    // Ativa a regra do Next.js para usar o componente Link
    "@next/next/no-html-link-for-pages": "off",
    // Regra para auto-organização dos imports
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // Permite o uso de "_" para variáveis não utilizadas (ex: em callbacks)
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_" }
    ],
    // Desativa a necessidade de tipos de retorno explícitos em funções exportadas
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // Permite o uso de 'any' (use com moderação)
    "@typescript-eslint/no-explicit-any": "off",
    // Regras específicas do Tailwind CSS
    "tailwindcss/no-custom-classname": "off", // Permite classes customizadas
    "tailwindcss/classnames-order": "error" // Força a ordem das classes
  }
}`,
  },
  {
    id: "eslint-ignore",
    title: "3. Arquivo de Ignore (`.eslintignore`)",
    description:
      "Assim como o `.gitignore`, este arquivo informa ao ESLint quais arquivos e pastas ele deve ignorar completamente durante a verificação.",
    language: "bash",
    code: `node_modules
.next
dist
out
public
*.config.js
*.config.mjs
.vscode
`,
  },
  {
    id: "package-json-scripts",
    title: "4. Scripts no `package.json`",
    description:
      "Adicionar scripts ao `package.json` facilita a execução do ESLint via linha de comando para verificar e corrigir o código.",
    language: "json",
    code: `"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint . --ext .ts,.tsx",
  "lint:fix": "eslint . --ext .ts,.tsx --fix"
}`,
  },
  {
    id: "vscode-integration",
    title: "5. (Opcional) Integração com VS Code",
    description:
      "Para uma experiência de desenvolvimento ideal, configure o VS Code para corrigir os erros de ESLint automaticamente ao salvar. Crie o arquivo `.vscode/settings.json` e certifique-se de ter a extensão 'ESLint' da Microsoft instalada.",
    language: "json",
    code: `{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}`,
  },
];