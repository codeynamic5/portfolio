import { PageLayout } from "@/components/page-layout"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">About Me</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Where technical expertise meets creative passion
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
