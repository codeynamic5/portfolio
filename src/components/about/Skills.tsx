// components/about/SkillsGrid.tsx
'use client';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 78 },
      { name: "API Design", level: 82 }
    ]
  },
  {
    category: "Tools & Other",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 85 }
    ]
  }
];

export default function SkillsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                {category.category}
              </h3>
              
              {category.skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-blue-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}