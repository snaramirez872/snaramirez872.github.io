import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="larger-screens">
          <Router>
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
        <div className="mobile-screens">
          <p>This is for Mobile Screens</p>
        </div>
      </div>
  );
}

export default App;
