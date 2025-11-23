// app/page.jsx
// Next.js App Router page that reproduces the "About Us" section shown in the screenshot
// Put the image `9fe2bf20-3ada-4ae3-878c-b9c27de54d7f.png` in your project's `public/` folder
import Image from "next/image";
import person from "../../../public/assets/images/about_us/person.jpg";
import parts from "../../../public/assets/images/about_us/parts.jpg";

export const revalidate = 0;

export default function About() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-8 py-3">
      <section className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: overlapping images */}
          <div className="relative flex justify-between lg:justify-end">
            <div className="w-[320px] md:w-[380px] lg:w-[420px] h-auto rounded-lg overflow-hidden shadow-xl">
              <Image
                src={person}
                alt="Mechanic"
                className="w-full h-full object-cover"
              />
            </div>

            {/* small overlapping card */}
            <div className="absolute left-8 bottom-[-36px] md:left-12 md:bottom-[-48px] w-48 md:w-56 bg-white rounded-lg p-2 shadow-md">
              <Image
                src={parts}
                alt="Parts"
                className="w-full h-36 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Right: text content */}
          <div className="pt-6 lg:pt-0">
            <p className="text-sm font-semibold text-[#FF3811]">About Us</p>

            <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              We are qualified
              <span className="block">& of experience</span>
              <span className="block">in this field</span>
            </h3>

            <p className="mt-6 text-sm md:text-base text-gray-500 max-w-xl">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which donnot look even
              slightly believable.
            </p>

            <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl">
              The Majority Have Suffered Alteration In Some Form, By Injected
              Humour, Or Randomised Words Which Do not Look Even Slightly
              Believable.
            </p>

            <div className="mt-8">
              <a
                href="#more"
                className="inline-block px-6 py-3 rounded-md bg-[#FF3811] hover:bg-red-600 text-white font-semibold shadow-lg"
              >
                Get More Info
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
