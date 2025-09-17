// em data/typescript.data.ts

import type { CodeSnippet } from "@/@types";

export const typescriptData: CodeSnippet[] = [
  {
    id: "tsconfig-file",
    title: "Arquivo de Configuração (`tsconfig.json`)",
    description:
      "Uma configuração `tsconfig.json` robusta para projetos Next.js. Ela habilita o modo estrito (`strict: true`) e configura aliases de caminho (`@/*`) para uma melhor organização do código.",
    language: "jsonc",
    code: `{
  "compilerOptions": {
    // Tipagem e Módulos
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "module": "esnext",
    "moduleResolution": "bundler", // Padrão moderno para resolução de módulos
    "resolveJsonModule": true,
    "jsx": "preserve", // Next.js cuida da transpilação do JSX

    // Checagem Estrita de Tipos (essencial para qualidade)
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,

    // Interoperabilidade com JavaScript
    "allowJs": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,

    // Configurações do Projeto
    "skipLibCheck": true,
    "noEmit": true, // Next.js lida com a emissão de arquivos
    "isolatedModules": true,
    "incremental": true,

    // Aliases de Caminho (Path Aliases)
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"] // Ajuste se não usar a pasta 'src'
    },

    // Plugin do Next.js
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`,
  },
  {
    id: "tsconfig-explanation",
    title: "Principais Opções Explicadas",
    description:
      "`\"strict\": true`: Ativa todas as regras de checagem estrita de tipos. É a configuração mais importante para garantir a segurança de tipos.\n`\"moduleResolution\": \"bundler\"`: O modo mais moderno e recomendado para resolver módulos, alinhado com as ferramentas de build atuais.\n`\"paths\": { \"@/*\": [\"./src/*\"] }`: Permite importações absolutas a partir da pasta `src`, como `import Component from '@/components/MyComponent'`, em vez de `import Component from '../../../components/MyComponent'`. Melhora muito a legibilidade.",
    language: "typescript",
    code: `// Exemplo de uso de Path Alias:
import { MyComponent } from '@/components/MyComponent';
import { api } from '@/lib/api';

// Muito mais limpo que:
// import { MyComponent } from '../../components/MyComponent';
// import { api } from '../../../lib/api';`,
  },
];