
export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950 text-white">
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-medium mb-6">
          Lokal Utvikling & 3D-Prototyping i Norge
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Fra Idé til Fysisk & Digitalt <br className="hidden sm:block"/>
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Produkt
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg mb-8">
          EYS Labs (Onder Maker Lab Enk) leverer alt fra presis 3D-printing og elektronikkutvikling til skreddersydde programvareløsninger.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#products" 
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20"
          >
            Utforsk Produkter
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all"
          >
            Våre Tjenester
          </a>
        </div>
      </div>
    </section>
  );
}
