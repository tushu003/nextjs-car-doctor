import React from 'react'

export default function Testimonial() {
    const Testimonial =[
    {
        id: 1,
        name: "Awlad Hossain",
        role: "Businessman",
        avatar: "https://i.pravatar.cc/100?img=32",
        text:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        rating: 5,
        },
        {
        id: 2,
        name: "Awlad Hossain",
        role: "Businessman",
        avatar: "https://i.pravatar.cc/100?img=12",
        text:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        rating: 5,
        },
        ];
  return (
    <div className='mb-16'>
                  <p className='text-[#FF3811] font-bold text-center'>Testimonial</p>
        <h2 className='text-black font-bold text-center text-2xl mb-1'>Why Choose Us</h2>
        <p className='text-center text-gray-600 mb-6'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
<header className="flex items-center gap-4">
<img src={testimonials[0].avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
<div>
<p className="font-semibold text-gray-800">{testimonials[0].name}</p>
<p className="text-xs text-gray-400">{testimonials[0].role}</p>
</div>
<div className="ml-auto text-4xl text-pink-100">“</div>
</header>
<p className="mt-6 text-sm text-gray-500 leading-relaxed">{testimonials[0].text}</p>
<footer className="mt-6">
<div className="flex items-center gap-1">
{Array.from({ length: testimonials[0].rating }).map((_, i) => (
<svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-amber-400">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.378-2.455a1 1 0 00-1.176 0L5.227 17.06c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L1.233 7.387c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69L8.536 2.927z" />
</svg>
))}
</div>
</footer>
</article>


{/* Right card (active) */}
<article className="flex-1 bg-white rounded-2xl shadow-lg p-8 border border-transparent transition transform scale-100">
<header className="flex items-center gap-4">
<img src={testimonials[index].avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
<div>
<p className="font-semibold text-gray-800">{testimonials[index].name}</p>
<p className="text-xs text-gray-400">{testimonials[index].role}</p>
</div>
<div className="ml-auto text-4xl text-pink-100">“</div>
</header>
<p className="mt-6 text-sm text-gray-500 leading-relaxed">{testimonials[index].text}</p>
<footer className="mt-6">
<div className="flex items-center gap-1">
{Array.from({ length: testimonials[index].rating }).map((_, i) => (
<svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-amber-400">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.378-2.455a1 1 0 00-1.176 0L5.227 17.06c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L1.233 7.387c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69L8.536 2.927z" />
</svg>
))}
</div>
</footer>
</article>


{/* Left nav circle */}
<button
onClick={prev}
aria-label="previous"
className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center border border-gray-100 hover:scale-105 transition"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-gray-500">
<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>
</button>


{/* Right nav circle (active) */}
<button
onClick={next}
aria-label="next"
className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-rose-500 shadow flex items-center justify-center text-white hover:scale-105 transition"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>
</button>
</div>
</section>
</main>
    </div>
  )
}
