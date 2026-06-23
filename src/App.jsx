import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import BackToTop from "./components/BackToTop";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
   
      <Header toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;




