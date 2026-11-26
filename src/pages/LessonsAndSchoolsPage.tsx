import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LessonsAndSchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-gutter-md">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Online &amp; In-Studio · Ontario
            </span>
            <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-surface text-balance">
              Music Lessons, Schools &amp; Community Programs
            </h1>
            <p className="font-body text-body-lg text-light-on-surface-variant text-pretty max-w-prose">
              Collaborative, joyful music education for children, adults,
              community centers, and K–12 schools. Start with a free 15-minute
              Zoom consultation to explore your musical goals.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link to="/contact-bookings#book-lesson">
                  Schedule 15-Min Zoom Chat
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#funding-schools">100% School Funding</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/images/lessons/music-lessons-kids-hero.png"
              alt="Music lessons and joyful learning with Shari Tallon"
              className="w-full aspect-[4/3] object-cover rounded-xl border border-light-outline"
            />
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface-container-low border-t border-light-outline">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-gutter-xl">
          <div className="max-w-2xl">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Explore by Category
            </span>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface mt-2">
              Programs &amp; Specialized Music Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch">
            <Link
              to="/preschoolers"
              className="group bg-light-surface-container-high border border-light-outline rounded-xl overflow-hidden flex flex-col h-full hover:border-light-primary transition-colors duration-state-change"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/images/preschoolers/preschoolers-keyboards.jpg"
                  alt="Preschoolers exploring keyboards and percussion with Shari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <h3 className="font-headline text-headline-sm text-light-on-surface group-hover:text-light-primary transition-colors duration-state-change">
                    Music for Preschoolers &amp; Babies
                  </h3>
                  <p className="font-body text-body-md text-light-on-surface-variant mt-2">
                    Toddle Tunes, Rainbow Rockers, Music for Little Mozarts, and
                    Keyboards for Casa—nurturing physical, social, and emotional
                    growth.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary pt-3">
                  <span>Explore Preschool Programs</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link
              to="/exceptional-students"
              className="group bg-light-surface-container-high border border-light-outline rounded-xl overflow-hidden flex flex-col h-full hover:border-light-primary transition-colors duration-state-change"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/images/lessons/daniel-and-shari.jpg"
                  alt="Shari Tallon with an exceptional music student at the piano"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <h3 className="font-headline text-headline-sm text-light-on-surface group-hover:text-light-primary transition-colors duration-state-change">
                    Exceptional Students
                  </h3>
                  <p className="font-body text-body-md text-light-on-surface-variant mt-2">
                    Over two decades of individualized guitar, keyboard, and
                    piano sessions tailored to each student&apos;s sensory
                    profile and musical joy.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary pt-3">
                  <span>Read About Exceptionalities</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Kids & Adult Lessons */}
      <section
        id="kids-lessons"
        className="py-section-sm lg:py-section-lg bg-light-surface-container-low border-y border-light-outline"
      >
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-gutter-xl">
          {/* Kids */}
          <div className="bg-light-surface-container-high border border-light-outline rounded-xl p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
                Ages 4 to Teens
              </span>
              <h2 className="font-headline text-headline-md text-light-on-surface">
                Music Lessons for Kids
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Piano (Classical, Popular, Jazz &amp; Improvisation), Keyboard,
                Guitar, Ukulele, Flute, Singing, Drums, Music Theory, and
                Drama—including Uxbridge recitals like <em>Rockin&apos; Robin</em>
                .
              </p>
              <div className="bg-light-surface-container-low border border-light-outline rounded-lg p-4">
                <p className="font-body text-body-sm text-light-on-surface-variant">
                  [Placeholder: Insert 30 / 45 / 60-minute lesson rates &amp;
                  availability]
                </p>
              </div>
            </div>
            <Button size="sm" className="w-fit" asChild>
              <Link to="/contact-bookings#book-lesson">
                Book Free Kids Consultation
              </Link>
            </Button>
          </div>

          {/* Adults */}
          <div
            id="adult-lessons"
            className="bg-light-surface-container-high border border-light-outline rounded-xl p-8 flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col gap-4">
              <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
                Finally, You Have Time to Play
              </span>
              <h2 className="font-headline text-headline-md text-light-on-surface">
                Music Lessons for Adults
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Online or in-studio sessions in Piano, Flute, Songwriting,
                Composition, Music Theory, Beginner Guitar, Ukulele, and
                Singing. Playing music supports cognitive function, mental
                health, dexterity, and emotional release.
              </p>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                Also available: Shari&apos;s intermediate piano piece{" "}
                <em>My Father&apos;s Waltz</em> on SheetMusicDirect &amp;
                SheetMusicPlus.
              </p>
            </div>
            <Button variant="secondary" size="sm" className="w-fit" asChild>
              <Link to="/contact-bookings#book-lesson">
                Book Free Adult Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 100% Funding for Schools */}
      <section
        id="funding-schools"
        className="py-section-sm lg:py-section-lg bg-light-surface"
      >
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-gutter-md">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Music Performance Trust Fund
            </span>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface">
              100% Funded Concerts &amp; Workshops for K–12 Schools
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Through the Toronto Musicians&apos; Association and the Music
              Performance Trust Fund, schools and libraries receive professional
              concerts and Grades 9–12 improvisation/rhythm workshops at{" "}
              <strong>no cost</strong>.
            </p>
            <div className="bg-light-surface-container border border-light-outline rounded-xl p-5 flex flex-col gap-2">
              <p className="font-label text-label-lg text-light-on-surface">
                2026/27 Grant Availability
              </p>
              <p className="font-body text-body-md text-light-on-surface-variant">
                100% funding available for 6 schools (2 spots currently open, with
                2 more pending spring approval). 10 schools funded in 2025/26.
              </p>
            </div>
            <p className="font-body text-body-sm text-light-on-surface-variant">
              <strong>Past TCDSB Schools:</strong> St. Cecilia, St. Monica, St.
              Rose of Lima, St. Dorothy, St. Roch, St. Maria Goretti, Michael
              Power/St. Joseph S.S., St. Anne.
            </p>
            <Button className="w-fit" asChild>
              <Link to="/contact-bookings#school-enquiry">
                Apply for a Funded School Spot
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-6">
            <img
              src="/images/lessons/school-concert.jpg"
              alt="Shari Tallon performing for school students"
              className="w-full aspect-[4/3] object-cover rounded-xl border border-light-outline"
            />
          </div>
        </div>
      </section>

      {/* Community Centers & Creative Players */}
      <section
        id="community-centers"
        className="py-section-sm lg:py-section-lg bg-light-surface-container-low border-t border-light-outline"
      >
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl">
          <div className="lg:col-span-7 flex flex-col gap-gutter-md">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Community Center Programs
            </span>
            <h2 className="font-headline text-headline-md text-light-on-surface">
              Angus Glen &amp; Stouffville Leisure Centre (Winter 2027)
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Saturday morning group classes featuring keyboards, percussion,
              drums, ukuleles, guitars, and puppets. Angus Glen registration
              opens Dec 1; Stouffville Leisure Centre enrolment opens Nov 24 for
              Jan 9 – Mar 13, 2027.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-light-surface-container-high border border-light-outline rounded-lg p-4">
                <p className="font-label text-label-lg text-light-on-surface">
                  Rainbow Rockers (1–2 yrs)
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant tabular-nums">
                  9:00 – 9:30 AM
                </p>
              </div>
              <div className="bg-light-surface-container-high border border-light-outline rounded-lg p-4">
                <p className="font-label text-label-lg text-light-on-surface">
                  Rainbow Rockers Preschool
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant tabular-nums">
                  9:45 – 10:15 AM
                </p>
              </div>
              <div className="bg-light-surface-container-high border border-light-outline rounded-lg p-4">
                <p className="font-label text-label-lg text-light-on-surface">
                  Music for Little Mozarts (4–6 yrs)
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant tabular-nums">
                  10:30 – 11:00 AM
                </p>
              </div>
              <div className="bg-light-surface-container-high border border-light-outline rounded-lg p-4">
                <p className="font-label text-label-lg text-light-on-surface">
                  Music Marvels (7–9 yrs)
                </p>
                <p className="font-body text-body-sm text-light-on-surface-variant tabular-nums">
                  11:15 AM – 12:00 PM
                </p>
              </div>
            </div>
            <p className="font-body text-body-sm text-light-on-surface-variant">
              [Placeholder: Direct Town of Whitchurch-Stouffville &amp; City of
              Markham registration links]
            </p>
          </div>

          <div
            id="creative-players"
            className="lg:col-span-5 bg-light-surface-container-high border border-light-outline rounded-xl p-8 flex flex-col justify-between gap-4"
          >
            <div className="flex flex-col gap-3">
              <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
                Performance Arts for Kids
              </span>
              <h3 className="font-headline text-headline-sm text-light-on-surface">
                The Creative Players After-School Program
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Socio-dramatic play—skits, improvisations, costumes, props,
                music, and sound effects—proven to strengthen cooperative play,
                vocabulary growth, confidence, and emotional well-being.
              </p>
            </div>
            <Link
              to="/preschoolers"
              className="inline-flex items-center gap-2 font-label text-label-lg text-light-primary hover:underline"
            >
              <span>See Preschool &amp; Educator Workshops</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
