import { CodePreview } from "@/components/global/code-preview"; // Ajuste o caminho
import { PageHeader } from "@/components/global/page-header";
import { hooksData } from "@/data/hooks.data"; // Ajuste o caminho

export default function ReactHooksPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <PageHeader 
      Title="React Hooks"
      description="Uma coleção de Hooks customizados e úteis para agilizar o desenvolvimento de componentes em React."
      />
      <div className="flex flex-col gap-1">
        {hooksData.map((snippet) => (
          <CodePreview key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
}