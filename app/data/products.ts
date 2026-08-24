export interface Product {
  id: string;
  title: string;
  category: string;
  price: string; // Örn: "299 NOK"
  description: string;
  features: string[];
  image: string; // Public klasöründeki görsel yolu VEYA Unsplash / dış link
  buyUrl?: string; // Etsy, Finn.no veya Vipps linki
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'gameboy-watch-stand',
    title: 'Retro Gameboy Apple Watch Lader',
    category: '3D- Brikker',
    price: '214 NOK',
    description: 'Klassisk retro design inspirert av den originale Gameboy. Passer perfekt på nattbordet.',
    features: ['3D-printed med høj presisjon', 'Kompatibel med alle Apple Watch-størrelser', 'Kabelhåndtering på baksiden'],
    image: '/products/RetroGameAW.jpeg', // https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80', // Geçici görsel
    buyUrl: 'https://www.etsy.com/no-en/listing/4561553191/retro-console-apple-watch-stand-3d', // Veya direkt Finn.no / Vipps linki
    inStock: true,
  },
  {
    id: 'retro-radio-bt',
    title: 'Retro Radio Bluetooth Omformer Kit',
    category: 'Elektronikk',
    price: '899 NOK',
    description: 'Gi nytt liv til din vintage radio med ESP32 og førsteklasses lydforsterker.',
    features: ['ESP32-S3 Basert', 'PCM5102A Hi-Fi DAC', 'TPA3116D2 Klasse-D Forsterker'],
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
    buyUrl: '#contact',
    inStock: true,
  },
];
