import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { env } from "@/env";
import { ImageResponse } from "next/og";

import colors from "tailwindcss/colors";

interface Props {
  params: {
    slug: string;
  };
}

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const product = await response.json();

  return product;
}

export default async function OgImage({ params }: Props) {
  const product = await getProduct(params.slug);

  const productImageURL = new URL(
    `/img/${product.image}`,
    env.APP_URL,
  ).toString();
  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={productImageURL}
          alt=""
          width={1200}
          height={1200}
          style={{
            width: "100%",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
