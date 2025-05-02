// app/api/posts/route.ts
import prisma from "../../../src/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { id: "desc" },
      include: { author: true },
    });
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Ошибка при получении постов", { status: 500 });
  }
}
