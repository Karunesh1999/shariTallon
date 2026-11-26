import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { VideoModal } from "@/components/shared/VideoModal"

export function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      {/* Hero Section */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-gutter-lg">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Toronto · Ontario · Online Worldwide
            </span>
            <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-surface text-balance">
              Shari Tallon — Pianist, Flutist, Composer &amp; Music Educator.
            </h1>
            <p className="font-body text-body-lg text-light-on-surface-variant text-pretty max-w-prose">
              Gentle, expressive piano and flute performances alongside joyful,
              creative music education for babies, children, adults, schools,
              and exceptional learners.
            </p>
            <div className="flex flex-wrap items-center gap-gutter-md pt-2">
              <Button asChild>
                <Link to="/contact-bookings#book-lesson">
                  Book Free Consultation
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/concerts">Explore Concerts</Link>
              </Button>
            </div>
          </div>

          {/* Editorial Overlapping Photo Composition */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-gutter-md items-center">
            <div className="col-span-7 rounded-xl overflow-hidden border border-light-outline bg-light-surface-container-high">
              <img
                src="/images/hero/shari-flute-outdoors.jpg"
                alt="Shari Tallon smiling outdoors holding her silver flute"
                className="w-full aspect-[4/5] object-cover object-top"
              />
            </div>
            <div className="col-span-5 flex flex-col gap-gutter-md">
              <div className="rounded-xl overflow-hidden border border-light-outline bg-light-surface-container-high">
                <img
                  src="/images/hero/shari-piano-live.jpg"
                  alt="Shari Tallon performing live at the piano"
                  className="w-full aspect-square object-cover object-top"
                />
              </div>
              <div className="rounded-xl bg-light-surface-container p-5 border border-light-outline">
                <p className="font-label text-label-md text-light-primary mb-1">
                  Sunday Serenade Live
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Performing original piano &amp; flute works to thousands
                  online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Piano & Flute Performance + Video */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface-container-low border-y border-light-outline">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-3">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-light-surface-container">
                <img
                  src="/images/concerts/rain-and-sunshine-thumb.png"
                  alt="Rain and Sunshine — Shari Tallon performing flute and piano live"
                  className="w-full h-full object-cover object-top"
                />
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  aria-label="Play Rain and Sunshine video"
                  className="absolute inset-0 flex items-center justify-center bg-light-on-surface/25 hover:bg-light-on-surface/35 transition-colors duration-state-change cursor-pointer"
                >
                  <span className="w-16 h-16 rounded-full bg-light-surface-container-high text-light-primary flex items-center justify-center border border-light-outline shadow-sm">
                    <Play className="h-7 w-7 fill-current ml-0.5" aria-hidden="true" />
                  </span>
                </button>
              </div>
            </Card>
            <div className="px-1 flex items-center justify-between gap-4">
              <div>
                <p className="font-headline text-title-lg text-light-on-surface">
                  Rain and Sunshine (Movement II)
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Performed live online with Shari on both flute and piano
                </p>
              </div>
              <a
                href="https://sharitallon.bandcamp.com/album/sunday-serenade-live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-label text-label-lg text-light-primary hover:underline shrink-0"
              >
                <span>Bandcamp</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-gutter-md">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Piano, Flute &amp; Composition
            </span>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
              Gentle, expressive melodies that calm and inspire.
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Shari fell in love with the piano as a young child, and her
              expressive touch weaves textures, colors, and emotion into every
              performance. From original compositions like{" "}
              <em>Enchantée in D Minor</em> and <em>My Father&apos;s Waltz</em>{" "}
              to beloved flute arrangements of The Beatles, Henry Mancini, and
              Bread, her music relaxes listeners from babies to adults.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="sm" asChild>
                <Link to="/music-media">Listen &amp; Watch Performances</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://sharitallon.bandcamp.com/album/sunday-serenade-live"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sunday Serenade Album
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Concerts & House Concerts */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
            <div className="lg:col-span-6 flex flex-col gap-gutter-md order-2 lg:order-1">
              <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
                Live Performances
              </span>
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
                Intimate House Concerts &amp; Interactive Family Shows
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                Host a memorable evening in your home with solo piano and
                flute—or with Shari&apos;s duo <strong>The Free Spirits</strong>
                —or bring an interactive concert to your library, festival, or
                community fair where children sing, dance, and play percussion,
                ukuleles, and keyboards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md pt-2">
                <div className="bg-light-surface-container-low border border-light-outline rounded-lg p-4">
                  <h3 className="font-headline text-title-lg text-light-on-surface mb-1">
                    House Concerts
                  </h3>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    Private parties, weddings, and intimate living-room recitals
                    across Ontario.
                  </p>
                </div>
                <div className="bg-light-surface-container-low border border-light-outline rounded-lg p-4">
                  <h3 className="font-headline text-title-lg text-light-on-surface mb-1">
                    Family Audiences
                  </h3>
                  <p className="font-body text-body-sm text-light-on-surface-variant">
                    Toured across Canada; Aurora Public Library (Oct 17, 2026)
                    &amp; festivals.
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/concerts"
                  className="inline-flex items-center gap-2 font-label text-label-lg text-light-primary hover:underline"
                >
                  <span>View all concert formats &amp; videos</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-gutter-md order-1 lg:order-2">
              <img
                src="/images/concerts/collingwood-house-concert.jpg"
                alt="House concert in Collingwood, March 2025"
                className="w-full aspect-[4/5] object-cover rounded-xl border border-light-outline"
              />
              <img
                src="/images/concerts/aurora-library-families.jpg"
                alt="Shari Tallon performing for families at Aurora Public Library"
                className="w-full aspect-[4/5] object-cover rounded-xl border border-light-outline mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Pillars */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface-container-low border-y border-light-outline">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-gutter-xl">
          <div className="max-w-2xl">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Music Education
            </span>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface mt-2 mb-3">
              A Music Teacher for Every Age &amp; Ability
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant">
              From 8 weekly classes for babies and preschoolers to 100% funded
              school workshops and individualized lessons for adults and
              students with special needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-xl items-start">
            <Link
              to="/preschoolers"
              className="group flex flex-col gap-4"
            >
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-light-outline bg-light-surface-container-high group-hover:border-light-primary transition-colors duration-state-change">
                <img
                  src="/images/preschoolers/preschoolers-keyboards.jpg"
                  alt="Preschoolers exploring keyboards and percussion with Shari"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col gap-1.5 px-1">
                <h3 className="font-headline text-headline-sm text-light-on-surface group-hover:text-light-primary transition-colors duration-state-change">
                  Music for Preschoolers &amp; Babies
                </h3>
                <p className="font-body text-body-md text-light-on-surface-variant">
                  Toddle Tunes, Rainbow Rockers, Music for Little Mozarts, and
                  Keyboards for Casa—nurturing physical, social, and emotional
                  growth.
                </p>
                <span className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary pt-1.5">
                  <span>Explore Preschool Programs</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link
              to="/lessons-schools"
              className="group flex flex-col gap-4"
            >
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-light-outline bg-light-surface-container-high group-hover:border-light-primary transition-colors duration-state-change">
                <img
                  src="/images/lessons/school-concert.jpg"
                  alt="Shari Tallon leading a funded school music concert"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col gap-1.5 px-1">
                <h3 className="font-headline text-headline-sm text-light-on-surface group-hover:text-light-primary transition-colors duration-state-change">
                  Lessons, Schools &amp; 100% MPTF Funding
                </h3>
                <p className="font-body text-body-md text-light-on-surface-variant">
                  Private online and in-studio lessons for kids &amp; adults
                  (Piano, Flute, Guitar, Ukulele, Voice), plus 100% funded
                  K–12 school concerts for 2026/27.
                </p>
                <span className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary pt-1.5">
                  <span>Explore Lessons &amp; Schools</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link
              to="/exceptional-students"
              className="group flex flex-col gap-4"
            >
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-light-outline bg-light-surface-container-high group-hover:border-light-primary transition-colors duration-state-change">
                <img
                  src="/images/lessons/daniel-and-shari.jpg"
                  alt="Shari Tallon with an exceptional music student at the piano"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col gap-1.5 px-1">
                <h3 className="font-headline text-headline-sm text-light-on-surface group-hover:text-light-primary transition-colors duration-state-change">
                  Exceptional Students
                </h3>
                <p className="font-body text-body-md text-light-on-surface-variant">
                  Over two decades of individualized guitar, keyboard, and
                  piano sessions tailored to each student&apos;s sensory
                  profile and musical joy.
                </p>
                <span className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary pt-1.5">
                  <span>Read About Exceptionalities</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link
              to="/about-news"
              className="group flex flex-col gap-4"
            >
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-light-outline bg-light-surface-container-high group-hover:border-light-primary transition-colors duration-state-change">
                <img
                  src="/images/news/artists-against-homelessness.png"
                  alt="Shari Tallon interviewed on Bullet Point News for Artists Against Homelessness"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col gap-1.5 px-1">
                <h3 className="font-headline text-headline-sm text-light-on-surface group-hover:text-light-primary transition-colors duration-state-change">
                  Advocacy, TEDx Countdown &amp; News
                </h3>
                <p className="font-body text-body-md text-light-on-surface-variant">
                  Supporting mental health charities (CAMH, Mood Disorders
                  Society of Canada), TEDx Countdown, and Artists Against
                  Homelessness.
                </p>
                <span className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary pt-1.5">
                  <span>Read Story &amp; Press</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials & Reviews */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-gutter-xl">
          <div className="max-w-2xl">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Kind Words
            </span>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface mt-2">
              What Schools, Educators &amp; Listeners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg items-stretch">
            <blockquote className="bg-light-surface-container border border-light-outline rounded-xl p-6 flex flex-col justify-between gap-4">
              <p className="font-body text-body-md text-light-on-surface text-pretty">
                “Ms. Shari is an expert musician! She has a special talent for
                connecting with children and making music lessons fun and
                engaging. Our students look forward to movements, games, songs,
                and playing different instruments.”
              </p>
              <footer className="border-t border-light-outline pt-4">
                <p className="font-label text-label-lg text-light-on-surface">
                  Simin, Mehrak &amp; Shohreh
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Angus Valley Montessori · May 2023
                </p>
              </footer>
            </blockquote>

            <blockquote className="bg-light-surface-container border border-light-outline rounded-xl p-6 flex flex-col justify-between gap-4">
              <p className="font-body text-body-md text-light-on-surface text-pretty">
                “The children love when Ms. Shari comes for Music Class. Every
                week they learn something new—not just singing songs or playing
                instruments, they learn about music notes and timing too.”
              </p>
              <footer className="border-t border-light-outline pt-4">
                <p className="font-label text-label-lg text-light-on-surface">
                  Ms. Zoe, Montessori Teacher
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  AVM Vaughan · April 2023
                </p>
              </footer>
            </blockquote>

            <blockquote className="bg-light-surface-container border border-light-outline rounded-xl p-6 flex flex-col justify-between gap-4">
              <p className="font-body text-body-md text-light-on-surface text-pretty">
                “While listening to Shari perform her original piano works on
                Queen Victoria&apos;s Steinway, a front-row guest shared that she
                could see butterflies in the music and felt no pain from a past
                car accident.”
              </p>
              <footer className="border-t border-light-outline pt-4">
                <p className="font-label text-label-lg text-light-on-surface">
                  David Galbraith House Concert
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  Queen Victoria&apos;s Steinway Grand
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface-container border-t border-light-outline">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 text-center flex flex-col items-center gap-gutter-md">
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance max-w-3xl">
            Ready to bring live music or lessons into your home or school?
          </h2>
          <p className="font-body text-body-lg text-light-on-surface-variant max-w-2xl">
            Schedule a free 15-minute Zoom consultation for lessons, enquire
            about a house concert, or reserve a 100% funded school performance.
          </p>
          <div className="flex flex-wrap justify-center gap-gutter-md pt-2">
            <Button asChild>
              <Link to="/contact-bookings">Get in Touch &amp; Book</Link>
            </Button>
          </div>
        </div>
      </section>

      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        title="Rain and Sunshine (Movement II)"
        subtitle="Performed live online with Shari on both flute and piano"
        youtubeId="hlIt2Cy8NzQ"
      />
    </>
  )
}
