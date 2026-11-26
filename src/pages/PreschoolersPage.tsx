import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function PreschoolersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-gutter-md">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Early Childhood Specialist · Babies to Casa
            </span>
            <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-surface text-balance">
              Music for Preschoolers, Toddlers &amp; Babies
            </h1>
            <p className="font-body text-body-lg text-light-on-surface-variant text-pretty max-w-prose">
              From babies to Casa, this is the ideal stage to introduce
              music—developing fine motor skills, hand-eye coordination, social
              turn-taking, and emotional expression through keyboards, ukuleles,
              and percussion.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link to="/contact-bookings#school-enquiry">
                  Enquire for Your School
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#reviews">Montessori Reviews</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-gutter-md">
            <img
              src="/images/preschoolers/remi-hand-position.png"
              alt="Preschool student demonstrating proper piano hand position"
              className="w-full aspect-square object-cover rounded-xl border border-light-outline"
            />
            <img
              src="/images/preschoolers/babies-circle-time.jpg"
              alt="Babies and toddlers in circle time music class"
              className="w-full aspect-square object-cover rounded-xl border border-light-outline mt-6"
            />
          </div>
        </div>
      </section>

      {/* Curriculum Domains & Programs */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface-container-low border-y border-light-outline">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-gutter-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
            <div className="bg-light-surface-container-high border border-light-outline rounded-xl p-6">
              <h2 className="font-headline text-title-lg text-light-on-surface mb-2">
                Toddle Tunes &amp; Babies
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Interactive circle time, puppets, rhythm shakers, and gentle
                songs supporting early language and bonding.
              </p>
            </div>
            <div className="bg-light-surface-container-high border border-light-outline rounded-xl p-6">
              <h2 className="font-headline text-title-lg text-light-on-surface mb-2">
                Keyboards for Casa &amp; Piano
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Developing fine motor control, hand-eye coordination, music
                notes, and timing on keyboards, ukuleles, and percussion.
              </p>
            </div>
            <div className="bg-light-surface-container-high border border-light-outline rounded-xl p-6">
              <h2 className="font-headline text-title-lg text-light-on-surface mb-2">
                Teacher Resources &amp; Workshops
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Hands-on music workshops for early childhood educators and 12
                original musical resources used worldwide.
              </p>
            </div>
          </div>

          {/* Classroom Photo Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter-md">
            <img
              src="/images/preschoolers/casa-montessori.jpg"
              alt="Casa Montessori music class"
              className="w-full aspect-[4/3] object-cover rounded-xl border border-light-outline"
            />
            <img
              src="/images/preschoolers/stouffville-preschool.jpg"
              alt="Preschoolers playing instruments together in Stouffville"
              className="w-full aspect-[4/3] object-cover rounded-xl border border-light-outline"
            />
            <img
              src="/images/preschoolers/rhythm-band.jpg"
              alt="Children in rhythm band class"
              className="w-full aspect-[4/3] object-cover rounded-xl border border-light-outline"
            />
          </div>
        </div>
      </section>

      {/* Montessori & Community Centre Reviews */}
      <section
        id="reviews"
        className="py-section-sm lg:py-section-lg bg-light-surface"
      >
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
          <blockquote className="bg-light-surface-container border border-light-outline rounded-xl p-8 flex flex-col justify-between gap-4">
            <p className="font-body text-body-lg text-light-on-surface text-pretty">
              “Ms. Shari is an expert musician! She has a special talent for
              connecting with children and making music lessons fun and
              engaging. Our students are looking forward to experiencing
              movements, games, songs, and playing different instruments with
              Ms. Shari.”
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

          <blockquote className="bg-light-surface-container border border-light-outline rounded-xl p-8 flex flex-col justify-between gap-4">
            <p className="font-body text-body-lg text-light-on-surface text-pretty">
              “The children love when Ms. Shari comes for Music Class. Every
              week they learn something new. It&apos;s not just singing songs or
              playing instruments, they learn about music notes and timing too.
              Ms. Shari always comes to our classroom with a smile on her face.”
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
        </div>
      </section>
    </>
  )
}
