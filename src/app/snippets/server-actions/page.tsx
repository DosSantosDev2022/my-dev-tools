import { CodePreview } from "@/components/global/code-preview"; // Ajuste o caminho
import { PageHeader } from "@/components/global/page-header";
import { NextjsIcon } from "@/components/icons/nextjs-icon";
import { serverActionsData } from "@/data/actions.data"; // Ajuste o caminho

export default function ServerActionsPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <PageHeader
      icon={NextjsIcon}
      title="Server Actions Next Js"
      description="Uma coleção de Server actions customizados e úteis para agilizar o desenvolvimento de ações do servidor em aplicações Next-Js."
      />
      <div className="flex flex-col gap-1">
        {serverActionsData.map((snippet) => (
          <CodePreview key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
}