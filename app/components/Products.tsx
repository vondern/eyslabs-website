import { PRODUCTS } from '../data/products';

export default function Products() {
  return (
    <section id="products" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
            Produkter
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mt-3">Våre Produkter</h2>
          <p className="mt-4 text-slate-400">
            Spesialutviklede 3D-prints, custom elektronikk og tilbehør fra EYS LABS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="h-48 w-full overflow-hidden bg-slate-900 relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-3 right-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs px-2.5 py-1 rounded-full font-medium">
                  {product.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                    <span className="text-lg font-bold text-cyan-400">{product.price}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">
                    {product.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-xs text-slate-300 flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={product.buyUrl || '#contact'}
                  className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-center transition-colors block"
                >
                  Bestill / Be om info
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
