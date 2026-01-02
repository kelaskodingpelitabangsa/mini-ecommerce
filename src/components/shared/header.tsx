// components/shared/header.tsx
import Link from "next/link";
import { Navbar } from "./navbar";
import { CartButton } from "@/components/shop/card-button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Sisi Kiri: Logo */}
        <Link href="/" className="font-bold text-xl tracking-tighter">
          MINI<span className="text-primary">STORE</span>
        </Link>

        {/* Sisi Tengah/Kanan: Navigasi Desktop & Cart */}
        <div className="flex items-center gap-4">
          <Navbar /> {/* Navigasi Link */}
          <CartButton /> {/* Tombol Keranjang */}
        </div>
      </div>
    </header>
  );
};
