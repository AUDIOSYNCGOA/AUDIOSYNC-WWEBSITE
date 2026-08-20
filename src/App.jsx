import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      
      <a
        href="https://wa.me/918446055904"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with AUDIOSYNC on WhatsApp"
      >
        💬
      </a>
    </>
  );
}

export default App;