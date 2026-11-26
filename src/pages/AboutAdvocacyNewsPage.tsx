import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/shared/VideoModal"

export function AboutAdvocacyNewsPage() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      {/* Biography Hero */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-5">
            <img
              src="/images/hero/shari-flute-portrait.jpg"
              alt="Portrait of Shari Tallon with her flute"
              className="w-full aspect-[4/5] object-cover object-top rounded-xl border border-light-outline"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-gutter-md">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Biography &amp; Education Journey
            </span>
            <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-surface text-balance">
              About Shari Tallon
            </h1>
            <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
              Shari Tallon is a pianist, composer, flutist, singer-songwriter,
              and music specialist based in Toronto, Ontario. She studied at
              the University of Ottawa and has toured throughout Canada
              performing for family audiences and sharing original music.
            </p>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Her educational career began as a Nursery School Teacher,
              continuing as a Music Specialist with the Limestone Board of
              Education, Uxbridge Montessori School, and now as a freelance
              Music Specialist teaching 8 weekly classes for babies to
              6-year-olds alongside private students of all ages. She has
              founded music theatre camps, music schools, and creative
              performing arts programs for children at risk.
            </p>
            <p className="font-body text-body-sm text-light-on-surface-variant">
              [Placeholder: Add full academic degrees &amp; conservatory
              credentials if desired]
            </p>
          </div>
        </div>
      </section>

      {/* Mental Health Advocacy & TEDx Countdown */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface-container-low border-y border-light-outline">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
          <div className="bg-light-surface-container-high border border-light-outline rounded-xl p-8 flex flex-col gap-3">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Mental Health Advocacy
            </span>
            <h2 className="font-headline text-headline-md text-light-on-surface">
              Healing Through Music
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Shari is a dedicated advocate for the benefits music brings to
              mental health and children at risk. She has supported charitable
              concerts and campaigns for the{" "}
              <strong>Mood Disorders Society of Canada</strong>,{" "}
              <strong>CAMH</strong>, <strong>Spark of Brilliance</strong>, and{" "}
              <strong>Children Matter</strong>.
            </p>
          </div>

          <div className="bg-light-surface-container-high border border-light-outline rounded-xl p-8 flex flex-col gap-3">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Climate &amp; Community
            </span>
            <h2 className="font-headline text-headline-md text-light-on-surface">
              Music for Our World · TEDx Countdown
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              On October 10, 2020, Shari collaborated and performed original
              songs—including works honoring forests and nature like{" "}
              <em>The Hidden Life of Trees</em>—for{" "}
              <strong>TEDx Countdown</strong>, an event educating and guiding
              individuals on repairing and protecting our world.
            </p>
          </div>
        </div>
      </section>

      {/* In the News */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-gutter-md">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              In the News · December 2023
            </span>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface">
              Artists Against Homelessness — Bullet Point News
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Shari was one of twelve singers invited to donate her time to sing
              on <em>&quot;The Forgotten Homeless&quot;</em>, a song and video
              raising funds for <strong>Woodgreen Community Services</strong> in
              Toronto, Ontario, and was interviewed on Bullet Point News.
            </p>
            <Button className="w-fit" onClick={() => setVideoOpen(true)}>
              Watch Interview
            </Button>
          </div>
          <div className="lg:col-span-6">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play Artists Against Homelessness interview"
              className="group relative block w-full rounded-xl overflow-hidden border border-light-outline cursor-pointer"
            >
              <img
                src="/images/news/artists-against-homelessness.png"
                alt="Shari Tallon Artists Against Homelessness interview"
                className="w-full aspect-video object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-light-on-surface/20 group-hover:bg-light-on-surface/35 transition-colors">
                <span className="w-16 h-16 rounded-full bg-light-surface-container-high text-light-primary flex items-center justify-center border border-light-outline shadow-sm">
                  <Play
                    className="h-7 w-7 fill-current ml-0.5"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        title="Artists Against Homelessness — Bullet Point News"
        subtitle="December 2023 Interview"
        youtubeId="6ry-9G4QaaE"
      />
    </>
  )
}
