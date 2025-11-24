import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import '../celestial.css';

export default function FooterCelestial() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/NoctuaCoder", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contato@example.com", label: "Email" },
  ];

  return (
    <motion.footer
      className="relative border-t border-blue-500/10 bg-slate-950/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold celestial-gradient mb-2">NoctuaCoder</h3>
              <p className="text-slate-400 text-sm">
                Explorando as galáxias da tecnologia e criatividade.
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {[
                  { label: "Início", href: "#home" },
                  { label: "Sobre", href: "#about" },
                  { label: "Projetos", href: "#projects" },
                  { label: "Contato", href: "#contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold text-white mb-4">Conecte-se</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Bottom section */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-slate-400 text-sm">
              © {currentYear} NoctuaCoder. Todos os direitos reservados.
            </p>
            <motion.p
              className="text-slate-400 text-sm flex items-center gap-1"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> e código
            </motion.p>
            <p className="text-slate-400 text-sm">
              Hospedado em <span className="text-cyan-400">GitHub Pages</span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
