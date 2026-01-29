import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WaveSeparator from "./components/WaveSeparator";
import LongForm from "./components/LongForm";
import ShortForm from "./components/ShortForm";
import About from "./components/About";
import Contact from "./components/Contact"; // <-- import contact

function App() {
  return (
    <div className="grid-bg min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />
      {/* HOME / HERO */}
      <Hero />
      {/* WORK SECTION */}
      <div className="h-[220px] grid-bg" />
      <WaveSeparator />
      <LongForm /> {/* id="work" yahin hona chahiye */}
      <ShortForm />
      {/* ABOUT SECTION */}
      <About /> {/* id="about" yahin hona chahiye */}
      {/* CONTACT SECTION */}
      <Contact /> {/* <-- yahin add karo */}
    </div>
  );
}

export default App;
