import { ArrowRight, Github, Linkedin, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import '../celestial.css';

export default function HeroCelestial() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container py-20 flex flex-col items-center justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6 max-w-3xl">
          {/* Animated Avatar with celestial effect */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-28 h-28"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-lg shadow-blue-500/50">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center border border-blue-400/30">
                  <span className="text-5xl font-bold celestial-gradient">
                    NC
                  </span>
                </div>
              </div>
              {/* Orbiting stars */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-cyan-400/50" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main heading with celestial effect */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold text-cyan-400">Bem-vindo ao Cosmos</span>
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="block">Olá, eu sou</span>
              <span className="celestial-gradient text-5xl sm:text-6xl lg:text-7xl font-black">
                NoctuaCoder
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor criativo explorando as galáxias da tecnologia. 
              Criando experiências digitais que brilham como estrelas.
            </p>
          </motion.div>

          {/* CTA Buttons with celestial effect */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="gap-2 celestial-button text-white font-semibold"
              >
                Explorar Projetos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
              >
                Baixar CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with hover effects */}
          <motion.div
            className="flex justify-center gap-4 pt-6"
            variants={itemVariants}
          >
            {[
              { icon: Github, label: "GitHub", color: "hover:text-blue-400" },
              { icon: Linkedin, label: "LinkedIn", color: "hover:text-cyan-400" },
              { icon: Mail, label: "Email", color: "hover:text-purple-400" },
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full border border-slate-700 hover:border-blue-500/50 ${social.color} transition-all`}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <p className="text-sm text-slate-400">Deslize para explorar</p>
            <div className="flex justify-center gap-2 mt-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
