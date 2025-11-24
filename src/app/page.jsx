import Banner from "./components/Banner";
import About from "./components/About";
import InfoStrip from "./components/InfoStrip";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Testimonial from "./components/Testimonial";
import Products from "./components/Products";
import Team from "./components/Team";

export default function Home() {
  return (
  <div>
    <Banner />
    <About />
    <Services />
    <InfoStrip />
    <Products />
    <Team />
    <WhyChoose />
    <Testimonial />
  </div>
  );
}