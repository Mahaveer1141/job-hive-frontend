import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/full-logo.png";

export default function Navbar() {
  return (
    <nav className=" bg-primary backdrop-blur sticky top-0 supports-[backdrop-filter]:bg-primary/95 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 bg-background rounded-full px-4 py-2 cursor-pointer hover:scale-105 transition-all">
          <Image src={logo} alt="logo" height={30} />
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="flex items-center justify-center rounded-md text-sm font-medium md:px-4 px-2 py-2 text-secondary hover:bg-primary-foreground/10"
            href="/auth"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
