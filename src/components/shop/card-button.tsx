// components/shop/cart-button.tsx
"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const CartButton = () => {
  // Nanti jumlah ini diambil dari Zustand store
  const cartCount = 0;

  return (
    <Button variant="ghost" size="icon" className="relative">
      <ShoppingCart className="h-6 w-6" />
      {cartCount > 0 && (
        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0">
          {cartCount}
        </Badge>
      )}
    </Button>
  );
};
