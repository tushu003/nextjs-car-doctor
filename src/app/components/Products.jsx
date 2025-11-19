import React from 'react';

// ProductsSection.jsx
// A self-contained React component (Next.js compatible) using Tailwind CSS and JavaScript.
// This file uses the uploaded image at: /mnt/data/26eb3444-c317-4aa3-9975-b58c7e316c20.png

export default function Products() {
  const products = [
    { id: 1, title: 'Car Engine Plug', price: '$20.00' },
    { id: 2, title: 'Car Air Filter', price: '$20.00' },
    { id: 3, title: 'Cools Led Light', price: '$20.00' },
    { id: 4, title: 'Cools Led Light', price: '$20.00' },
    { id: 5, title: 'Cools Led Light', price: '$20.00' },
    { id: 6, title: 'Cools Led Light', price: '$20.00' },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center">
        <p className="text-sm text-red-500 font-semibold">Popular Products</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Browse Our Products</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500">
          The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <div className="p-6 flex flex-col items-center">
              <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                {/* Using the uploaded image file as the product image */}
                <img
                  src="/mnt/data/26eb3444-c317-4aa3-9975-b58c7e316c20.png"
                  alt={p.title}
                  className="object-contain h-full"
                />
              </div>

              <div className="flex items-center gap-1 mb-2">
                {/* star rating (5 stars) */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-orange-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-gray-800 mb-1">{p.title}</h3>
              <p className="text-sm text-red-500 font-medium">{p.price}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="inline-block px-5 py-2 rounded-full border border-red-200 text-red-500 text-sm hover:bg-red-50 transition">
          More Products
        </button>
      </div>
    </section>
  );
}

/*
How to use:
1. Save this file as `components/ProductsSection.jsx` in your Next.js project.
2. Make sure Tailwind CSS is installed and configured (the default Next + Tailwind setup).
3. Import and use in `pages/index.js`:

   import ProductsSection from '../components/ProductsSection';
   export default function Home(){
     return <ProductsSection />;
   }

4. The component references the uploaded image at `/mnt/data/26eb3444-c317-4aa3-9975-b58c7e316c20.png` (already included in this conversation). In a production app you should copy product images to `public/` and use `/images/...` paths instead.
*/