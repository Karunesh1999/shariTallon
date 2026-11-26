import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { HomePage } from "@/pages/HomePage"
import { ConcertsPage } from "@/pages/ConcertsPage"
import { LessonsAndSchoolsPage } from "@/pages/LessonsAndSchoolsPage"
import { PreschoolersPage } from "@/pages/PreschoolersPage"
import { ExceptionalStudentsPage } from "@/pages/ExceptionalStudentsPage"
import { MusicAndMediaPage } from "@/pages/MusicAndMediaPage"
import { AboutAdvocacyNewsPage } from "@/pages/AboutAdvocacyNewsPage"
import { ContactBookingsPage } from "@/pages/ContactBookingsPage"

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/concerts" element={<ConcertsPage />} />
          <Route path="/lessons-schools" element={<LessonsAndSchoolsPage />} />
          <Route path="/preschoolers" element={<PreschoolersPage />} />
          <Route path="/exceptional-students" element={<ExceptionalStudentsPage />} />
          <Route path="/music-media" element={<MusicAndMediaPage />} />
          <Route path="/about-news" element={<AboutAdvocacyNewsPage />} />
          <Route path="/contact-bookings" element={<ContactBookingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
