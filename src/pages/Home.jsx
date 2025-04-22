import { Link } from 'react-router-dom';
import logosbd from '../assets/SBDLogo.svg';
import logodmj from '../assets/DMJLogo.svg';
import logoos from '../assets/OSLogo.svg';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }} // Awal animasi
      animate={{ opacity: 1, scale: 1 }} // Akhir animasi
      exit={{ opacity: 0, scale: 0.9 }} // Animasi saat keluar
      style={{
        padding: '2rem 0', // Tambahkan padding atas dan bawah
        textAlign: 'center', // Teks rata tengah
      }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <h1 className="text-5xl font-bold" style={{ color: 'var(--text-color)' }}>
          Welcome to Network Laboratory
        </h1>
        <p className="mt-6 text-lg" style={{ color: 'var(--text-color)' }}>
          Select one to see the details.
        </p>
      </div>
      <div
        className="praktikum-container"
        style={{
          display: 'flex',
          gap: '2rem', // Tambahkan jarak antar box
          justifyContent: 'center', // Posisikan elemen di tengah
        }}
      >
        {/* Praktikum SBD */}
        <div
          className="praktikum-box"
          style={{
            backgroundColor: '#f9f9f9', // Warna latar belakang box
            border: '1px solid #ccc', // Border box
            borderRadius: '12px', // Radius sudut box
            padding: '1.5rem', // Padding dalam box
            textAlign: 'center', // Teks rata tengah
            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)', // Tambahkan bayangan
            width: '200px', // Lebar box diperbesar
          }}
        >
          <Link to="/sbd">
            <img src={logosbd} alt="Logo SBD" className="h-28" /> {/* Perbesar gambar */}
          </Link>
          <p className="praktikum-text text-lg font-semibold mt-4">Sistem Basis Data (SBD)</p>
        </div>

        {/* Praktikum DMJ */}
        <div
          className="praktikum-box"
          style={{
            backgroundColor: '#f9f9f9',
            border: '1px solid #ccc',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
            width: '200px',
          }}
        >
          <Link to="/dmj">
            <img src={logodmj} alt="Logo DMJ" className="h-28" /> {/* Perbesar gambar */}
          </Link>
          <p className="praktikum-text text-lg font-semibold mt-4">Dasar Manajemen Jaringan (DMJ)</p>
        </div>

        {/* Praktikum OS */}
        <div
          className="praktikum-box"
          style={{
            backgroundColor: '#f9f9f9',
            border: '1px solid #ccc',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
            width: '200px',
          }}
        >
          <Link to="/os">
            <img src={logoos} alt="Logo OS" className="h-28" /> {/* Perbesar gambar */}
          </Link>
          <p className="praktikum-text text-lg font-semibold mt-4">Operating System (OS)</p>
        </div>
      </div>
    </motion.div>
  );
}