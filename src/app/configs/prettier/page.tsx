import { CodePreview } from "@/components/global/code-preview";
import { PageHeader } from "@/components/global/page-header";
import { prettierData } from "@/data/prettier.data";
import { PrettierIcon } from "@/components/icons/prettier-icon";


export default function PrettierPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <PageHeader
      icon={PrettierIcon}
      title="Prettier Config"
      description="Configurações padronizadas para Prettier, prontas para serem usadas em qualquer aplicação web."
      />
      <div className="flex flex-col gap-1">
        {prettierData.map((snippet) => (
          <CodePreview key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
}