import {
  Code,
  SlidersHorizontal,
  Hammer,
  TerminalSquare,
  ArrowRight,
} from "lucide-react";

// Array com os dados das seções para facilitar a manutenção
const sections = [
  {
    Icon: SlidersHorizontal,
    title: "Configurações",
    description: "Templates prontos para ESLint, Prettier, tsconfig.json e mais.",
  },
  {
    Icon: Code,
    title: "Snippets & Funções",
    description: "Funções úteis, React Hooks e trechos de código reutilizáveis.",
  },
  {
    Icon: Hammer,
    title: "Ferramentas Úteis",
    description: "Pequenas ferramentas online para agilizar tarefas do dia a dia.",
  },
  {
    Icon: TerminalSquare,
    title: "Comandos CLI",
    description: "Comandos úteis e recorrentes para Git, Docker, NPM, etc.",
  },
];

export default function PageHome() {
  return (
    <div className="flex flex-col items-center p-4 py-8 md:p-12 lg:p-16">
      {/* Seção de Cabeçalho */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Meu DevKit Pessoal
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Um lugar centralizado para minhas configurações, snippets de código,
          ferramentas e comandos mais usados. Construído para acelerar o setup e
          a consulta em novos projetos.
        </p>
      </header>

      {/* Grid com os Cards das Seções */}
      <main className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {sections.map(({ Icon, title, description }) => (
          <div
            className="group flex flex-col justify-between rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:border-primary/80 hover:shadow-md"
          >
            <div>
              <div className="mb-4 flex items-center gap-4">
                <Icon className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">{title}</h2>
              </div>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </main>

      {/* Rodapé Opcional */}
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>Construído com Next.js, React e Tailwind CSS.</p>
      </footer>
    </div>
  );
}