import { useState } from "react"
import { Play, ExternalLink } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/shared/VideoModal"

type MediaCategory = "all" | "piano" | "flute" | "songwriter" | "freespirits"

interface MediaItem {
  id: string
  category: Exclude<MediaCategory, "all">
  tag: string
  title: string
  description: string
  image: string
  alt: string
  youtubeId?: string
  externalUrl?: string
}

const mediaItems: MediaItem[] = [
  {
    id: "piano-music",
    category: "piano",
    tag: "Piano · Original",
    title: "Enchantée in D Minor",
    description:
      "Performed live online 2024; featured on Queen Victoria's Steinway.",
    image: "/images/albums/enchantee-d-minor-thumb.png",
    alt: "Enchantée in D Minor",
    youtubeId: "emGFH-x6Pec",
  },
  {
    id: "sunday-serenade-live",
    category: "piano",
    tag: "Piano · Live Concert",
    title: "Sunday Serenade Live",
    description:
      "Meadow of Pink Roses, My Father's Waltz, Serendipity in C Minor.",
    image: "/images/albums/sunday-serenade-live-thumb.png",
    alt: "Sunday Serenade Live",
    youtubeId: "qbPb2NaMUEA",
  },
  {
    id: "flute-music",
    category: "flute",
    tag: "Flute · Celtic & Acoustic",
    title: "Warrior's Welcome",
    description:
      "Performed Dec 28, 2025 alongside Beatles & Mancini covers.",
    image: "/images/albums/warriors-welcome-thumb.png",
    alt: "Warrior's Welcome on Flute",
    youtubeId: "tIkRitYhj8E",
  },
  {
    id: "singer-songwriter",
    category: "songwriter",
    tag: "Singer/Songwriter",
    title: "The Flow & Compassion",
    description:
      "Lush soundscapes produced with Chris Birkett & Yasmine Devi-Shaw.",
    image: "/images/albums/the-flow-thumb.png",
    alt: "The Flow solo album",
    youtubeId: "e8AjFc50fNE",
  },
  {
    id: "rain-sunshine",
    category: "flute",
    tag: "Flute & Piano",
    title: "Rain and Sunshine",
    description:
      "Movement II performed live online on both flute and piano.",
    image: "/images/albums/rain-and-sunshine-thumb.png",
    alt: "Rain and Sunshine",
    youtubeId: "hlIt2Cy8NzQ",
  },
  {
    id: "sunday-serenade-album",
    category: "piano",
    tag: "2026 Album Release",
    title: "Sunday Serenade (Jan 2026)",
    description:
      "Stream & download piano, flute instrumentals, and original songs.",
    image: "/images/albums/sunday-serenade-cover.jpg",
    alt: "Sunday Serenade album cover",
    externalUrl: "https://sharitallon.bandcamp.com/album/sunday-serenade-live",
  },
]

export function MusicAndMediaPage() {
  const [activeTab, setActiveTab] = useState<MediaCategory>("all")
  const [activeVideo, setActiveVideo] = useState<MediaItem | null>(null)

  const filteredItems =
    activeTab === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeTab)

  return (
    <>
      {/* Hero & Category Filter Tabs */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface border-b border-light-outline">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-gutter-lg">
          <div className="max-w-3xl">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Recordings, Videos &amp; Store
            </span>
            <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-surface mt-2">
              Piano, Flute, Singer/Songwriter &amp; The Free Spirits
            </h1>
            <p className="font-body text-body-lg text-light-on-surface-variant mt-3">
              Explore Shari&apos;s original piano compositions, live flute
              performances, collaborations with Grammy-winning producer Chris
              Birkett, and albums on Bandcamp.
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={(val) => setActiveTab(val as MediaCategory)}
          >
            <TabsList aria-label="Music categories">
              <TabsTrigger value="all">All Releases</TabsTrigger>
              <TabsTrigger value="piano">Piano Music</TabsTrigger>
              <TabsTrigger value="flute">Shari on Flute</TabsTrigger>
              <TabsTrigger value="songwriter">Singer/Songwriter</TabsTrigger>
              <TabsTrigger value="freespirits">The Free Spirits</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Featured Videos & Tracks */}
      <section
        id="piano-music"
        className="py-section-sm lg:py-section-lg bg-light-surface-container-low"
      >
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg">
              {filteredItems.map((item) =>
                item.youtubeId ? (
                  <div key={item.id} id={item.id} className="flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(item)}
                      aria-label={`Play ${item.title}`}
                      className="group relative aspect-video w-full bg-light-surface-container-high border border-light-outline rounded-xl overflow-hidden hover:border-light-primary transition-colors duration-state-change cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
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
                    </button>
                    <div className="px-1">
                      <span className="font-label text-label-md text-light-primary">
                        {item.tag}
                      </span>
                      <h2 className="font-headline text-title-lg text-light-on-surface mt-0.5">
                        {item.title}
                      </h2>
                      <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.id}
                    id={item.id}
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-3"
                  >
                    <div className="relative aspect-video w-full bg-light-surface-container-high border border-light-outline rounded-xl overflow-hidden group-hover:border-light-primary transition-colors duration-state-change">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-1">
                      <span className="inline-flex items-center gap-1 font-label text-label-md text-light-primary">
                        <span>{item.tag}</span>
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </span>
                      <h2 className="font-headline text-title-lg text-light-on-surface mt-0.5 group-hover:text-light-primary transition-colors">
                        {item.title}
                      </h2>
                      <p className="font-body text-body-sm text-light-on-surface-variant mt-1">
                        {item.description}
                      </p>
                    </div>
                  </a>
                )
              )}
            </div>
          ) : (
            <div className="bg-light-surface-container-high border border-light-outline rounded-xl p-8 text-center">
              <p className="font-body text-body-md text-light-on-surface-variant">
                Explore The Free Spirits discography and albums below.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* The Free Spirits Collaboration */}
      <section
        id="free-spirits"
        className="py-section-sm lg:py-section-lg bg-light-surface border-t border-light-outline"
      >
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-gutter-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            <div className="lg:col-span-6 flex flex-col gap-gutter-md">
              <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
                Duo &amp; Recording Collaboration
              </span>
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface">
                The Free Spirits — Shari Tallon &amp; Chris Birkett
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                Writing, playing, and recording together since 2015, Shari
                Tallon (flute, tin whistle, keys, vocals) and award-winning
                producer <strong>Chris Birkett</strong> (Sinéad O&apos;Connor&apos;s{" "}
                <em>Nothing Compares 2 U</em>, Steve Earle, Mel Brooks) blend
                progressive rock, Latin, and reflective acoustic textures.
              </p>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                Latest 2026 singles &amp; albums:{" "}
                <em>Tropical Dreamland</em> (Nov 6, 2026),{" "}
                <em>Timing Is Everything</em> (Sep 29, 2026),{" "}
                <em>The Code</em> (2026, 11 songs), <em>Circle of Sound</em>{" "}
                (Spill Magazine review), and <em>11:11</em> (2020 debut).
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-3 gap-gutter-md">
              <img
                src="/images/albums/the-code-cover.jpg"
                alt="The Code album cover by The Free Spirits"
                className="w-full aspect-square object-cover rounded-xl border border-light-outline"
              />
              <img
                src="/images/albums/circle-of-sound-cover.jpg"
                alt="Circle of Sound album cover"
                className="w-full aspect-square object-cover rounded-xl border border-light-outline"
              />
              <img
                src="/images/albums/11-11-cover.jpg"
                alt="11:11 debut album cover"
                className="w-full aspect-square object-cover rounded-xl border border-light-outline"
              />
            </div>
          </div>

          {/* Shari's Music Store */}
          <div
            id="music-store"
            className="bg-light-surface-container border border-light-outline rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
                Shari&apos;s Music Store
              </span>
              <h3 className="font-headline text-headline-md text-light-on-surface">
                Albums, Sheet Music &amp; 12 Musical Resources
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Order <em>Sunday Serenade</em> (Jan 2026), download{" "}
                <em>My Father&apos;s Waltz</em> sheet music on SheetMusicDirect
                / SheetMusicPlus, or request Shari&apos;s 12 educational
                musical resources.
              </p>
            </div>
            <Button className="shrink-0" asChild>
              <a
                href="https://sharitallon.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Bandcamp Store
              </a>
            </Button>
          </div>
        </div>
      </section>

      {activeVideo && activeVideo.youtubeId && (
        <VideoModal
          open={Boolean(activeVideo)}
          onOpenChange={(open) => {
            if (!open) setActiveVideo(null)
          }}
          title={activeVideo.title}
          subtitle={activeVideo.description}
          youtubeId={activeVideo.youtubeId}
        />
      )}
    </>
  )
}
