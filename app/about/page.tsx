import { PageLayout } from "@/components/page-layout"
import Image from "next/image"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">About Me</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16">
            Where technical expertise meets creative passion
          </p>
        </div>

        {/* Profile Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-secondary/20 border border-border">
                <Image
                  src="/pp.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Description Area */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  Hello, I'm Abella!
                </h2>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Welcome to my creative space! I'm a passionate [your profession/role] with a love for 
                  blending technical innovation with artistic expression.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  With a background in [your background], I've spent [time period] developing skills 
                  in [your key skills/areas]. My journey has been shaped by a curiosity for 
                  [what drives you] and a commitment to [your values/mission].
                </p>
              </div>

              {/* Optional: Skills or highlights */}
              <div className="pt-4">
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">What I Do</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                    [Skill 1]
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                    [Skill 2]
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                    [Skill 3]
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                    [Skill 4]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
