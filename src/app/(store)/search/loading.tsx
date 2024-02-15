import { Skeleton } from "@/components/skeleton";
import { Suspense } from "react";
import { CurrentSearch } from "./current-search";

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="aspect-square" />
        <Skeleton className="aspect-square" />
        <Skeleton className="aspect-square" />
      </div>
    </div>
  );
}
