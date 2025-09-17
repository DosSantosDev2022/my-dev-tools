"use client"; // Diretiva obrigatória para usar hooks como o usePathname

import { data } from "@/data/sidebar-data";
import { getFriendlyPathName } from "@/utils/findPathTitles";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const friendlyTitle = getFriendlyPathName(pathname, data.navMain);


  return (
    <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
      {/* Exibe a rota atual */}
      <span className="font-mono text-sm text-muted-foreground">
        {friendlyTitle}
      </span>
    </header>
  );
};

export default Header;