"use client";

import { useSearchParams } from "next/navigation";

export function CurrentSearch() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  return (
    <p className="text-sm">
      Resultados para: <span className="font-semibold">{q}</span>
    </p>
  );
}
