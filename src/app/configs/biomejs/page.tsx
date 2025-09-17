import { CodePreview } from "@/components/global/code-preview";
import { PageHeader } from "@/components/global/page-header";
import { biomeData } from "@/data/biome.data";
import { BiomeIcon } from "@/components/icons/biome-icon";

export default function BiomejsPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <PageHeader 
      icon={BiomeIcon}
      title="Biome Js Config"
      description="Configurações padronizadas para BiomeJs, prontas para serem usadas em qualquer aplicação web."
      />
      <div className="flex flex-col gap-1">
        {biomeData.map((snippet) => (
          <CodePreview key={snippet.id} {...snippet} />
        ))}
      </div>
    </div>
  );
}