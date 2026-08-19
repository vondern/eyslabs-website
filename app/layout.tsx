import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EYS LABS | Onder Maker Lab Enk',
  description: 'High quality 3D printing, embedded systems, and custom software development in Norway.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
