"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { ScrollAnimation } from "@/components/scroll-animation"
import { HorizontalSlideshow } from "@/components/horizontal-slideshow"
import { GalleryGrid } from "@/components/gallery-grid"
import { ArtworkModal } from "@/components/artwork-modal"
import { Button } from "@/components/ui/button"

interface Artwork {
  id: string
  title: string
  medium: string
  date: string
  description: string
  image: string
  dimensions?: string
}

const artworks: Artwork[] = [
  {
    id: "1",
    title: "Digital Harmony",
    medium: "Digital Art",
    date: "2024",
    description:
      "An exploration of balance and rhythm in digital space. This piece combines geometric forms with organic flow, representing the harmony between technology and nature. Created using advanced digital painting techniques with custom brushes and layering methods.",
    image: "/placeholder.svg?height=600&width=800",
    dimensions: "3840 × 2160 pixels",
  },
  {
    id: "2",
    title: "Urban Sketches",
    medium: "Pencil on Paper",
    date: "2023",
    description:
      "A series of observational drawings capturing the energy and movement of city life. These sketches focus on architectural details, human interactions, and the interplay of light and shadow in urban environments.",
    image: "/placeholder.svg?height=600&width=800",
    dimensions: "11 × 14 inches",
  },
  {
    id: "3",
    title: "Abstract Emotions",
    medium: "Acrylic on Canvas",
    date: "2023",
    description:
      "A vibrant exploration of emotional states through color and form. This painting uses bold brushstrokes and layered textures to convey the complexity of human feelings, with each color representing different emotional intensities.",
    image: "/placeholder.svg?height=600&width=800",
    dimensions: "24 × 36 inches",
  },
  {
    id: "4",
    title: "Geometric Patterns",
    medium: "Vector Art",
    date: "2024",
    description:
      "A study in mathematical beauty and precision. This vector artwork explores the relationship between geometric forms and visual rhythm, creating patterns that are both systematic and aesthetically pleasing.",
    image: "/placeholder.svg?height=600&width=800",
    dimensions: "Vector (Scalable)",
  },
  {
    id: "5",
    title: "Nature Studies",
    medium: "Watercolor",
    date: "2022",
    description:
      "Delicate watercolor studies of natural forms, focusing on the subtle interplay of light, color, and texture found in botanical subjects. These pieces emphasize the transparency and fluidity unique to watercolor medium.",
    image: "/placeholder.svg?height=600&width=800",
    dimensions: "9 × 12 inches",
  },
  {
    id: "6",
    title: "Portrait Series",
    medium: "Charcoal",
    date: "2023",
    description:
      "A collection of expressive portrait studies exploring character and emotion through dramatic lighting and bold mark-making. Each portrait captures not just physical likeness but the essence of the subject's personality.",
    image: "/placeholder.svg?height=600&width=800",
    dimensions: "18 × 24 inches",
  },
]

export default function GalleryPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"slideshow" | "grid">("slideshow")

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedArtwork(null)
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Art Gallery</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              A collection of creative expressions across various mediums
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="flex justify-center space-x-4">
              <Button
                variant={viewMode === "slideshow" ? "default" : "outline"}
                onClick={() => setViewMode("slideshow")}
                className={
                  viewMode === "slideshow"
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary bg-transparent"
                }
              >
                Slideshow View
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                onClick={() => setViewMode("grid")}
                className={
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary bg-transparent"
                }
              >
                Grid View
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            {viewMode === "slideshow" ? (
              <HorizontalSlideshow artworks={artworks} onArtworkClick={handleArtworkClick} />
            ) : (
              <GalleryGrid artworks={artworks} onArtworkClick={handleArtworkClick} />
            )}
          </ScrollAnimation>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Artist Statement</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My artistic practice is rooted in the exploration of the intersection between technology and traditional
                art forms. Each piece represents a dialogue between digital precision and organic expression, seeking to
                find harmony in the apparent contradiction.
              </p>
              <p>
                Through various mediums—from traditional pencil and watercolor to digital art and vector graphics—I
                investigate themes of balance, rhythm, and emotional resonance. My work reflects my dual identity as
                both a technologist and an artist, where each discipline informs and enriches the other.
              </p>
              <p>
                The creative process is as important as the final piece, often involving experimentation with new
                techniques, tools, and approaches that challenge conventional boundaries between art and technology.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Artwork Modal */}
      <ArtworkModal artwork={selectedArtwork} isOpen={isModalOpen} onClose={handleCloseModal} />
    </PageLayout>
  )
}
