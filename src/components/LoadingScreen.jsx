import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
    >
      <div className="text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto"
        />

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-8 text-3xl font-bold text-yellow-400"
        >
          Sandhiya Shree
        </motion.h1>

        <p className="text-gray-400 mt-3">
          Loading Portfolio...
        </p>

      </div>
    </motion.div>
  );
}