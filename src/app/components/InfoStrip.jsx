// components/InfoStrip.jsx
// A reusable InfoStrip component matching the provided design.
// Usage: place this file in `components/InfoStrip.jsx` and import it into `app/page.jsx` or wherever needed.

import Image from "next/image";
import timeTable from "../../../public/assets/icons/timetable.png";
import phone from "../../../public/assets/icons/phone.png";
import location from "../../../public/assets/icons/location.png";

export default function InfoStrip() {
    return (
      <div className=" md:mx-20 lg:mx-3">
        <div className="bg-gray-900 text-white rounded-[8px] p-6 lg:py-12 md:p-8 shadow-sm">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
  
              {/* Item 1 */}
              <div className="flex items-center gap-4">
                <div className=" rounded-md grid place-items-center">
                  {/* calendar + clock icon */}
                 <Image src={timeTable} alt="timetable" width={36} height={36}/>
                </div>
                <div>
                  <p className="text-xs text-white/80 mb-1">We are open monday-friday</p>
                  <p className="font-semibold text-sm md:text-base">7:00 am - 9:00 pm</p>
                </div>
              </div>
  
              {/* Item 2 */}
              <div className="flex items-center gap-4">
                <div className="rounded-m grid place-items-center">
                  {/* phone/chat icon */}
                  <Image src={phone} alt="timetable" width={36} height={36}/>
                </div>
                <div>
                  <p className="text-xs text-white/80 mb-1">Have a question?</p>
                  <p className="font-semibold text-sm md:text-base">+2546 251 2658</p>
                </div>
              </div>
  
              {/* Item 3 */}
              <div className="flex items-center gap-4">
                <div className=" rounded-md grid place-items-center">
                  {/* location icon */}
                  <Image src={location} alt="timetable" width={36} height={36}/>
                </div>
                <div>
                  <p className="text-xs text-white/80 mb-`">Need a repair? our address</p>
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
  