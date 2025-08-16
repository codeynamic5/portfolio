"use client"

import { Button } from "@/components/ui/button"

interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          className={
            activeCategory === category
              ? "bg-primary text-primary-foreground hover:bg-accent"
              : "border-border text-muted-foreground hover:text-primary hover:border-primary bg-transparent"
          }
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
