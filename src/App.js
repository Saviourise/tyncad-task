import AboutSection from "./components/aboutSection";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import WhatWeDo from "./components/whatWeDo";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <WhatWeDo />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
