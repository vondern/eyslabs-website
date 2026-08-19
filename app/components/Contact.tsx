export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-3">
            Ta Kontakt / Be om Tilbud
          </h2>
          <p className="text-slate-400">
            Har du et prosjekt, en idé eller ønsker du å printe en CAD/STL-fil? Send oss en melding!
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Navn</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors" 
                  placeholder="Ditt navn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">E-post</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors" 
                  placeholder="din@epost.no"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Emne / Prosjekttype</label>
              <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none focus:border-cyan-500 text-sm transition-colors">
                <option>3D-Printing / Prototyping</option>
                <option>Elektronikk & IoT (ESP32)</option>
                <option>Programvare / Apputvikling</option>
                <option>Annet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Melding / Beskrivelse</label>
              <textarea 
                rows={4} 
                required 
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors" 
                placeholder="Fortell litt om prosjektet ditt..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Last opp 3D-fil (valgfritt: .stl, .step, .zip)</label>
              <input 
                type="file" 
                accept=".stl,.step,.obj,.zip" 
                className="w-full text-sm text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-cyan-400 hover:file:bg-slate-700 cursor-pointer border border-slate-800 rounded-xl p-2 bg-slate-950"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20"
            >
              Send Melding
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
