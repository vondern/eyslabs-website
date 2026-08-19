import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products'; // <-- Yeni Eklendi
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Products />
      <Footer />
    </main>
  );
}
