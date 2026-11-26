import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DropdownItem {
  label: string
  to: string
}

const concertsMenu: DropdownItem[] = [
  { label: "Concert Pianist", to: "/concerts#pianist" },
  { label: "Flute Performances", to: "/concerts#flute" },
  { label: "House Concerts", to: "/concerts#house-concerts" },
  { label: "Kids & Family Concerts", to: "/concerts#family-concerts" },
  { label: "Concert Videos", to: "/concerts#videos" },
]

const lessonsMenu: DropdownItem[] = [
  { label: "Music Lessons for Kids", to: "/lessons-schools#kids-lessons" },
  { label: "Music Lessons for Adults", to: "/lessons-schools#adult-lessons" },
  { label: "Music for Preschoolers", to: "/preschoolers" },
  { label: "Community Center Programs", to: "/lessons-schools#community-centers" },
  { label: "Music for Exceptional Students", to: "/exceptional-students" },
  { label: "Funding for Schools (100% Grant)", to: "/lessons-schools#funding-schools" },
  { label: "Performance Arts for Kids", to: "/lessons-schools#creative-players" },
]

const musicMenu: DropdownItem[] = [
  { label: "Piano Music", to: "/music-media#piano-music" },
  { label: "Shari on Flute", to: "/music-media#flute-music" },
  { label: "Singer / Songwriter", to: "/music-media#singer-songwriter" },
  { label: "The Free Spirits", to: "/music-media#free-spirits" },
  { label: "Shari's Music Store", to: "/music-media#music-store" },
]

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

          <div className="relative group">
            <Link
              to="/concerts"
              className={cn(
                "inline-flex items-center gap-1",
                navLinkClass(isActive("/concerts"))
              )}
            >
              <span>Concerts</span>
              <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <div className="hidden group-hover:block absolute left-0 top-full pt-2 w-60 z-50">
              <div className="bg-light-surface-container-high border border-light-outline rounded-lg p-2 flex flex-col gap-1 shadow-sm">
                {concertsMenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-3 py-2 rounded-sm font-body text-body-sm text-light-on-surface hover:bg-light-surface-container-low transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link
              to="/lessons-schools"
              className={cn(
                "inline-flex items-center gap-1",
                navLinkClass(isLessonsGroup)
              )}
            >
              <span>Lessons &amp; Schools</span>
              <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <div className="hidden group-hover:block absolute left-0 top-full pt-2 w-64 z-50">
              <div className="bg-light-surface-container-high border border-light-outline rounded-lg p-2 flex flex-col gap-1 shadow-sm">
                {lessonsMenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-3 py-2 rounded-sm font-body text-body-sm text-light-on-surface hover:bg-light-surface-container-low transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link
              to="/music-media"
              className={cn(
                "inline-flex items-center gap-1",
                navLinkClass(isActive("/music-media"))
              )}
            >
              <span>Music &amp; Media</span>
              <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <div className="hidden group-hover:block absolute left-0 top-full pt-2 w-60 z-50">
              <div className="bg-light-surface-container-high border border-light-outline rounded-lg p-2 flex flex-col gap-1 shadow-sm">
                {musicMenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-3 py-2 rounded-sm font-body text-body-sm text-light-on-surface hover:bg-light-surface-container-low transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

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
