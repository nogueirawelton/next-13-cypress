import { Skeleton } from "@/components/skeleton";

export default function HomeLoading() {
  return (
    <div className="grid flex-1 grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-6" />
      <Skeleton className="col-span-3 row-span-3" />
      <Skeleton className="col-span-3 row-span-3" />
    </div>
  );
}
