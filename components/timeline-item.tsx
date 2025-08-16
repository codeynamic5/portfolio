interface TimelineItemProps {
  title: string
  company: string
  period: string
  description: string
  isLast?: boolean
}

export function TimelineItem({ title, company, period, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex items-start space-x-4">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
        {!isLast && <div className="w-px h-24 bg-border mt-2" />}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-lg font-serif font-semibold text-primary">{title}</h3>
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          <p className="text-accent font-medium mb-3">{company}</p>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
