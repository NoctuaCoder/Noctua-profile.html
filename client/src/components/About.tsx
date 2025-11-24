export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Sobre Mim</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou um desenvolvedor apaixonado por criar soluções digitais
                inovadoras e impactantes. Com experiência em desenvolvimento
                full-stack, tenho trabalhado em diversos projetos que combinam
                design elegante com funcionalidade robusta.
              </p>

              <p>
                Minha jornada na tecnologia começou com curiosidade sobre como
                as coisas funcionam. Desde então, desenvolvi habilidades em
                múltiplas linguagens de programação e frameworks modernos,
                sempre buscando aprender e evoluir.
              </p>

              <p>
                Acredito que bom código não é apenas funcional, mas também
                legível, mantível e escalável. Valorizo a colaboração em equipe
                e estou sempre aberto a novos desafios e oportunidades de
                crescimento.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-500">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Anos de Experiência
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-500">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projetos Concluídos
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-500">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">
                  Clientes Satisfeitos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
