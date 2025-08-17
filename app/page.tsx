import { PageLayout } from "@/components/page-layout"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ParallaxSection } from "@/components/parallax-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <PageLayout className="-mt-16">
      {/* Hero Section with Background Drawing - starts from very top */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Drawing - contained within hero section only */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: 'url(/images/plataran.png)'
          }}
        >
          {/* Minimal gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <ScrollAnimation>
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-serif font-bold text-primary leading-none" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>AMS</h1>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                Web Developer & UI/UX Designer
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Welcome to my mini cultural hub. 
                <br />Where technical precision meets creative vision.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground shadow-lg">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-background/80 backdrop-blur-sm shadow-lg"
              >
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>

        {/* Scroll Indicator */}
        <ScrollAnimation delay={1000} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm font-light">Scroll to explore</span>
            <div className="w-px h-8 bg-muted-foreground animate-pulse" />
          </div>
        </ScrollAnimation>
      </section>

      {/* Introduction Section - Higher z-index to appear above fixed background */}
      <section className="relative z-20 py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Creating Digital Experiences</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I blend the precision of full-stack development with the creativity of artistic expression. Every
                project is an opportunity to push boundaries, solve complex problems, and create something meaningful.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary">Development</h3>
                <p className="text-muted-foreground">
                  Full-stack solutions using modern technologies and best practices.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary">Design</h3>
                <p className="text-muted-foreground">
                  User-centered design with attention to aesthetics and functionality.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary">Artistry</h3>
                <p className="text-muted-foreground">
                  Creative expression through digital mediums and traditional art forms.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Featured Work</h2>
              <p className="text-lg text-muted-foreground">A glimpse into my latest projects and creations</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-card border">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <span className="text-muted-foreground">Project Preview</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-primary mb-2">Development Projects</h3>
                    <p className="text-muted-foreground">Explore my latest web applications and technical solutions.</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-card border">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-muted-foreground">Gallery Preview</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-primary mb-2">Art Gallery</h3>
                    <p className="text-muted-foreground">
                      Discover my artistic journey through sketches and digital art.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/projects">View All Work</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </PageLayout>
  )
}
