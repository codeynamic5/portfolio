"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface Artwork {
  id: string
  title: string
  medium: string
  date: string
  description: string
  image: string
  dimensions?: string
}

interface GalleryGridProps {
  artworks: Artwork[]
  onArtworkClick: (artwork: Artwork) => void
}

export function GalleryGrid({ artworks, onArtworkClick }: GalleryGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {artworks.map((artwork) => (
        <Card
          key={artwork.id}
          className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-border bg-card overflow-hidden"
          onClick={() => onArtworkClick(artwork)}
          onMouseEnter={() => setHoveredId(artwork.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <span className="text-muted-foreground">Artwork</span>
              </div>
              <div
                className={`absolute inset-0 bg-primary/80 transition-opacity duration-300 flex items-center justify-center ${
                  hoveredId === artwork.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-center text-primary-foreground">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  <p className="text-sm font-medium">View Details</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-serif font-semibold text-primary mb-1 line-clamp-1">{artwork.title}</h3>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{artwork.medium}</span>
                <span>{artwork.date}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
