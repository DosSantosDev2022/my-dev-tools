
// tipagem para dados do snippet
export type CodeSnippet = {
  id: string; // Um identificador único, pode ser o nome da função/hook
  title: string;
  description: string;
  language: "tsx" | "typescript" | "bash" | "json"; // Adicione outras linguagens conforme necessário
  code: string; // O código em si, como uma string
  defaultOpen? : boolean, 
};