import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function ExceptionalStudentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-gutter-md">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Over Two Decades of Experience
            </span>
            <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-surface text-balance">
              Individualized Music for Exceptional Students
            </h1>
            <p className="font-body text-body-lg text-light-on-surface-variant text-pretty max-w-prose">
              Compassionate, student-led music sessions designed around each
              learner&apos;s strengths, interests, and sensory profile—fostering
              joy, creative expression, and confidence.
            </p>
            <div className="pt-2">
              <Button asChild>
                <Link to="/contact-bookings#book-lesson">
                  Schedule a 15-Minute Zoom Chat
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src="/images/lessons/daniel-and-shari.jpg"
              alt="Shari Tallon with her music student Daniel"
              className="w-full aspect-[4/3] object-cover rounded-xl border border-light-outline"
            />
          </div>
        </div>
      </section>

      {/* Student Experiences */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface-container-low border-y border-light-outline">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-gutter-xl">
          <div className="max-w-2xl">
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface">
              Learning Through Favorite Music
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant mt-2">
              Every student&apos;s musical curiosity leads the way—whether
              country classics, Disney songs, or original melodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
            <div className="bg-light-surface-container-high border border-light-outline rounded-xl p-6 flex flex-col gap-2">
              <h3 className="font-headline text-title-lg text-light-on-surface">
                Guitar Lessons
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                “He loves country music and always looked forward to our music
                sessions together.”
              </p>
            </div>
            <div className="bg-light-surface-container-high border border-light-outline rounded-xl p-6 flex flex-col gap-2">
              <h3 className="font-headline text-title-lg text-light-on-surface">
                Keyboard Lessons
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                “Alan Jackson, Sheryl Crow, and a love for Disney songs inspired
                this student to play keyboard.”
              </p>
            </div>
            <div className="bg-light-surface-container-high border border-light-outline rounded-xl p-6 flex flex-col gap-2">
              <h3 className="font-headline text-title-lg text-light-on-surface">
                Piano Lessons
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                “This student loved Country and Western and always had great joy
                learning, singing, and playing his favorite songs.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sensory Integration & Community Living */}
      <section className="py-section-sm lg:py-section-lg bg-light-surface">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-gutter-xl">
          <div className="bg-light-surface-container border border-light-outline rounded-xl p-8 flex flex-col gap-4">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Sensory-Informed Approach
            </span>
            <h2 className="font-headline text-headline-md text-light-on-surface">
              Sensory Diets &amp; Individual Support
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Many students on the spectrum have a remarkable ability to play,
              create, and remember music. Shari draws on practical strategies
              from <em>Building Bridges Through Sensory Integration</em>{" "}
              (written by three Occupational Therapists)—including sensory
              checklists, calming, and organizing techniques—to help each
              student feel comfortable and supported.
            </p>
          </div>

          <div className="bg-light-surface-container-low border border-light-outline rounded-xl p-8 flex flex-col gap-4">
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Community &amp; Family Story
            </span>
            <h2 className="font-headline text-headline-md text-light-on-surface">
              Perth Courier &amp; Community Living Sharbot Lake
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Shari served on the Board of Community Living in Sharbot Lake and
              facilitated individual and group music programs to benefit
              children with special needs. In a <em>Perth Courier</em>{" "}
              feature, she shared her personal family journey supporting her
              son&apos;s focus and learning—who went on to become an Aerospace
              Engineer, metallurgist, manager, and professor.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
