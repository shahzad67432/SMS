import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-[#181818]">
      <aside className="w-[16%] lg:w-[20%] xl:w-[16%] p-4 bg-[#202020]">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 mb-6">
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold text-[#E0E0E0] text-lg">PV.College</span>
        </Link>
        <Menu />
      </aside>
      <main className="flex-1 bg-[#121212] overflow-auto">
        <Navbar />
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
}
