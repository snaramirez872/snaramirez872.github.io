import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="about">
        <h1>About Me</h1>
      </section>
      <section id="projects">
        <h1>Projects</h1>
      </section>
      <section id="contact">
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}

export default App;
