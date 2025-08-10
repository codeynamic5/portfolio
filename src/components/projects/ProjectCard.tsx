// components/projects/ProjectCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </motion.a>
          
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}