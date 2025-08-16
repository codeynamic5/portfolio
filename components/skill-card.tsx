"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  description: string
}

export function SkillCard({ title, skills, icon, description }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-border bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
            {icon}
          </div>
          <h3 className="text-xl font-serif font-semibold text-primary">{title}</h3>
        </div>

        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`px-3 py-1 text-xs rounded-full border transition-all duration-300 ${
                isHovered
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-secondary-foreground border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
