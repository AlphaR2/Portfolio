import Nav from "./components/navigation/Nav";
import Home from "./components/homepage/Home";
import About from "./components/about/About";
import Projects from "./components/works/Projects";
import Contact from "./components/contact/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Home />
      <Nav />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
