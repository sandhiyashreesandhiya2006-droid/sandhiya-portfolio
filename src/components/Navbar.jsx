import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" }, 
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-2xl border-b border-yellow-400/20 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-extrabold tracking-wider text-yellow-400">
          Sandhiya<span className="text-white">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
  {links.map((item) => (
    <li key={item.name}>
      <a
        href={item.href}
        className="relative cursor-pointer text-gray-300 hover:text-yellow-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>

        <button
          className="md:hidden text-yellow-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl">
          {links.map((item) => (
  <a
    key={item.name}
    href={item.href}
    onClick={() => setOpen(false)}
    className="block py-4 text-center border-b border-gray-800 text-white hover:text-yellow-400"
  >
    {item.name}
  </a>
))}
        </div>
      )}
    </nav>
  );
}