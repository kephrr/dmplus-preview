import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Construction, Clock, Mail, ArrowLeft, Home } from "lucide-react";

export default function MaintenancePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon Animation */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-8 shadow-xl"
          >
            <Construction className="w-12 h-12 text-white" />
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page en Maintenance
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8">
            Nous travaillons actuellement pour améliorer cette partie du site
          </p>

          

          {/* Progress Animation */}
          <div className="mb-8">
            <div className="flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-3 h-3 bg-blue-500 rounded-full"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Merci de votre patience...
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </button>
            
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              Accueil
            </button>
          </div>

          {/* Footer Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              DM+ Group - Service en maintenance
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Nous nous excusons pour la gêne occasionnée
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
