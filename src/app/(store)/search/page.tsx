import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

async function searchProducts(q: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${q}`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const products = await response.json();

  return products;
}

export default async function Search({ searchParams }: SearchProps) {
  const { q } = searchParams;

  if (!q) {
    redirect("/");
  }

  const products = await searchProducts(q);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{q}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            href={`/product/${product.slug}`}
            key={product.id}
            className="items-cend group relative flex aspect-square justify-center overflow-hidden rounded-lg bg-zinc-900"
          >
            <Image
              src={`/img${product.image}`}
              fill
              quality={100}
              alt={product.title}
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-10 right-10 flex h-12 max-w-xs items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="truncate text-sm">{product.title}</span>
              <span className="grid h-full place-items-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
