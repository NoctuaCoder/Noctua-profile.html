import { Card } from "@/components/ui/card";

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Vue.js",
      "HTML/CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "CI/CD", "AWS", "Linux", "Webpack"],
  },
  {
    category: "Design & UX",
    items: ["Figma", "UI Design", "Responsive Design", "Accessibility", "UX Research"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Habilidades</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
            <p className="text-muted-foreground mt-4">
              Tecnologias e ferramentas que domino e utilizo regularmente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="p-6">
                <h3 className="text-lg font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Proficiency Levels */}
          <div className="space-y-6 pt-8">
            <h3 className="text-xl font-bold">Nível de Proficiência</h3>
            <div className="space-y-4">
              {[
                { name: "JavaScript/TypeScript", level: 95 },
                { name: "React", level: 90 },
                { name: "Node.js", level: 85 },
                { name: "Design System", level: 80 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
