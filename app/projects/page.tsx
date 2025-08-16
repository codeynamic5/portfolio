"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern payment integration and admin dashboard.",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Node.js, featuring user authentication, product management, shopping cart functionality, Stripe payment integration, and a complete admin dashboard for inventory management. The platform includes advanced features like product search, filtering, user reviews, and order tracking.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
    category: "Full-Stack",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    longDescription:
      "A sophisticated task management application that enables teams to collaborate effectively. Features include real-time updates using WebSockets, drag-and-drop task organization, team member assignments, project timelines, file attachments, and comprehensive reporting. Built with a focus on user experience and performance.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Express", "MongoDB", "Socket.io", "Material-UI", "JWT"],
    category: "Full-Stack",
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-manager",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather application with location-based forecasts and data visualization.",
    longDescription:
      "An elegant weather dashboard that provides detailed weather information with beautiful data visualizations. Features include current weather conditions, 7-day forecasts, interactive maps, weather alerts, and historical data charts. The app uses geolocation for automatic location detection and supports multiple cities.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vuex", "SCSS"],
    category: "Frontend",
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/username/weather-dashboard",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio site with smooth animations and modern design.",
    longDescription:
      "A carefully crafted portfolio website showcasing creative work and technical skills. Features include smooth scroll animations, interactive project galleries, contact forms, and a content management system. The site is fully responsive and optimized for performance across all devices.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Contentful", "Vercel"],
    category: "Frontend",
    liveUrl: "https://example-portfolio.com",
    githubUrl: "https://github.com/username/portfolio-site",
  },
  {
    title: "API Gateway Service",
    description: "Microservices API gateway with authentication, rate limiting, and monitoring.",
    longDescription:
      "A robust API gateway service designed to handle microservices architecture. Includes features like JWT authentication, rate limiting, request/response transformation, load balancing, health checks, and comprehensive logging. Built with scalability and security as primary concerns.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "Express", "Redis", "Docker", "Nginx", "Prometheus"],
    category: "Backend",
    githubUrl: "https://github.com/username/api-gateway",
  },
  {
    title: "Data Analytics Pipeline",
    description: "ETL pipeline for processing and analyzing large datasets with real-time insights.",
    longDescription:
      "A comprehensive data analytics pipeline that processes large volumes of data from multiple sources. Features include data extraction from various APIs, transformation and cleaning processes, real-time analytics, automated reporting, and interactive dashboards for data visualization.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "Grafana", "Pandas"],
    category: "Backend",
    githubUrl: "https://github.com/username/analytics-pipeline",
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking interface with biometric authentication and transaction management.",
    longDescription:
      "A secure mobile banking application with a focus on user experience and security. Features include biometric authentication, account management, transaction history, bill payments, money transfers, and push notifications. The app follows banking security standards and includes fraud detection mechanisms.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "TypeScript", "Firebase", "Plaid API", "Expo"],
    category: "Mobile",
    liveUrl: "https://example-banking-app.com",
    githubUrl: "https://github.com/username/banking-app",
  },
  {
    title: "Fitness Tracker",
    description: "Cross-platform fitness app with workout tracking and social features.",
    longDescription:
      "A comprehensive fitness tracking application that helps users monitor their health and fitness goals. Features include workout logging, progress tracking, social challenges, nutrition tracking, integration with wearable devices, and personalized workout recommendations based on user preferences and goals.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit"],
    category: "Mobile",
    liveUrl: "https://example-fitness.com",
    githubUrl: "https://github.com/username/fitness-tracker",
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">My Projects</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A showcase of technical solutions and creative implementations
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Featured Projects</h2>
                <p className="text-lg text-muted-foreground">Highlighted work that showcases my best capabilities</p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ScrollAnimation key={project.title} delay={index * 200}>
                  <ProjectCard {...project} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">All Projects</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore my work across different technologies and domains
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={`${project.title}-${activeCategory}`} delay={index * 100}>
                <ProjectCard {...project} />
              </ScrollAnimation>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <ScrollAnimation>
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No projects found in this category.</p>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how I can help bring your ideas to life with clean code and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                <Link href="/connect">Start a Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </PageLayout>
  )
}
