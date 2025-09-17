// Em um arquivo como `lib/utils.ts`

type NavItem = {
  title: string;
  url: string;
  items?: NavItem[];
};

/**
 * Converte uma rota (pathname) em um título amigável ou breadcrumb,
 * buscando dinamicamente na estrutura de dados de navegação.
 *
 * @param {string} pathname - A rota atual, ex: usePathname().
 * @param {NavItem[]} navData - O array principal de navegação.
 * @returns {string} O título amigável da rota.
 */
export const getFriendlyPathName = (pathname: string, navData: NavItem[]): string => {
  // A busca agora começa diretamente, sem tratar a página inicial como caso especial.
  
  const findPathTitles = (
    items: NavItem[],
    targetPath: string,
    breadcrumb: string[] = []
  ): string[] | null => {
    for (const item of items) {
      const newBreadcrumb = [...breadcrumb, item.title];

      if (item.url === targetPath) {
        return newBreadcrumb;
      }

      if (item.items && item.items.length > 0) {
        const result = findPathTitles(item.items, targetPath, newBreadcrumb);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  const breadcrumbTitles = findPathTitles(navData, pathname);

  if (breadcrumbTitles) {
    // Se encontrou, retorna o caminho. Ex: "Início" ou "Configurações > ESLint"
    return breadcrumbTitles.join(' > ');
  }

  // Fallback: se a rota não for encontrada nos dados, cria um título genérico.
  // Isso é útil para páginas de erro ou rotas não mapeadas.
  if (!pathname || pathname === '/') return 'Página Inicial'; // Fallback para o caso de o array de dados estar vazio

  const lastSegment = pathname.split('/').filter(Boolean).pop() || '';
  return lastSegment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};