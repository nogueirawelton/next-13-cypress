import { z } from "zod";
import data from "../data.json";

interface Props {
  params: {
    slug: string;
  };
}

export async function GET(request: Request, { params }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const slug = z.string().parse(params.slug);

  const product = data.products.find((product) => product.slug == slug);

  if (!product) {
    return Response.json(
      {
        message: "Product not found",
      },
      {
        status: 404,
      },
    );
  }

  return Response.json(product);
}
