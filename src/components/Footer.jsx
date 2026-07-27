import { FaHeart, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-yellow-400/30 shadow-inner">

      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Left */}

<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <h2 className="text-2xl font-bold text-yellow-400">
    Sandhiya Shree
  </h2>

  <p className="text-yellow-400/80"> 
    Aspiring Data Analyst
  </p>

</motion.div>
{/* Center */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="text-center"
>

  <p className="text-gray-500 text-sm">
    © 2026 Sandhiya Shree
  </p>

</motion.div>
{/* Right */}

<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex items-center gap-4"
>

  <a
    href="mailto:sandhiyashreesaravanakumar@gmail.com"
    className="text-gray-400 hover:text-yellow-400 transition duration-300"
  >
    <FaEnvelope size={18} />
  </a>

  <a
    href="https://www.linkedin.com/in/sandhiya-shree-s"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-yellow-400 transition duration-300"
  >
    <FaLinkedin size={18} />
  </a>

  <a
    href="https://github.com/sandhiyashreesandhiya2006-droid"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-yellow-400 transition duration-300"
  >
    <FaGithub size={18} />
  </a>

  <span className="hidden md:block text-gray-600">|</span>

  <p className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
    Built with React • Vite • Tailwind CSS
    
  </p>

</motion.div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;