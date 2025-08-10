// components/projects/ProjectGrid.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';

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
  // Add more projects
];

export default function ProjectGrid() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development. 
            Click on any project to view details and access the live demo or source code.
          </p>
        </motion.div>

        <ProjectFilter activeFilter={activeFilter} onFilter={handleFilter} />

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}