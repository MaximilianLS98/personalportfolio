import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Main from './pages/Main';
import CounterPage from './pages/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
