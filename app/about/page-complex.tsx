import { PageLayout } from "@/components/page-layout"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SkillCard } from "@/components/skill-card"
import { TimelineItem } from "@/components/timeline-item"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const skills = [
  {
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces with modern frameworks and libraries.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
  },
  {
    title: "Backend Development",
    description: "Building scalable server-side applications and APIs with robust architecture.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"],
  },
  {
    title: "Design & UX",
    description: "Crafting user-centered designs that balance aesthetics with functionality.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
        />
      </svg>
    ),
    skills: ["Figma", "Adobe Creative Suite", "Sketch", "Prototyping", "User Research", "Wireframing"],
  },
  {
    title: "Tools & DevOps",
    description: "Streamlining development workflows and deployment processes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
  },
]

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovation Co.",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Digital Agency",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and interactive user interfaces for diverse clients. Collaborated closely with designers to bring creative visions to life through code.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description:
      "Built and maintained web applications using modern JavaScript frameworks. Gained experience in agile development practices and cross-functional team collaboration.",
  },
  {
    title: "Freelance Artist & Developer",
    company: "Independent",
    period: "2018 - 2019",
    description:
      "Combined artistic skills with web development to create unique digital experiences. Worked with small businesses to establish their online presence through custom websites.",
  },
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">About Me</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Where technical expertise meets creative passion
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Personal Bio Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a full-stack developer with a unique background that bridges the technical and creative worlds.
                    My journey began in the arts, where I developed a keen eye for aesthetics and attention to detail
                    that now informs every line of code I write.
                  </p>
                  <p>
                    What sets me apart is my ability to see the bigger picture – understanding not just how to build
                    something, but why it matters and how it fits into the user's world. I believe that great software
                    is not just functional, but beautiful, intuitive, and meaningful.
                  </p>
                  <p>
                    When I'm not coding, you'll find me sketching, exploring new art techniques, or seeking inspiration
                    in galleries and nature. This constant creative practice keeps my problem-solving skills sharp and
                    my perspective fresh.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Profile Image</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Skills & Expertise</h2>
              <p className="text-lg text-muted-foreground">A comprehensive toolkit for bringing ideas to life</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <ScrollAnimation key={skill.title} delay={index * 150}>
                <SkillCard {...skill} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Professional Experience</h2>
              <p className="text-lg text-muted-foreground">My journey through the world of technology and creativity</p>
            </div>
          </ScrollAnimation>

          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <ScrollAnimation key={experience.title} delay={index * 200}>
                <TimelineItem {...experience} isLast={index === experiences.length - 1} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Resume & Contact Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation>
              <Card className="border-border bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">Download Resume</h3>
                  <p className="text-muted-foreground mb-6">
                    Get a detailed overview of my experience, skills, and achievements.
                  </p>
                  <Button className="bg-primary hover:bg-accent text-primary-foreground">Download PDF</Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="border-border bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">Let's Connect</h3>
                  <p className="text-muted-foreground mb-6">Ready to collaborate? Let's discuss your next project.</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Link href="/connect">Get In Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Social Links */}
          <ScrollAnimation delay={600}>
            <div className="text-center mt-12">
              <h3 className="text-lg font-serif font-semibold text-primary mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent hover:border-accent transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent hover:border-accent transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent hover:border-accent transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </PageLayout>
  )
}
