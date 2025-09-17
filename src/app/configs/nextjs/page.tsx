import { CodePreview } from "@/components/global/code-preview";
import { PageHeader } from "@/components/global/page-header";
import { nextjsData } from "@/data/nextjs.data"
import { NextjsIcon } from "@/components/icons/nextjs-icon";


export default function NextjsPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <PageHeader
      icon={NextjsIcon}
      title="Next Js Config"
      description="Configurações padronizadas para Next, prontas para serem usadas em qualquer aplicação web."
      />
      <div className="flex flex-col gap-1">
        {nextjsData.map((snippet) => (
          <CodePreview key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
}