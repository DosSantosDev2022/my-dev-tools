// em data/route-handlers.data.ts

import type { CodeSnippet } from "@/@types";

export const routeHandlersData: CodeSnippet[] = [
  {
    id: "get-post-collection",
    title: "GET (Listar) e POST (Criar) - Rota de Coleção",
    description:
      "Exemplo de um arquivo `route.ts` para uma coleção de recursos. O método GET busca todos os itens (com suporte a query params) e o POST cria um novo item após validação com Zod.",
    language: "typescript",
    code: `// em app/api/items/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

// Schema para a criação de um item
const ItemSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
});

// GET /api/items?limit=10
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  try {
    const items = await prisma.item.findMany({
      take: limit,
    });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/items
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = ItemSchema.parse(body);

    const newItem = await prisma.item.create({
      data: validatedData,
    });

    return NextResponse.json(newItem, { status: 201 }); // 201 Created
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.flatten().fieldErrors }, { status: 400 }); // 400 Bad Request
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}`,
  },
  {
    id: "get-single-item",
    title: "GET (Buscar um) - Rota de Recurso Específico",
    description:
      "Exemplo do método GET para uma rota dinâmica (`[id]`). Ele busca um único recurso pelo ID fornecido na URL e retorna 404 se não for encontrado.",
    language: "typescript",
    code: `// em app/api/items/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: RouteContext) {
  try {
    const item = await prisma.item.findUnique({
      where: { id: params.id },
    });

    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}`,
  },
  {
    id: "patch-update-item",
    title: "PATCH (Atualizar) - Rota de Recurso Específico",
    description:
      "O método PATCH é usado para atualizações parciais. Este exemplo valida os dados recebidos e atualiza o item correspondente no banco de dados.",
    language: "typescript",
    code: `// em app/api/items/[id]/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

type RouteContext = {
  params: {
    id: string;
  };
};

// Schema para atualização (todos os campos são opcionais)
const UpdateItemSchema = z.object({
  name: z.string().min(3).optional(),
  description: z.string().optional(),
});

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const body = await request.json();
    const validatedData = UpdateItemSchema.parse(body);
    
    const updatedItem = await prisma.item.update({
      where: { id: params.id },
      data: validatedData,
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.flatten().fieldErrors }, { status: 400 });
    }
    // Adicionar tratamento de erro para caso o item não exista (ex: PrismaClientKnownRequestError)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}`,
  },
  {
    id: "delete-item",
    title: "DELETE (Remover) - Rota de Recurso Específico",
    description:
      "O método DELETE remove um recurso do banco de dados. Geralmente retorna uma resposta de sucesso com status 200 ou uma resposta vazia com status 204 (No Content).",
    language: "typescript",
    code: `// em app/api/items/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type RouteContext = {
  params: {
    id: string;
  };
};

export async function DELETE(request: Request, { params }: RouteContext) {
  try {
    await prisma.item.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Item deleted successfully' }, { status: 200 });
    // Alternativa: retornar uma resposta sem conteúdo
    // return new NextResponse(null, { status: 204 });

  } catch (error) {
    // Adicionar tratamento de erro para caso o item não exista
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}`,
  },
];