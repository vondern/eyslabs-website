const services = [
  {
    title: '3D Printing & Prototyping',
    desc: 'Høykvalitets FDM-printing i PLA, PETG og tekniske materialer. Rask prototyping og produksjon i mindre serier.',
    icon: '⚡',
  },
  {
    title: 'Embedded Systems & IoT',
    desc: 'Skreddersydde kretskortløsninger, ESP32/Raspberry Pi-integrasjoner, sensorteknologi og tilpassede innkapslinger.',
    icon: '🔌',
  },
  {
    title: 'Software & Web Solutions',
    desc: 'Moderne webapplikasjoner, mobilapper (Flutter/Next.js) og skreddersydd programvare for bedrifter.',
    icon: '💻',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Hva Vi Gjør</h2>
          <p className="text-slate-400 mt-2">Komplette ingeniør- og utformingstjenester under ett tak.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
