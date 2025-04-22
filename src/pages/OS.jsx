import { motion } from 'framer-motion';
import logoos from '../assets/OSLogo.svg';

export default function OS() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }} // Awal animasi
      animate={{ opacity: 1, scale: 1 }} // Akhir animasi
      exit={{ opacity: 0, scale: 0.9 }} // Animasi saat keluar
      transition={{ duration: 0.5 }} // Durasi animasi
    >
      <img src={logoos} alt="Logo OS" className="h-32 mx-auto mb-4 " />
      <h1 className="text-4xl font-bold">Praktikum Operating System (OS)</h1>
      <div className="text-box mt-6 mx-auto">
        <p>
        Praktikum Sistem Operasi secara umum bertujuan untuk memberikan pemahaman praktis tentang bagaimana sistem operasi bekerja di level rendah, khususnya dalam pengelolaan proses, komunikasi antar proses (IPC), manajemen memori, serta file system. Melalui praktikum ini, mahasiswa belajar langsung menggunakan system call seperti fork(), pipe(), exec(), open(), read(), dan write() untuk mengimplementasikan konsep-konsep dasar OS, seperti multitasking, interaksi parent-child process, serta komunikasi melalui unnamed dan named pipe. 
        </p>
      </div>
    </motion.div>
  );
}