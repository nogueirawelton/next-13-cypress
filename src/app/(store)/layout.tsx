import { Header } from "@/components/header";
import { CartProvider } from "@/contexts/cart-context";
import { ReactNode } from "react";

interface StoreLayoutProps {
  children: ReactNode;
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <CartProvider>
      <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  );
}
