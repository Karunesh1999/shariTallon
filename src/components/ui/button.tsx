import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-label text-label-lg transition-colors duration-state-change focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-light-primary text-light-on-primary hover:bg-accent-hover",
        secondary:
          "bg-light-surface-container text-light-on-primary-container border border-light-outline hover:bg-light-surface-container-low",
        outline:
          "bg-light-surface-container-high border border-light-outline text-light-on-surface hover:bg-light-surface-container hover:border-light-primary",
        ghost:
          "text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary",
        link: "text-light-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-5 py-2.5",
        lg: "px-7 py-3.5",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

