import * as React from "react"
import { DayPicker } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-1 font-body", className)}
      classNames={{
        months: "relative flex flex-col sm:flex-row gap-4",
        month: "flex flex-col gap-4",
        month_caption: "flex justify-center items-center h-9 px-11",
        caption_label: "font-headline text-title-lg text-light-on-surface",
        nav: "absolute inset-x-1 top-0 flex items-center justify-between h-9 pointer-events-none",
        button_previous:
          "pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-light-outline bg-light-surface text-light-on-surface hover:bg-light-surface-container hover:border-light-primary transition-colors cursor-pointer z-10",
        button_next:
          "pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-light-outline bg-light-surface text-light-on-surface hover:bg-light-surface-container hover:border-light-primary transition-colors cursor-pointer z-10",
        month_grid: "w-full border-collapse",
        weekdays: "flex gap-1",
        weekday:
          "text-light-on-surface-variant w-10 font-label text-label-md text-center py-1.5",
        week: "flex w-full gap-1 mt-1",
        day: "h-10 w-10 text-center text-body-sm p-0 relative",
        day_button:
          "h-10 w-10 rounded-full font-body text-body-md text-light-on-surface hover:bg-light-surface-container hover:text-light-primary inline-flex items-center justify-center transition-colors cursor-pointer",
        selected:
          "[&>button]:bg-light-primary [&>button]:text-light-on-primary [&>button]:hover:bg-accent-hover [&>button]:hover:text-light-on-primary [&>button]:font-semibold",
        today:
          "[&>button]:border [&>button]:border-light-primary [&>button]:text-light-primary",
        outside: "[&>button]:text-light-on-surface-variant/40",
        disabled:
          "[&>button]:text-light-on-surface-variant/30 [&>button]:pointer-events-none",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
