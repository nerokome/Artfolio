import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
       <Link href="/">
      <div className="fixed top-0 left-0 z-50">
        <Image
          src="/rarrr.png"
          alt="Artfolio Logo"
          width={150}
          height={150}
          priority
        />
      </div>
      </Link>
      
      <div className="flex items-center gap-4 text-sm text-gray-300">
        <Link href="/auth/login">
          <button className="rounded-md border border-cyan-400 px-4 py-1 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            Login
          </button>
        </Link>
        <Link href="/auth/signup">
          <button className="rounded-md border border-cyan-400 px-4 py-1 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}