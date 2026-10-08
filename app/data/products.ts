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
