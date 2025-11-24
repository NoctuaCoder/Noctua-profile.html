import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import '../celestial.css';

export default function ProjectsCelestial() {
  const projects = [
    {
      title: "SpectraHypr",
      description: "Dotfiles inovadores para Hyprland com estética Aetherial Glow. Configurações avançadas de animações e transparência.",
      tags: ["Hyprland", "Dotfiles", "Linux", "CSS"],
      gradient: "from-blue-500 to-cyan-500",
      link: "https://github.com/NoctuaCoder/SpectraHypr",
    },
    {
      title: "Noctua Profile",
      description: "Página de perfil pessoal com design celestial. Showcasing de projetos e habilidades com animações fluidas.",
      tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      gradient: "from-purple-500 to-pink-500",
      link: "#",
    },
    {
      title: "Projeto em Desenvolvimento",
      description: "Uma aplicação web inovadora que combina design moderno com funcionalidade robusta.",
      tags: ["React", "Node.js", "PostgreSQL", "Docker"],
      gradient: "from-yellow-500 to-orange-500",
      link: "#",
    },
  ];

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

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Meus <span className="celestial-gradient">Projetos</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Explorando as galáxias da criatividade e inovação através de código.
            </p>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="card-glow rounded-xl overflow-hidden group h-full flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Project header with gradient */}
                <motion.div
                  className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={{
                      x: [0, 100, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>

                {/* Project content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-cyan-400 border border-cyan-500/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.link}
                      className="flex-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </Button>
                    </motion.a>
                    <motion.a
                      href={project.link}
                      className="flex-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
