import { CodePreview } from "@/components/global/code-preview"; // Ajuste o caminho
import { PageHeader } from "@/components/global/page-header";
import { NextjsIcon } from "@/components/icons/nextjs-icon";
import { routeHandlersData } from "@/data/route-handlers.data"; // Ajuste o caminho

export default function RouteHandlersPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <PageHeader
      icon={NextjsIcon}
      title="Route handlers Next Js"
      description="Uma coleção de rotas customizados e úteis para agilizar o desenvolvimento de busca de dados em aplicações Next-Js."
      />
      <div className="flex flex-col gap-1">
        {routeHandlersData.map((snippet) => (
          <CodePreview key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
}