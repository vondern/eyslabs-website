import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            EYS LABS
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline-block">
            | Onder Maker Lab Enk
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <Link href="#services" className="hover:text-cyan-400 transition-colors">Tjenester</Link>
          <Link href="#products" className="hover:text-cyan-400 transition-colors">Produkter</Link>
          <Link href="#about" className="hover:text-cyan-400 transition-colors">Om Oss</Link>
          <Link href="#contact" className="hover:text-cyan-400 transition-colors">Kontakt</Link>
        </nav>

        <a 
          href="#contact" 
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
        >
          Be om Tilbud
        </a>
      </div>
    </header>
  );
}
