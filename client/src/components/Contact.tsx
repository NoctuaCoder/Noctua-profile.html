import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:seu.email@exemplo.com",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Contato</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
            <p className="text-muted-foreground mt-4">
              Vamos conversar! Deixe uma mensagem ou entre em contato através
              das redes sociais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem aqui..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-bold">Informações de Contato</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Email:</strong> seu.email@exemplo.com
                  </p>
                  <p>
                    <strong>Localização:</strong> São Paulo, Brasil
                  </p>
                  <p>
                    <strong>Disponibilidade:</strong> Aberto a oportunidades
                  </p>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-bold">Redes Sociais</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={link.label}
                        variant="outline"
                        className="gap-2"
                        asChild
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="w-4 h-4" />
                          {link.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
