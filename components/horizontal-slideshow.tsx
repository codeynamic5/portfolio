"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
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

interface HorizontalSlideshowProps {
  artworks: Artwork[]
  onArtworkClick: (artwork: Artwork) => void
}

export function HorizontalSlideshow({ artworks, onArtworkClick }: HorizontalSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current
      const cardWidth = container.clientWidth * 0.8 // 80% of container width
      const scrollPosition = index * (cardWidth + 32) // 32px gap
      container.scrollTo({ left: scrollPosition, behavior: "smooth" })
      setCurrentIndex(index)
    }
  }

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : artworks.length - 1
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < artworks.length - 1 ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    const x = e.touches[0].pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground"
        onClick={handlePrevious}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground"
        onClick={handleNext}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>

      {/* Slideshow Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide gap-8 px-16 py-8 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {artworks.map((artwork, index) => (
          <Card
            key={artwork.id}
            className="flex-shrink-0 w-4/5 max-w-2xl cursor-pointer transition-all duration-300 hover:shadow-xl border-border bg-card group"
            onClick={() => onArtworkClick(artwork)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Artwork Preview</span>
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-background/90 rounded-full p-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">{artwork.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>{artwork.medium}</span>
                  <span>{artwork.date}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{artwork.description}</p>
                {artwork.dimensions && <p className="text-xs text-muted-foreground mt-2">{artwork.dimensions}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {artworks.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
