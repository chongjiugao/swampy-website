import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import FunFacts from './components/FunFacts';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Gallery />
        </ScrollReveal>
        <ScrollReveal>
          <FunFacts />
        </ScrollReveal>
        <ScrollReveal>
          <Guestbook />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}

export default App;
