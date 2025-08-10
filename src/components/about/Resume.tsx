// components/about/ResumeSection.tsx
'use client';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Resume</h2>
          <p className="text-gray-600 mb-8">
            Download my complete resume or view it online to learn more about my experience and qualifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Online
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}