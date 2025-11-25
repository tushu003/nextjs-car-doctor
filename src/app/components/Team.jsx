"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Team() {
  const team = [
    {
      id: 1,
      name: "Car Engine Plug",
      role: "Engine Expert",
      img: "https://i.ibb.co.com/hRLw5jgs/1.jpg",
    },
    {
      id: 2,
      name: "Car Engine Plug",
      role: "Engine Expert",
      img: "https://i.ibb.co.com/hRLw5jgs/1.jpg",
    },
    {
      id: 3,
      name: "Car Engine Plug",
      role: "Engine Expert",
      img: "https://i.ibb.co.com/hRLw5jgs/1.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 relative">
      <div className="flex items-center justify-between absolute left-0 top-1/2 -translate-y-1/2 w-full px-2 z-10">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center mr-8 justify-center bg-white border rounded-full shadow hover:bg-gray-100"
        >
          ←
        </button>

        <button
          onClick={next}
          className="w-10 h-10 flex items-center ml-8 justify-center bg-red-500 text-white border rounded-full shadow hover:bg-red-600"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((person, i) => (
          <div
            key={person.id}
            className={`bg-white border rounded-xl shadow-md overflow-hidden transition-opacity duration-300 ${
              i === index ? "opacity-100" : "opacity-40"
            }`}
          >
            <Image
              src={person.img}
              alt={person.name}
              width={314}
              height={272}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.role}</p>

              <div className="flex justify-center gap-3 mt-3">
                <a className="text-blue-600 text-xl">●</a>
                <a className="text-blue-500 text-xl">●</a>
                <a className="text-pink-500 text-xl">●</a>
                <a className="text-blue-700 text-xl">●</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
