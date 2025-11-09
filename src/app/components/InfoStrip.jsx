// components/InfoStrip.jsx
// A reusable InfoStrip component matching the provided design.
// Usage: place this file in `components/InfoStrip.jsx` and import it into `app/page.jsx` or wherever needed.

export default function InfoStrip() {
    return (
      <div className=" md:mx-20 lg:mx-3">
        <div className="bg-gray-900 text-white rounded-[8px] p-6 lg:py-12 md:p-8 shadow-sm">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
  
              {/* Item 1 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-white/10 grid place-items-center">
                  {/* calendar + clock icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M7 11h6v2H7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-1">We are open monday-friday</p>
                  <p className="font-semibold text-sm md:text-base">7:00 am - 9:00 pm</p>
                </div>
              </div>
  
              {/* Item 2 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-white/10 grid place-items-center">
                  {/* phone/chat icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v11A1.5 1.5 0 0 1 20.5 16H6L2 20V3.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-1">Have a question?</p>
                  <p className="font-semibold text-sm md:text-base">+2546 251 2658</p>
                </div>
              </div>
  
              {/* Item 3 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-white/10 grid place-items-center">
                  {/* location icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9a5 5 0 1 1 10 0c0 2.76-2.24 5-5 5s-5-2.24-5-5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-`">Need a repair? our address</p>
                  <p className="font-semibold text-sm md:text-base">Liza Street, New York</p>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Example usage in app/page.jsx (simple):
  /*
  import InfoStrip from '@/components/InfoStrip'
  
  export default function Page() {
    return (
      <main>
        <InfoStrip />
        <!-- rest of page -->
      </main>
    )
  }
  */
  