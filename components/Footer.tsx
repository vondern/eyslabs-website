export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div>
          <p className="font-semibold text-white">EYS LABS</p>
          <p className="text-xs text-slate-500">Opereres av Onder Maker Lab Enk</p>
          <p className="text-xs text-slate-500 mt-1">Org.nr: 938 276 722 | Basert i Norge</p>
        </div>

        <div className="flex gap-6">
          <a href="#services" className="hover:text-white">Tjenester</a>
          <a href="#products" className="hover:text-white">Produkter</a>
          <a href="#contact" className="hover:text-white">Kontakt</a>
        </div>

        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} EYS Labs. Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  );
}
