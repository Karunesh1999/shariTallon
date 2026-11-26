import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/shared/VideoModal"

interface ConcertVideo {
  title: string
  subtitle: string
  image: string
  alt: string
  youtubeId: string
}

const concertVideos: ConcertVideo[] = [
  {
    title: "Let's Blow Bubbles",
    subtitle: "New Year's Eve 2024 Children's Concert",
    image: "/images/concerts/lets-blow-bubbles-thumb.png",
    alt: "Let's Blow Bubbles live concert video",
    youtubeId: "i4ObkjSp2Wo",
  },
  {
    title: "Old MacDonald Had a Farm",
    subtitle: "47K+ Views · Stouffville Market 2024",
    image: "/images/concerts/old-macdonald-stouffville-thumb.png",
    alt: "Old MacDonald Had a Farm live at Stouffville Market",
    youtubeId: "5csXW_j4jr8",
  },
  {
    title: "Enchantée (Flute & Piano)",
    subtitle: "Performed Live · Sept 2024",
    image: "/images/concerts/enchantee-live-thumb.jpg",
    alt: "Enchantée flute and piano live",
    youtubeId: "emGFH-x6Pec",
  },
]

export function ConcertsPage() {
  const [activeVideo, setActiveVideo] = useState<ConcertVideo | null>(null)

  return (
    <>
      {/* Page Hero */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-gutter-md">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Live Music &amp; Events
            </span>
            <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-surface text-balance">
              Concerts, House Concerts &amp; Family Shows
            </h1>
            <p className="font-body text-body-lg text-light-on-surface-variant text-pretty max-w-prose">
              Shari performs as a solo multi-instrumentalist on piano, flute, tin
              whistle, and vocals—or with her duo{" "}
              <strong>The Free Spirits</strong>—for house concerts, private
              parties, weddings, libraries, festivals, and agricultural fairs.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link to="/contact-bookings#concert-enquiry">
                  Enquire About Booking
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#family-concerts">Kids &amp; Family Concerts</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/images/concerts/collingwood-house-concert.jpg"
              alt="Shari Tallon performing a house concert in Collingwood, March 2025"
              className="w-full aspect-[4/5] object-cover rounded-xl border border-light-outline"
            />
          </div>
        </div>
      </section>

      {/* Alternating Section 1: Concert Pianist */}
      <section
        id="pianist"
        className="py-section-sm lg:py-section-lg bg-light-surface-container-low border-y border-light-outline"
      >
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-6">
            <img
              src="/images/concerts/shari-grand-piano.jpg"
              alt="Shari Tallon at a grand piano"
              className="w-full aspect-[4/3] object-cover rounded-xl border border-light-outline"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-gutter-md">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Solo Repertoire
            </span>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface">
              Concert Pianist
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Shari has an intimate relationship with the piano, composing and
              performing pieces that have flowed from her since she was young.
              Audiences say they feel nature woven into her melodies, the sounds
              of waterfalls in her rhythms, and journeys in her improvisations.
            </p>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Her most memorable performance took place at David
              Galbraith&apos;s (Cirque du Soleil) House Concert on Queen
              Victoria&apos;s Steinway Grand Piano, where a guest recovering
              from a car accident shared she felt no pain while listening to
              Shari play.
            </p>
            <Link
              to="/music-media#piano-music"
              className="inline-flex items-center gap-2 font-label text-label-lg text-light-primary hover:underline"
            >
              <span>Listen to Piano Recordings</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Alternating Section 2: Flutist & House Concerts */}
      <section
        id="house-concerts"
        className="py-section-sm lg:py-section-lg bg-light-surface"
      >
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-gutter-md order-2 lg:order-1">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Flute &amp; House Concerts
            </span>
            <h2
              id="flute"
              className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface"
            >
              Host an Intimate House Concert
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Invite your friends for an evening they will never forget—enjoying
              an intimate performance of original piano pieces, flute melodies
              (The Beatles, Chicago, Henry Mancini, The Rolling Stones, Bread,
              Chris de Burgh), and uplifting songs from Shari&apos;s album{" "}
              <em>The Flow</em>.
            </p>
            <div className="bg-light-surface-container border border-light-outline rounded-lg p-4">
              <p className="font-label text-label-md text-light-primary mb-1">
                Host Guide
              </p>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                [Placeholder: Insert typical living-room capacity,
                keyboard/piano setup options, and honorarium/ticketed format
                details]
              </p>
            </div>
            <div className="pt-1">
              <Button asChild>
                <Link to="/contact-bookings#concert-enquiry">
                  Host a House Concert
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <img
              src="/images/concerts/shari-flute-live.jpg"
              alt="Shari Tallon performing flute live"
              className="w-full aspect-[4/3] object-cover rounded-xl border border-light-outline"
            />
          </div>
        </div>
      </section>

      {/* Kids & Family Concerts + Upcoming & Past Highlights */}
      <section
        id="family-concerts"
        className="py-section-sm lg:py-section-lg bg-light-surface-container-low border-y border-light-outline"
      >
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-gutter-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            <div className="lg:col-span-6 flex flex-col gap-gutter-md">
              <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
                Festivals, Libraries &amp; Fairs
              </span>
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface">
                Kids &amp; Family Concerts
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                Capturing the attention and engaging young audiences is
                Shari&apos;s specialty. With her sweet voice, flute, keyboards,
                and upbeat songs like <em>Bubbles</em>,{" "}
                <em>The Chicken Dance</em>, and <em>Old MacDonald</em> (47K+
                views on YouTube), kids and parents move, dance, sing, and play
                percussion, hand drums, ukuleles, and guitars.
              </p>
              <div className="bg-light-surface-container-high border border-light-outline rounded-lg p-5 flex flex-col gap-2">
                <p className="font-label text-label-md text-light-primary uppercase">
                  Featured Event
                </p>
                <p className="font-headline text-title-lg text-light-on-surface">
                  Aurora Public Library — Family Concert
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Saturday, October 17, 2026 · Interactive concert for the
                  entire family
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="sm" asChild>
                  <Link to="/contact-bookings#concert-enquiry">
                    Book Directly
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.gigsalad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book on GigSalad
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-gutter-md">
              <img
                src="/images/concerts/aurora-library-bubbles.jpg"
                alt="Children enjoying Bubbles song at Aurora Public Library"
                className="w-full aspect-square object-cover rounded-xl border border-light-outline"
              />
              <img
                src="/images/concerts/canada-day-belleville.jpg"
                alt="Shari Tallon performing at Canada Day in Belleville"
                className="w-full aspect-square object-cover rounded-xl border border-light-outline"
              />
            </div>
          </div>

          {/* Concert Video Gallery */}
          <div id="videos" className="pt-4">
            <h3 className="font-headline text-headline-md text-light-on-surface mb-6">
              Concert Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
              {concertVideos.map((video) => (
                <button
                  key={video.youtubeId}
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="group text-left bg-light-surface-container-high border border-light-outline rounded-xl overflow-hidden hover:border-light-primary transition-colors duration-state-change cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.image}
                      alt={video.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-light-on-surface/15 group-hover:bg-light-on-surface/30 transition-colors">
                      <span className="w-12 h-12 rounded-full bg-light-surface-container-high text-light-primary flex items-center justify-center border border-light-outline">
                        <Play
                          className="h-5 w-5 fill-current ml-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-headline text-title-lg text-light-on-surface group-hover:text-light-primary transition-colors">
                      {video.title}
                    </p>
                    <p className="font-body text-body-sm text-light-on-surface-variant">
                      {video.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeVideo && (
        <VideoModal
          open={Boolean(activeVideo)}
          onOpenChange={(open) => {
            if (!open) setActiveVideo(null)
          }}
          title={activeVideo.title}
          subtitle={activeVideo.subtitle}
          youtubeId={activeVideo.youtubeId}
        />
      )}
    </>
  )
}
