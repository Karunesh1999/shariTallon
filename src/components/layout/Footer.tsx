import { Link } from "react-router-dom"

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3v6Z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-light-surface-container-low border-t border-light-outline py-section-sm">
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 md:grid-cols-12 gap-gutter-xl">
        <div className="md:col-span-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/images/brand/butterfly-emblem.png"
              alt="Shari Tallon Music emblem"
              className="w-8 h-8 rounded-full object-cover border border-light-outline"
            />
            <span className="font-headline text-title-lg text-light-on-surface">
              Shari Tallon Music
            </span>
          </div>
          <p className="font-body text-body-sm text-light-on-surface-variant">
            Toronto, Ontario, Canada
          </p>
          <a
            href="mailto:shari.tallon@gmail.com"
            className="font-body text-body-sm text-light-primary hover:underline"
          >
            shari.tallon@gmail.com
          </a>
        </div>

        <div className="md:col-span-3 flex flex-col gap-2">
          <h3 className="font-label text-label-lg text-light-on-surface mb-1">
            Performances
          </h3>
          <Link
            to="/concerts"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            Concerts &amp; House Concerts
          </Link>
          <Link
            to="/music-media"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            Piano, Flute &amp; The Free Spirits
          </Link>
          <Link
            to="/music-media#music-store"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            Shari&apos;s Music Store
          </Link>
        </div>

        <div className="md:col-span-3 flex flex-col gap-2">
          <h3 className="font-label text-label-lg text-light-on-surface mb-1">
            Education
          </h3>
          <Link
            to="/lessons-schools"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            Kids, Adults &amp; School Funding
          </Link>
          <Link
            to="/preschoolers"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            Music for Preschoolers
          </Link>
          <Link
            to="/exceptional-students"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            Exceptional Students
          </Link>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <h3 className="font-label text-label-lg text-light-on-surface mb-1">
            Connect
          </h3>
          <Link
            to="/about-news"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            About &amp; In the News
          </Link>
          <Link
            to="/contact-bookings"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            Contact &amp; Bookings
          </Link>
          <a
            href="https://www.youtube.com/@sharitallon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            <YoutubeIcon className="h-4 w-4 shrink-0" />
            <span>YouTube</span>
          </a>
          <a
            href="https://www.facebook.com/shari.tallonmusic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            <FacebookIcon className="h-4 w-4 shrink-0" />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 mt-gutter-xl pt-gutter-lg border-t border-light-outline flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-body-sm text-light-on-surface-variant">
          Copyright © 2026 Shari Tallon Music — All Rights Reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/sharipiano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            <InstagramIcon className="h-4 w-4 shrink-0" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@sharitallonmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            <TikTokIcon className="h-4 w-4 shrink-0" />
            <span>TikTok</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shari-tallon-45745810"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            <LinkedinIcon className="h-4 w-4 shrink-0" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
