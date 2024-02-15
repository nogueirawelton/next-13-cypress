import { z } from "zod";
import data from "../data.json";
import { NextRequest } from "next/server";

interface Props {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { searchParams } = request.nextUrl;

  const search = z.string().parse(searchParams.get("q"));

  const products = data.products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  return Response.json(products);
}
