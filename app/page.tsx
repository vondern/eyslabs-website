import React from 'react';

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'gameboy-watch-stand',
    title: 'Retro Gameboy Apple Watch Lader Stand',
    category: '3D Design',
    description: 'Klassisk retro design inspirert av den originale Gameboy. 3D-modellert og tilpasset Apple Watch.',
    features: ['3D-printed med høy presisjon', 'Kompatibel med alle Apple Watch-størrelser', 'Kabelhåndtering på baksiden'],
    image: '/products/RetroGameAW.jpeg',
  },
  {
    id: 'retro-radio-bt',
    title: 'Retro Radio Bluetooth Omformer (ESP32 Project)',
    category: 'IoT & Embedded Electronics',
    description: 'Egentilpasset elektronikkprosjekt for å gi nytt liv til vintage radioer med ESP32 og DAC forsterker.',
    features: ['ESP32-S3 Basert MCU', 'PCM5102A Hi-Fi DAC', 'TPA3116D2 Klasse-D Forsterker'],
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'skreddersydd-fodselstavle',
    title: 'Skreddersydd Fødselstavle koncept',
    category: '3D Design',
    description: 'Et unikt 3D-minnekonsett. Lagdelt dybdekonsept designet med personlige temaer.',
    features: [
      'Lagdelt 3D-dybde for et eksklusivt uttrykk',
      'Valgfritt tema (Fjell, nordisk eventyr, romfart, skog)',
      'Personlig tilpasset struktur'
    ],
    image: '/products/baby.png',
  },
  {
    id: 'dyson-supersonic-veggfeste',
    title: 'Dyson Supersonic Veggfeste Modell',
    category: '3D Design',
    description: 'Praktisk og stilrent veggfeste konseptelement til Dyson Supersonic.',
    features: [
      '3D-printet i slitesterk og fuktbestandig PETG',
      'Ergonomisk passform og kabelholder'
    ],
    image: '/products/dyson.jpeg',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950">
              E
            </div>
            <span className="font-bold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              EYS LABS
            </span>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
            Personal Engineering Showcase
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Hardware, 3D Design & <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Embedded Systems
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          En personlig utstilling av 3D-modellering, prototyper, IoT-prosjekter og embedded elektronikkløsninger utformet av EYS.
        </p>
      </section>

      {/* Projects Showcase */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-3">
          Utvalgte Prosjekter & Konsepter
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300 flex flex-col"
            >
              <div className="h-64 overflow-hidden bg-slate-950 relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-500" 
                />
                <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur text-slate-300 border border-slate-800">
                  {product.category}
                </span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feat, idx) => (
                      <span key={idx} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md">
                        • {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Disclaimer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-slate-400 font-semibold">EYS LABS © {new Date().getFullYear()}</p>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed border border-slate-900 p-4 rounded-xl">
            <strong>Disclaimer:</strong> This website is a non-commercial, personal engineering portfolio and design showcase. No products are for sale, and no commercial transactions or services are conducted on this platform.
          </p>
        </div>
      </footer>
    </div>
  );
}
