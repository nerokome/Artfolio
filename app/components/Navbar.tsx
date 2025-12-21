export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-xl font-semibold tracking-wide">ARTFOLIO</h1>

      <div className="flex items-center gap-4 text-sm text-gray-300">
        

        <button className="rounded-md border border-cyan-400 px-4 py-1 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
          Login
        </button>
        <button className="rounded-md border border-cyan-400 px-4 py-1 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
