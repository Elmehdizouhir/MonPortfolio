import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
function App() {
  
  return (
  <div className="min-vh-100 bg-light d-flex flex-column">
  <Header />
  <main className="flex-grow-1">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Services />
    <Contact />
  </main>
  <Footer />
</div>

     
  );
}

export default App;