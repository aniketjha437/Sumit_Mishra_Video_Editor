import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LongForm from "./components/LongForm";
import ShortForm from "./components/ShortForm";
import About from "./components/About";


function App() {
  return (
    <div className="grid-bg min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />
      {/* HOME / HERO */}
      <Hero />
      {/* WORK SECTION */}
    
      
      
      <ShortForm />
      {/* ABOUT SECTION */}
      <About /> {/* id="about" yahin hona chahiye */}
      {/* CONTACT SECTION */}
      
    </div>
  );
}

export default App;
