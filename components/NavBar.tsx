import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const links = [
    { href: "#overview", label: "Overview" },
    { href: "#objectives", label: "Objectives" },
    { href: "#devops", label: "DevOps" },
    { href: "#ai", label: "AI/ML" },
    { href: "#deliverables", label: "Deliverables" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-gray-200/60 dark:border-gray-700/60 bg-white/60 dark:bg-black/40">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="font-semibold text-gradient">AI CI/CD</Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary-500 transition">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

