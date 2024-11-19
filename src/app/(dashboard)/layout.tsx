import Menu from "@/components/Menu";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/Navbar";


export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[15%] lg:[40%] xl:w-[15%] bg-leftBg p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">RENCY TECH. ACADEMY</span>
        </Link>
        <Menu/>
      </div>

      {/* RIGHT */}
      <div className="w-[86%] md:w-[85%] lg:[60%] xl:w-[85%] bg-rightBg overflow-scroll flex flex-col">
        <Navbar/>
          {children}
      </div>
    </div>
    );
  }