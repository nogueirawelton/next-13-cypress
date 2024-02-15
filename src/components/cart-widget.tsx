"use client";

import { useCart } from "@/contexts/cart-context";
import { ShoppingBag } from "lucide-react";

export function CartWidget() {
  const { items } = useCart();

  return (
    <button className="flex items-center gap-2">
      <ShoppingBag className="h-5 w-5" />
      <span className="text-sm">Cart ({items.length})</span>
    </button>
  );
}
