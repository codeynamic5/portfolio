"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  longDescription,
  image,
  technologies,
  category,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-border bg-card overflow-hidden ${
        featured ? "ring-2 ring-accent" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
          <span className="text-muted-foreground">Project Preview</span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {liveUrl && (
            <Button
              size="sm"
              className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={(e) => {
                e.stopPropagation()
                window.open(liveUrl, "_blank")
              }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="bg-background text-foreground border-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
              onClick={(e) => {
                e.stopPropagation()
                window.open(githubUrl, "_blank")
              }}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </Button>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-serif font-semibold text-primary group-hover:text-accent transition-colors">
            {title}
          </h3>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {isExpanded ? longDescription : description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, isExpanded ? technologies.length : 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {!isExpanded && technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{technologies.length - 4} more
            </Badge>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="text-accent hover:text-accent-foreground hover:bg-accent p-0 h-auto"
          onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </Button>
      </CardContent>
    </Card>
  )
}
