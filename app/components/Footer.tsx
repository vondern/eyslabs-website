export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div>
          <p className="font-semibold text-white">EYS LABS</p>
       
        </div>


        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} EYS Labs. Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  );
}
