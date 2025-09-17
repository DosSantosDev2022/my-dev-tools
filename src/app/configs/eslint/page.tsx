import { CodePreview } from "@/components/global/code-preview";
import { PageHeader } from "@/components/global/page-header";
import { eslintData } from "@/data/eslint.data";
import { EslintIcon } from "@/components/icons/eslint-icon";


export default function EslintPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <PageHeader
      icon={EslintIcon}
      title="Eslint Config"
      description="Configurações padronizadas para Eslint, prontas para serem usadas em qualquer aplicação web."
      />
      <div className="flex flex-col gap-1">
        {eslintData.map((snippet) => (
          <CodePreview key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
}