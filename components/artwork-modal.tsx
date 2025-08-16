"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
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

interface ArtworkModalProps {
  artwork: Artwork | null
  isOpen: boolean
  onClose: () => void
}

export function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  if (!isOpen || !artwork) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative max-w-4xl max-h-[90vh] w-full mx-4 overflow-hidden">
        <Card className="border-border bg-card">
          <CardContent className="p-0">
            <div className="relative">
              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground"
                onClick={onClose}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>

              {/* Zoom Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-16 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isZoomed
                        ? "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        : "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    }
                  />
                </svg>
              </Button>

              {/* Image */}
              <div
                className={`relative overflow-hidden transition-all duration-300 ${
                  isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center transition-transform duration-300 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                >
                  <span className="text-muted-foreground text-lg">High Resolution Artwork</span>
                </div>
              </div>
            </div>

            {/* Artwork Details */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">{artwork.title}</h2>
                  <div className="space-y-2 text-muted-foreground mb-6">
                    <p>
                      <span className="font-medium text-foreground">Medium:</span> {artwork.medium}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Date:</span> {artwork.date}
                    </p>
                    {artwork.dimensions && (
                      <p>
                        <span className="font-medium text-foreground">Dimensions:</span> {artwork.dimensions}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-3">About This Piece</h3>
                  <p className="text-muted-foreground leading-relaxed">{artwork.description}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
