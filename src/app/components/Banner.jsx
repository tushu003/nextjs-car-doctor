import Image from "next/image";
import React from "react";
import banner from "../../../public/assets/images/banner/bannar.jpg";

// app/page.jsx
// Next.js (App Router) page that reproduces the hero from the screenshot using Tailwind CSS
// Place the image file `cb158682-8e45-4ba4-9519-890abce92ffe.png` in your project's `public/` folder

export const revalidate = 0;

export default function Banner() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-1">
      <section className="w-full ">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          {/* Background image */}
          <div
            className="h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] bg-cover bg-center banner"
            // style={{
            //   backgroundImage:
            //     "url('../../../../')",
            // }}
          >
            {/* Dark gradient overlay on left to improve text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent"></div>

            {/* Content area */}
            <div className="relative z-10 flex items-center h-full px-6 md:px-12">
              <div className="max-w-2xl text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-md">
                  Affordable
                  <br />
                  Price For Car
                  <br />
                  Servicing
                </h2>

                <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-xl">
                  Reliable car service and maintenance using only certified
                  technicians. Fast turnaround and a great warranty on all
                  repairs.
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#FF3811] hover:bg-orange-400 text-white font-medium shadow-md"
                  >
                    Discover More
                  </a>

                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] border border-white/30 text-white/90 bg-white/10 hover:bg-white/20"
                  >
                    Latest Projects
                  </a>
                </div>
              </div>

              {/* Right side small carousel/controls - shown visually like screenshot */}
              <div className="ml-auto hidden md:flex flex-col items-center gap-4">
                <div className="w-48 h-32 rounded-xl overflow-hidden shadow-lg">
                  {/* small preview card (optional) */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('/cb158682-8e45-4ba4-9519-890abce92ffe.png')",
                    }}
                  />
                </div>

                {/* pagination dots */}
                <div className="flex flex-col items-center gap-3">
                  <button className="w-3 h-3 rounded-full bg-white/90 shadow-sm"></button>
                  <button className="w-3 h-3 rounded-full bg-white/50 shadow-sm"></button>
                  <button className="w-3 h-3 rounded-full bg-white/50 shadow-sm"></button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative rounded corner and side arrows for larger screens */}
          <div className="absolute right-6 bottom-6 hidden lg:flex items-center gap-3">
            <button
              aria-label="previous"
              className="w-10 h-10 rounded-full bg-white/90 text-gray-800 grid p-2 place-items-center shadow"
            >
              ‹
            </button>
            <button
              aria-label="next"
              className="w-10 h-10 rounded-full bg-[#FF3811] text-white p-2 grid place-items-center shadow"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
