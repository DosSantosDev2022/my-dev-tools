// em data/server-actions.data.ts

import type { CodeSnippet } from "@/@types"; // Ajuste o caminho de importação

export const serverActionsData: CodeSnippet[] = [
  {
    id: "create-action",
    title: "Ação Genérica para Criar Dados",
    description:
      "Uma Server Action para criar um novo registro no banco de dados. Utiliza Zod para validar os dados recebidos de um formulário e `revalidatePath` para atualizar a UI.",
    language: "typescript",
    code: `// lib/actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma'; // Exemplo com Prisma

// 1. Defina o schema de validação com Zod
const ItemSchema = z.object({
  name: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres.'),
  description: z.string().optional(),
});

// 2. Crie a Server Action
export async function createItem(formData: FormData) {
  try {
    const validatedData = ItemSchema.parse({
      name: formData.get('name'),
      description: formData.get('description'),
    });

    // 3. Execute a lógica do servidor (ex: inserir no DB)
    await prisma.item.create({
      data: validatedData,
    });
    
    // 4. Revalide o cache para atualizar a página
    revalidatePath('/items'); // Substitua pelo caminho da sua página

    return { success: true, message: 'Item criado com sucesso.' };
  } catch (error) {
    // Tratamento de erro
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Erro de validação.', errors: error.flatten().fieldErrors };
    }
    return { success: false, message: 'Ocorreu um erro no servidor.' };
  }
}`,
  },
  {
    id: "update-action",
    title: "Ação Genérica para Atualizar Dados",
    description:
      "Server Action para atualizar um registro existente. Recebe o ID do item além do `FormData`. Também usa Zod para validação e revalida o cache.",
    language: "typescript",
    code: `// lib/actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

const ItemSchema = z.object({
  name: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres.'),
  description: z.string().optional(),
});

export async function updateItem(id: string, formData: FormData) {
  try {
    const validatedData = ItemSchema.parse({
      name: formData.get('name'),
      description: formData.get('description'),
    });

    await prisma.item.update({
      where: { id },
      data: validatedData,
    });
    
    revalidatePath('/items');
    revalidatePath(\`/items/\${id}\`); // Revalida a página de detalhes também

    return { success: true, message: 'Item atualizado com sucesso.' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Erro de validação.', errors: error.flatten().fieldErrors };
    }
    return { success: false, message: 'Ocorreu um erro no servidor.' };
  }
}`,
  },
  {
    id: "delete-action",
    title: "Ação Genérica para Deletar Dados",
    description:
      "Uma Server Action simples e direta para remover um registro do banco de dados com base no seu ID.",
    language: "typescript",
    code: `// lib/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

export async function deleteItem(id: string) {
  try {
    await prisma.item.delete({
      where: { id },
    });
    
    revalidatePath('/items');

    return { success: true, message: 'Item deletado com sucesso.' };
  } catch (error) {
    return { success: false, message: 'Ocorreu um erro ao deletar o item.' };
  }
}`,
  },
  {
    id: "save-action-with-state",
    title: "Ação de Salvar (Criar/Atualizar) com Estado",
    description:
      "Padrão avançado ideal para ser usado com o hook `useFormState`. Esta ação unifica a criação e a atualização, e retorna um estado estruturado com mensagens de erro detalhadas para exibir no formulário.",
    language: "typescript",
    code: `// lib/actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

// 1. Defina o tipo do estado que a ação retornará
export type FormState = {
  message: string;
  errors?: Record<string, string[]>;
  success: boolean;
};

const ItemSchema = z.object({
  id: z.string().optional(), // ID é opcional (presente na atualização)
  name: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres.'),
  description: z.string().optional(),
});

// 2. A ação recebe o estado anterior e o formData
export async function saveItem(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = ItemSchema.safeParse({
    id: formData.get('id') || undefined,
    name: formData.get('name'),
    description: formData.get('description'),
  });

  // 3. Se a validação falhar, retorne os erros
  if (!validatedFields.success) {
    return {
      message: 'Erro de validação. Por favor, corrija os campos.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  const { id, ...data } = validatedFields.data;

  try {
    if (id) {
      // Atualizar
      await prisma.item.update({ where: { id }, data });
      revalidatePath(\`/items/\${id}\`);
    } else {
      // Criar
      await prisma.item.create({ data });
    }
    
    revalidatePath('/items');
    return { message: \`Item \${id ? 'atualizado' : 'criado'} com sucesso.\`, success: true };
  } catch (error) {
    return { message: 'Ocorreu um erro no servidor.', success: false };
  }
}`,
  },
];