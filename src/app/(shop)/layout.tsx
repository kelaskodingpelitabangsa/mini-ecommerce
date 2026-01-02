// app/(shop)/layout.tsx
import { Header } from "@/components/shared/header";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {/* Footer bisa diletakkan di sini nanti */}
    </div>
  );
}
