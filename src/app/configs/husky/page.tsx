import { CodePreview } from "@/components/global/code-preview"; // Ajuste o caminho
import { PageHeader } from "@/components/global/page-header";
import { HuskyIcon } from "@/components/icons/husky-icon";
import { huskyData } from "@/data/husky.data"

export default function HuskyPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <PageHeader 
      icon={HuskyIcon} 
      title="Husky Config"
      description="Configurações padronizadas para Husky, prontas para serem usadas em qualquer aplicação web."
      />
      <div className="flex flex-col gap-1">
        {huskyData.map((snippet) => (
          <CodePreview key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
}