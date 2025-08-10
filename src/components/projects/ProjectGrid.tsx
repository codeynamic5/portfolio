// components/projects/ProjectGrid.tsx
'use client';
import { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://your-ecommerce-demo.com",
    featured: true,
    category: "fullstack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "/projects/taskapp.jpg",
    technologies: ["Next.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/yourusername/taskapp",
    liveUrl: "https://your-taskapp-demo.com",
    featured: false,
    category: "frontend"
  }
];

export default function ProjectGrid() {
  const [filteredProjects] = useState(projectsData);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={project.githubUrl} className="px-4 py-2 bg-gray-800 text-white rounded text-sm">
                    GitHub
                  </a>
                  <a href={project.liveUrl} className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}