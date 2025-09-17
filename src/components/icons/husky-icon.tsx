import { SVGProps } from 'react';

// Componente do ícone do Husky que aceita props de SVG padrão
export function HuskyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 0C8.379 0 5.083 1.832 2.923 4.83L.398 2.305 0 2.703l4.33 4.33.398-.398-2.45-2.45A9.452 9.452 0 0 1 12 2.526c5.225 0 9.474 4.249 9.474 9.474s-4.249 9.474-9.474 9.474S2.526 17.225 2.526 12c0-1.704.453-3.303 1.258-4.702l-1.58-1.58C.89 7.545.053 9.684.053 12c0 6.6 5.347 11.947 11.947 11.947S23.947 18.6 23.947 12 18.6 0 12 0Zm-.724 4.418-5.858 5.858.796.796 5.858-5.858Z" />
    </svg>
  );
}