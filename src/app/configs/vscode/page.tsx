import { CodePreview } from "@/components/global/code-preview";
import { PageHeader } from "@/components/global/page-header";
import { vscodeData } from "@/data/vscode.data"
import { VscodeIcon } from "@/components/icons/vscode-icon";


export default function VsCodePage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <PageHeader
      icon={VscodeIcon}
      title="VScode Config"
      description="Configurações padronizadas para VsCode, prontas para serem usadas em qualquer aplicação web."
      />
      <div className="flex flex-col gap-1">
        {vscodeData.map((snippet) => (
          <CodePreview key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
}