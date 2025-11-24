import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import '../celestial.css';

export default function HeaderCelestial() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <motion.header
      className="celestial-header sticky top-0 z-50 border-b border-blue-500/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold celestial-gradient"
          whileHover={{ scale: 1.05 }}
        >
          NC
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Começar
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-cyan-400" />
          ) : (
            <Menu className="w-6 h-6 text-slate-300" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container py-4 space-y-3 border-t border-blue-500/10">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Começar
          </motion.button>
        </div>
      </motion.nav>
    </motion.header>
  );
}
