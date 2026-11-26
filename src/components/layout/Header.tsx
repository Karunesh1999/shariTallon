import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (path: string) => pathname === path
  const isLessonsGroup =
    pathname === "/lessons-schools" ||
    pathname === "/preschoolers" ||
    pathname === "/exceptional-students"

  const navLinkClass = (active: boolean) =>
    cn(
      "font-label text-label-lg py-1 whitespace-nowrap transition-colors duration-state-change",
      active
        ? "text-light-primary border-b-2 border-light-primary"
        : "text-light-on-surface-variant hover:text-light-primary"
    )

  return (
    <header className="sticky top-0 z-40 bg-light-surface border-b border-light-outline">
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 h-20 flex items-center justify-between gap-gutter-md">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/brand/butterfly-emblem.png"
            alt="Shari Tallon Music butterfly emblem"
            className="w-9 h-9 rounded-full object-cover border border-light-outline"
          />
          <span className="font-headline text-title-lg text-light-on-surface whitespace-nowrap">
            Shari Tallon Music
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-gutter-lg xl:gap-8"
          aria-label="Primary navigation"
        >
          <Link to="/" className={navLinkClass(isActive("/"))}>
            Home
          </Link>
          <Link to="/concerts" className={navLinkClass(isActive("/concerts"))}>
            Concerts
          </Link>
          <Link
            to="/lessons-schools"
            className={navLinkClass(isLessonsGroup)}
          >
            Lessons &amp; Schools
          </Link>
          <Link
            to="/music-media"
            className={navLinkClass(isActive("/music-media"))}
          >
            Music &amp; Media
          </Link>
          <Link
            to="/about-news"
            className={navLinkClass(isActive("/about-news"))}
          >
            About
          </Link>
          <Link
            to="/contact-bookings"
            className={navLinkClass(isActive("/contact-bookings"))}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact-bookings">Book Lessons or Concert</Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-light-outline text-light-on-surface hover:bg-light-surface-container-low transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-light-outline bg-light-surface px-6 py-gutter-lg flex flex-col gap-3">
          <Link
            to="/"
            className={cn(
              "font-label text-label-lg py-2",
              isActive("/") ? "text-light-primary" : "text-light-on-surface"
            )}
          >
            Home
          </Link>
          <Link
            to="/concerts"
            className={cn(
              "font-label text-label-lg py-2",
              isActive("/concerts") ? "text-light-primary" : "text-light-on-surface"
            )}
          >
            Concerts &amp; House Concerts
          </Link>
          <Link
            to="/lessons-schools"
            className={cn(
              "font-label text-label-lg py-2",
              isActive("/lessons-schools")
                ? "text-light-primary"
                : "text-light-on-surface"
            )}
          >
            Lessons &amp; Schools
          </Link>
          <Link
            to="/preschoolers"
            className={cn(
              "font-body text-body-md pl-4 py-1",
              isActive("/preschoolers")
                ? "text-light-primary font-semibold"
                : "text-light-on-surface-variant"
            )}
          >
            Music for Preschoolers
          </Link>
          <Link
            to="/exceptional-students"
            className={cn(
              "font-body text-body-md pl-4 py-1",
              isActive("/exceptional-students")
                ? "text-light-primary font-semibold"
                : "text-light-on-surface-variant"
            )}
          >
            Exceptional Students
          </Link>
          <Link
            to="/music-media"
            className={cn(
              "font-label text-label-lg py-2",
              isActive("/music-media")
                ? "text-light-primary"
                : "text-light-on-surface"
            )}
          >
            Music &amp; Media
          </Link>
          <Link
            to="/about-news"
            className={cn(
              "font-label text-label-lg py-2",
              isActive("/about-news")
                ? "text-light-primary"
                : "text-light-on-surface"
            )}
          >
            About, Advocacy &amp; News
          </Link>
          <Link
            to="/contact-bookings"
            className={cn(
              "font-label text-label-lg py-2",
              isActive("/contact-bookings")
                ? "text-light-primary"
                : "text-light-on-surface"
            )}
          >
            Contact &amp; Bookings
          </Link>
        </div>
      )}
    </header>
  )
}
