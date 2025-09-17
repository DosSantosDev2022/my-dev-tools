import { SVGProps } from 'react';

export function NextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      // O {...props} permite passar outras props, como className
      {...props} 
    >
      {/* 1. Círculo de fundo com a cor preta fixa */}
      <circle cx="64" cy="64" r="64" fill="#000000" />

      {/* 2. Caminho (path) com o texto 'NJS' sobreposto, com a cor branca fixa */}
      <path
        fill="#FFFFFF"
        d="M86.8,100.8V41.8h8.5v59H86.8z M41.2,100.8V41.8h8.5l24,38.8V41.8h8.5v59h-8.2L50.2,62.1v38.7H41.2z"
      />
    </svg>
  );
}