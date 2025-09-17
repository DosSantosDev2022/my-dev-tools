import { CodePreview } from "@/components/global/code-preview";
import { PageHeader } from "@/components/global/page-header";
import { typescriptData } from "@/data/typescript.data";
import { TypescriptIcon } from "@/components/icons/typescript-icon";


export default function TypescriptPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <PageHeader
      icon={TypescriptIcon} 
      title="Typescript Config"
      description="Configurações padronizadas para Typescript, prontas para serem usadas em qualquer aplicação web."
      />
      <div className="flex flex-col gap-1">
        {typescriptData.map((snippet) => (
          <CodePreview key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
}