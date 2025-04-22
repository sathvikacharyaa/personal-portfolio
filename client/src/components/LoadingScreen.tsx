import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <motion.div 
          className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full"
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity,
            duration: 1,
            ease: "linear"
          }}
        />
        <motion.p 
          className="mt-4 text-lg font-medium text-gray-800"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </div>
  );
}
