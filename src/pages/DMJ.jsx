import { motion } from 'framer-motion';
import logodmj from '../assets/DMJLogo.svg';

export default function DMJ() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }} // Awal animasi
      animate={{ opacity: 1, scale: 1 }} // Akhir animasi
      exit={{ opacity: 0, scale: 0.9 }} // Animasi saat keluar
      transition={{ duration: 0.5 }} // Durasi animasi
    >
      <img src={logodmj} alt="Logo DMJ" className="h-32 mx-auto mb-4 " />
      <h1 className="text-4xl font-bold">Praktikum Dasar Manajemen Jaringan (DMJ)</h1>
      <div className="text-box mt-6 mx-auto">
        <p>
        Praktikum Desain dan Manajemen Jaringan (DMJ) merupakan kegiatan pembelajaran terapan yang berfokus pada perancangan, implementasi, serta pengelolaan jaringan komputer menggunakan perangkat dan simulator jaringan seperti Cisco Packet Tracer. 
        </p>
      </div>
    </motion.div>
  );
}