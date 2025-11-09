import Image from "next/image";
import Banner from "./components/Banner";
import About from "./components/About";
import InfoStrip from "./components/InfoStrip";

export default function Home() {
  return (
  <div>
    <Banner />
    <About />
    <InfoStrip />
  </div>
  );
}
