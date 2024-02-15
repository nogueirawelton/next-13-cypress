"use client";

import { useCart } from "@/contexts/cart-context";

interface AddToCartButtonProps {
  productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(productId);
  }
  return (
    <button
      onClick={handleAddToCart}
      type="button"
      className="mt-8 grid h-12 place-items-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  );
}
