import { type LucideIcon, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface EventCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
}

export function EventCard({ icon: Icon, title, description, features }: EventCardProps) {
  return (
    <Card className="group border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary transition-colors duration-300">
          <Icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
