// em data/biome.data.ts

import type { CodeSnippet } from "@/@types";

export const biomeData: CodeSnippet[] = [
  {
    id: "biome-installation",
    title: "1. Instalação do Biome",
    description:
      "A instalação é simples e requer apenas um pacote de desenvolvimento.",
    language: "bash",
    code: `pnpm install -D @biomejs/biome`,
  },
  {
    id: "biome-init-config",
    title: "2. Inicialização e Configuração (`biome.json`)",
    description:
      "Primeiro, execute o comando `init` para gerar um arquivo `biome.json` básico. Depois, substitua o conteúdo pelo exemplo abaixo, que é uma configuração robusta para projetos Next.js e TypeScript.",
    language: "jsonc",
    code: `// Passo 1: Execute no terminal para criar o arquivo
npx @biomejs/biome init

// Passo 2: Substitua o conteúdo do biome.json gerado por este:
{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      // Começa com as regras recomendadas
      "recommended": true,
      // Exemplos de customização de regras
      "suspicious": {
        "noDoubleEquals": "error"
      },
      "style": {
        "noUselessElse": "warn",
        "useImportType": "error"
      },
      "correctness":{
        "useExhaustiveDependencies": "error" // Equivalente à regra de hooks do React
      },
      "performance": {
        "noBarrelFile": "off" // Desativa a regra contra "barrel files" (index.ts)
      }
    }
  },
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 80
  },
  // Configurações específicas para JavaScript/TypeScript
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "jsxQuoteStyle": "double",
      "trailingComma": "all",
      "semicolons": "always",
      "arrowParentheses": "always"
    },
    // Permite o uso de variáveis globais conhecidas (ex: do Next.js)
    "globals": ["React", "NodeJS"]
  }
}`,
  },
  {
    id: "package-json-scripts-biome",
    title: "3. Scripts no `package.json`",
    description:
      "Os scripts para Biome são mais simples. O comando `check` é especialmente poderoso, pois executa o linter e o formatador de uma só vez.",
    language: "json",
    code: `"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "biome lint .",
  "format": "biome format --write .",
  "check": "biome check --apply ."
}`,
  },
  {
    id: "vscode-integration-biome",
    title: "4. Integração com VS Code",
    description:
      "A experiência de desenvolvimento com Biome é excelente. Instale a extensão oficial 'Biome' da Biome.io e configure seu `.vscode/settings.json` para substituir completamente as configurações do ESLint e Prettier.",
    language: "json",
    code: `{
  // Define o Biome como formatador padrão para os arquivos suportados
  "editor.defaultFormatter": "biomejs.biome",
  // Ativa a formatação automática ao salvar o arquivo
  "editor.formatOnSave": true,
  // Ativa as "Code Actions" do Biome ao salvar. Isso vai corrigir erros de lint e organizar imports.
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}`,
  },
];