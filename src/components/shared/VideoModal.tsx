import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

interface VideoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  subtitle?: string
  youtubeId: string
}

export function VideoModal({
  open,
  onOpenChange,
  title,
  youtubeId,
}: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden border-0 bg-black shadow-2xl [&>button]:bg-black/60 [&>button]:text-white [&>button]:hover:bg-black/80 [&>button]:hover:text-white [&>button]:right-3 [&>button]:top-3 [&>button]:z-10">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="aspect-video w-full">
          {open && (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
