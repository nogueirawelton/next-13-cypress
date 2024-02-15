import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60,
    },
  });
  const products = await response.json();

  return products;
}

export default async function Home() {
  const [hightlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[1080px] flex-1 grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${hightlightedProduct.slug}`}
        className="items-cend group relative col-span-6 row-span-6 flex max-h-full justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={`/img${hightlightedProduct.image}`}
          fill
          quality={100}
          alt={hightlightedProduct.title}
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-28 right-28 flex h-12 max-w-xs items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">{hightlightedProduct.title}</span>
          <span className="grid h-full place-items-center rounded-full bg-violet-500 px-4 font-semibold">
            {hightlightedProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          href={`/product/${product.slug}`}
          key={product.id}
          className="items-cend group relative col-span-3 row-span-3 flex justify-center overflow-hidden rounded-lg bg-zinc-900"
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
  );
}
