import Image from "next/image";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import GallerySlide from "./components/GallerySlide";
import Partners from "./components/Partners";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import SocialMedia from "./components/SocialMedia";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Hero />
        <Marquee />
        <GallerySlide />
        <Partners />
        <About />
        <Services />
        <Portfolio />
        <Projects />
        <SocialMedia />
        <Testimonial />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}
