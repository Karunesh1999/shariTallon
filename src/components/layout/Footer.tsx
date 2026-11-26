import { Link } from "react-router-dom"

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
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/shari.tallonmusic/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 mt-gutter-xl pt-gutter-lg border-t border-light-outline flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-body-sm text-light-on-surface-variant">
          Copyright © 2026 Shari Tallon Music — All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/sharipiano"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@sharitallonmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            TikTok
          </a>
          <a
            href="https://www.linkedin.com/in/shari-tallon-45745810"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-body-sm text-light-on-surface-variant hover:text-light-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
