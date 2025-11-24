import { motion } from "framer-motion";
import { Sparkles, Code, Rocket, Zap } from "lucide-react";
import '../celestial.css';

export default function AboutCelestial() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const features = [
    {
      icon: Code,
      title: "Código Limpo",
      description: "Escrevo código elegante, eficiente e fácil de manter.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Inovação",
      description: "Sempre explorando novas tecnologias e abordagens.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização é minha paixão, cada milissegundo importa.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "Design",
      description: "Criando interfaces bonitas e intuitivas para os usuários.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Sobre <span className="celestial-gradient">Mim</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Sou um desenvolvedor apaixonado por criar soluções digitais que combinam
              beleza visual com funcionalidade robusta.
            </p>
          </motion.div>

          {/* Main content */}
          <motion.div className="grid md:grid-cols-2 gap-12 mb-16" variants={itemVariants}>
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Com experiência em desenvolvimento full-stack, tenho trabalhado em diversos
                projetos que vão desde aplicações web modernas até sistemas complexos.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Minha jornada na tecnologia começou com curiosidade e evoluiu para uma
                paixão genuína por criar produtos que fazem diferença.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Acredito que a melhor tecnologia é aquela que resolve problemas reais
                de forma elegante e intuitiva.
              </p>
            </div>

            <motion.div
              className="glass-effect p-8 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 celestial-gradient">Habilidades Principais</h3>
              <ul className="space-y-3">
                {[
                  "React, TypeScript, Node.js",
                  "Design de Interfaces (UI/UX)",
                  "Otimização de Performance",
                  "Arquitetura de Software",
                  "DevOps e Deployment",
                  "Mentoria e Liderança",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Features grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card-glow p-6 rounded-xl hover:shadow-lg transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
