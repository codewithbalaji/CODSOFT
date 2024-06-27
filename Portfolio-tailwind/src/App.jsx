import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
    
      <NavBar/>
      <Hero/>
      <Portfolio/>
      <Experience/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}