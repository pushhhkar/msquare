import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  as?: React.ElementType
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, as: Tag = "section", ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn("section-padding", className)}
      {...props}
    >
      <div className="container-custom">{children}</div>
    </Tag>
  )
)
Section.displayName = "Section"

export { Section }
