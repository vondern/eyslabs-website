import type { Metadata } from 'next';
import './globals.css'; // Stil dosyanın adı farklıysa (örn: styles.css) ona göre güncelleyebilirsin

export const metadata: Metadata = {
  title: 'EYS LABS | Prototyping, IoT & Software Solutions',
  description: 'Onder Maker Lab Enk – High quality 3D printing, embedded systems, and custom software development in Norway.',
  keywords: ['3D printing', 'embedded systems', 'ESP32', 'Next.js', 'Norway', 'Onder Maker Lab'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
