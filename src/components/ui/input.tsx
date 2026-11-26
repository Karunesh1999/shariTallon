import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-light-outline bg-light-surface px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-on-surface-variant/60 focus-visible:outline-none focus-visible:border-light-primary focus-visible:ring-1 focus-visible:ring-light-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-state-change",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

