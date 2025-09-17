// em data/hooks.data.ts (ou onde preferir organizar seus dados)

import { CodeSnippet } from "@/@types";


export const hooksData: CodeSnippet[] = [
  {
    id: "use-debounce",
    title: "Hook useDebounce",
    description: "Atrasa a execução de uma função ou a atualização de um valor, útil para campos de busca e inputs que disparam eventos rapidamente.",
    language: "tsx",
    code: `import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}`,
  },
  {
    id: "use-toggle",
    title: "Hook useToggle",
    description: "Um hook simples para alternar um estado booleano entre verdadeiro e falso.",
    language: "tsx",
    code: `import { useState, useCallback } from 'react';

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);
  
  const toggle = useCallback(() => setState(s => !s), []);
  
  return [state, toggle];
};`,
  },
];