import React from 'react';

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

interface ProductsProps {
  products: Product[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {products.map((product) => (
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
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-white">{product.title}</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {product.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md"
                  >
                    • {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
