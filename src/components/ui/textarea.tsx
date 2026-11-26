import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[110px] w-full rounded-md border border-light-outline bg-light-surface px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-on-surface-variant/60 focus-visible:outline-none focus-visible:border-light-primary focus-visible:ring-1 focus-visible:ring-light-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-state-change",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }

