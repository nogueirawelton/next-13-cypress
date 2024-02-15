"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const { s } = data;

    if (!s) {
      return null;
    }
    router.push(`/search?s=${s}`);
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-xs items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="h-5 w-5 text-zinc-500" />

      <input
        type="text"
        placeholder="Buscar produtos..."
        name="s"
        required
        defaultValue={searchParams.get("s") || ""}
        className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  );
}
