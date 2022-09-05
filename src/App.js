import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TempLanding from './pages/TempLanding';
import CounterPage from './pages/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/temp" element={<TempLanding />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
