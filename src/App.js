import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './pages/menu';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Menu />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
