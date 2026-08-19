export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
              Om EYS LABS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6 leading-tight">
              Lokal Ekspertise innen 3D-Prototyping og Digitale Løsninger
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              EYS LABS (Onder Maker Lab Enk) er et norsk lab som kombinerer fysisk ingeniørkunst med moderne programvareutvikling. Vi hjelper både bedrifter og privatpersoner med å gå fra idé til ferdig prototype.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Med moderne 3D-skrivere, mikrokontrollere (ESP32/IoT) og skreddersydd programvare leverer vi presise, høykvalitets resultater tilpasset dine behov i Norge.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <h4 className="text-2xl font-bold text-cyan-400">100%</h4>
                <p className="text-xs text-slate-400 mt-1">Lokal produksjon & test i Norge</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-cyan-400">Rask</h4>
                <p className="text-xs text-slate-400 mt-1">Levering av prototyping og filer</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl bg-slate-950 p-8 border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Hvorfor velge oss?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Presisjon i 3D-Print</h4>
                  <p className="text-xs text-slate-400">PETG, PLA og tekniske filamenter tilpasset prototyper.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Embedded & IoT Integrasjon</h4>
                  <p className="text-xs text-slate-400">ESP32, sensorer og spesialdesignede kretskort/kasser.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Modern Skreddersydd Programvare</h4>
                  <p className="text-xs text-slate-400">Next.js, Flutter og skytjenester for dine prosjekter.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
