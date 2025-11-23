import Image from "next/image";
import React from "react";

// ProductsSection.jsx
// A self-contained React component (Next.js compatible) using Tailwind CSS and JavaScript.
// This file uses the uploaded image at: /mnt/data/26eb3444-c317-4aa3-9975-b58c7e316c20.png

export default function Products() {
  const products = [
    {
      id: "001",
      img: "https://i.ibb.co.com/9HVxFN3V/pngwing-1.png",
      title: "Car Engine Plug",
      price: "$20.00",
    },
    {
      id: "002",
      img: "https://i.ibb.co.com/zT6X2mHT/88-1.png",
      title: "Car Engine Plug",
      price: "$20.00",
    },
    {
      id: "003",
      img: "https://i.ibb.co.com/HTbRysf9/8-1.png",
      title: "Car Engine Plug",
      price: "$20.00",
    },
    {
      id: "004",
      img: "https://i.ibb.co.com/0VhL1tHV/6-1.png",
      title: "Car Engine Plug",
      price: "$20.00",
    },
    {
      id: "005",
      img: "https://i.ibb.co.com/cK5yV9fR/9-1.png",
      title: "Car Engine Plug",
      price: "$20.00",
    },
    {
      id: "006",
      img: "https://i.ibb.co.com/0yfc2Zmw/5-1.png",
      title: "Car Engine Plug",
      price: "$20.00",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pt-16">
      <div className="text-center">
        <p className="text-sm text-[#FF3811] font-semibold">Popular Products</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
          Browse Our Products
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500">
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomised Words Which Dont Look Even Slightly Believable.
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
                <Image
                  src={p.img}
                  alt={p.title}
                  width={214}
                  height={187}
                  className="object-contain h-full"
                />
              </div>

              <div className="flex items-center gap-1 mb-2">
                {/* star rating (5 stars) */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-orange-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {p.title}
              </h3>
              <p className="text-sm text-red-500 font-medium">
                Price: {p.price}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="inline-block px-3 py-2 rounded-8[px] border border-[#FF3811] text-[#FF3811] text-sm hover:bg-[#FF3811] transition">
          More Products
        </button>
      </div>
    </section>
  );
}
