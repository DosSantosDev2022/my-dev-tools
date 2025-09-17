// em data/nextjs.data.ts

import type { CodeSnippet } from "@/@types";

export const nextjsData: CodeSnippet[] = [
  {
    id: "next-config-file",
    title: "Arquivo de Configuração (`next.config.mjs`)",
    description:
      "O `next.config.mjs` permite customizar o comportamento do Next.js. Este exemplo inclui configurações para imagens remotas e a adição de headers de segurança, que são práticas recomendadas.",
    language: "javascript",
    code: `// Use a extensão .mjs para suporte nativo a ES Modules
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ativa o Strict Mode do React para ajudar a identificar problemas potenciais
  reactStrictMode: true,

  // Configuração para otimização de imagens
  images: {
    // Permite o uso de imagens de domínios externos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.example.com', // Outro exemplo
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Adiciona headers de segurança a todas as rotas
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
`,
  },
];