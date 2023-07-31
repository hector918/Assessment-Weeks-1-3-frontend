import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './pages/menu';
import React from 'react';
import ItemDetail from './compoments/item-detail';
function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/item/:id" element={<ItemDetail />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
