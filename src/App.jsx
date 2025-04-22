import React from 'react';
import './App.css';
import logo from './assets/LOGO.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import halaman
import Home from './pages/Home';
import SBD from './pages/SBD';
import DMJ from './pages/DMJ';
import OS from './pages/OS';

export default function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-white text-gray-800 font-sans overflow-auto m-0 p-0">
        {/* Header */}
        <header className="w-full bg-white border-b py-4 flex justify-between items-center px-6 shadow">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-4">
              <img src={logo} alt="Netlab Logo" className="h-10" />
              <h1 className="text-xl font-bold">Network Laboratory</h1>
            </Link>
          </div>
          <nav className="space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/sbd" className="nav-link">SBD</Link>
            <Link to="/dmj" className="nav-link">DMJ</Link>
            <Link to="/os" className="nav-link">OS</Link>
          </nav>
        </header>

        <main
          className="flex flex-col items-center justify-start px-4 py-10 w-full h-full"
          style={{
            minHeight: 'calc(100vh - 6rem)', // Kurangi tinggi untuk menaikkan footer
            display: 'flex',
            justifyContent: 'flex-start', // Posisikan konten lebih ke atas
            alignItems: 'center', // Posisikan konten di tengah secara horizontal
            paddingTop: '4rem', // Tambahkan jarak dari header
          }}
        >
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sbd" element={<SBD />} />
              <Route path="/dmj" element={<DMJ />} />
              <Route path="/os" element={<OS />} />
            </Routes>
          </AnimatePresence>
        </main>

        
      </div>
    </Router>
  );
}
