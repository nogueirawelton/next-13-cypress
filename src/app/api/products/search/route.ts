import { z } from "zod";
import data from "../data.json";
import { NextRequest } from "next/server";

interface Props {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const search = z.string().parse(searchParams.get("s"));

  const products = data.products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return Response.json(products);
}
