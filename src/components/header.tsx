import Image from "next/image";
import Link from "next/link";
import { CartWidget } from "./cart-widget";
import { Search } from "lucide-react";
import { SearchForm } from "./search-form";
import { Suspense } from "react";

export function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          DevStore
        </Link>

        <Suspense>
          <SearchForm />
        </Suspense>
      </div>

      <nav className="flex items-center gap-4">
        <CartWidget />

        <div className="h-4 w-px bg-zinc-700" />

        <Link
          href=""
          className="flex items-center gap-2 underline-offset-2 hover:underline"
        >
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/nogueirawelton.png"
            alt="user"
            className="h-8 w-8 rounded-full"
            width={32}
            height={32}
          />
        </Link>
      </nav>
    </header>
  );
}
