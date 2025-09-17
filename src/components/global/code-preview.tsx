"use client";

import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Copy, Check, ChevronDown } from "lucide-react";
import type { CodeSnippet } from "@/@types";
import { Button } from "../ui";

export function CodePreview({ title, description, language, code, defaultOpen = false,  }: CodeSnippet) {
  const [isCopied, setIsCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Resetar o ícone após 2 segundos
    });
  };

  return (
    <div className="mb-2 rounded-lg border bg-card text-card-foreground shadow-sm max-w-6xl">
      {/* Cabeçalho com Título e Descrição */}
        <header
        className="flex cursor-pointer select-none items-center justify-between p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1 pr-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-muted-foreground text-sm">{description}</p>
        </div>
        {/* NOVO: Ícone de chevron que gira com base no estado `isOpen` */}
        <ChevronDown
          className={`h-6 w-6 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </header>

      {/* Área do Código */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Área do Código (conteúdo que colapsa) */}
        <div className="relative border-t">
          <Highlight theme={themes.nightOwl} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={`${className} overflow-x-auto p-4 text-sm md:p-6`}
                style={style}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>

          <Button
            variant={'ghost'}
            onClick={handleCopy}
            className="absolute right-3 top-3 rounded-md bg-card/50 p-2 text-card-foreground backdrop-blur-sm transition-colors hover:bg-card/70"
            aria-label="Copiar código"
          >
            {isCopied ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}