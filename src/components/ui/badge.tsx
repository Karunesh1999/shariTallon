import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 font-label text-label-md transition-colors duration-state-change",
  {
    variants: {
      variant: {
        default: "border-transparent bg-light-primary text-light-on-primary",
        secondary:
          "border-light-outline bg-light-surface-container text-light-primary",
        outline:
          "border-light-outline bg-light-surface-container-high text-light-on-surface-variant",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

