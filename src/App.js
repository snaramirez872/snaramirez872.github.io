import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
      <div className="App">
        <NavBar />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
  );
}

export default App;
