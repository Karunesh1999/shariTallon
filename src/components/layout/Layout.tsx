import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top, behavior: "smooth" })
        }, 50)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [pathname, hash])

  return (
    <div className="min-h-screen flex flex-col bg-light-surface text-light-on-surface font-body antialiased">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

