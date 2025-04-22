import { motion } from 'framer-motion';
import logosbd from '../assets/SBDLogo.svg';

export default function SBD() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }} // Awal animasi
      animate={{ opacity: 1, scale: 1 }} // Akhir animasi
      exit={{ opacity: 0, scale: 0.9 }} // Animasi saat keluar
      transition={{ duration: 0.5 }} // Durasi animasi
    >
      <img src={logosbd} alt="Logo SBD" className="h-32 mx-auto mb-4 logo-circle" />
      <h1 className="text-4xl font-bold">Praktikum Sistem Basis Data (SBD)</h1>
      <div className="text-box mt-6 mx-auto">
        <p>
        Praktikum Sistem Basis Data (SBD) merupakan kegiatan pembelajaran yang dirancang untuk membantu mahasiswa memahami konsep dasar hingga lanjutan mengenai pengelolaan data menggunakan sistem basis data. Dalam praktikum ini, mahasiswa diajarkan cara merancang struktur tabel, melakukan normalisasi data, serta mengimplementasikan berbagai jenis query SQL untuk kebutuhan manipulasi dan pengambilan data.
        </p>
      </div>
    </motion.div>
  );
}