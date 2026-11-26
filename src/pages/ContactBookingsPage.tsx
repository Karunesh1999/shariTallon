import { useState, type FormEvent } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const enquiryOptions = [
  "Book a Free 15-Minute Zoom Lesson Consultation",
  "House Concert / Private Event / Wedding",
  "Kids & Family Concert (Library, Festival, Fair)",
  "100% Funded School Concert / Workshop (MPTF)",
  "Preschool / Montessori / Community Center Program",
  "Exceptional Students Music Session",
  "General Question or Media Enquiry",
]

export function ContactBookingsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [enquiryType, setEnquiryType] = useState(enquiryOptions[0])
  const [message, setMessage] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-section-sm lg:py-section-lg bg-light-surface">
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl">
        {/* Left Column: Direct Details & Quick Booking Options */}
        <div className="lg:col-span-5 flex flex-col gap-gutter-lg">
          <div>
            <span className="font-label text-label-md text-light-primary uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-surface mt-2">
              Contact &amp; Bookings
            </h1>
            <p className="font-body text-body-lg text-light-on-surface-variant mt-3">
              Drop Shari a line to schedule a free 15-minute Zoom lesson
              consultation, book a house or family concert, or apply for 100%
              funded school workshops.
            </p>
          </div>

          <div className="bg-light-surface-container-low border border-light-outline rounded-xl p-6 flex flex-col gap-4">
            <div>
              <p className="font-label text-label-md text-light-primary uppercase">
                Direct Email
              </p>
              <a
                href="mailto:shari.tallon@gmail.com"
                className="font-headline text-title-lg text-light-on-surface hover:text-light-primary transition-colors"
              >
                shari.tallon@gmail.com
              </a>
            </div>
            <div>
              <p className="font-label text-label-md text-light-primary uppercase">
                Location
              </p>
              <p className="font-body text-body-md text-light-on-surface">
                Toronto, Ontario, Canada (Online Worldwide)
              </p>
            </div>
            <div>
              <p className="font-label text-label-md text-light-primary uppercase">
                Phone
              </p>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                [Placeholder: Insert studio phone number]
              </p>
            </div>
          </div>

          <div
            id="book-lesson"
            className="bg-light-surface-container border border-light-outline rounded-xl p-6 flex flex-col gap-3"
          >
            <h2 className="font-headline text-title-lg text-light-on-surface">
              External Booking Portals
            </h2>
            <p className="font-body text-body-sm text-light-on-surface-variant">
              Existing booking links preserved from sharitallonmusic.com:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="https://sharitallonmusic.com/book-lessons-online"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-light-surface-container-high border border-light-outline font-label text-label-md text-light-on-surface hover:border-light-primary transition-colors"
              >
                Online Lesson Portal
              </a>
              <a
                href="https://www.gigsalad.com/shari_tallon_music"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-light-surface-container-high border border-light-outline font-label text-label-md text-light-on-surface hover:border-light-primary transition-colors"
              >
                GigSalad Concerts
              </a>
              <a
                href="https://sharitallonmusic.com/m/bookings"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-light-surface-container-high border border-light-outline font-label text-label-md text-light-on-surface hover:border-light-primary transition-colors"
              >
                Member Bookings
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Structured Enquiry Form */}
        <div
          id="enquiry-form"
          className="lg:col-span-7 bg-light-surface-container-high border border-light-outline rounded-xl p-8"
        >
          <div id="concert-enquiry" />
          <div id="school-enquiry" />
          <h2 className="font-headline text-headline-md text-light-on-surface mb-2">
            Send a Message or Booking Request
          </h2>
          <p className="font-body text-body-md text-light-on-surface-variant mb-6">
            Select your enquiry type so Shari can respond with availability and
            next steps.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-name">Your Name *</Label>
                <Input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-email">Email Address *</Label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="enquiry-type">Enquiry Type</Label>
              <Select value={enquiryType} onValueChange={setEnquiryType}>
                <SelectTrigger id="enquiry-type">
                  <SelectValue placeholder="Select enquiry type" />
                </SelectTrigger>
                <SelectContent>
                  {enquiryOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-message">
                Details, Preferred Dates or Musical Goals
              </Label>
              <Textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell Shari about your student, event date, or school..."
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <Button type="submit">Send Enquiry to Shari</Button>
              {submitted && (
                <span className="inline-flex items-center gap-1.5 font-body text-body-sm text-light-primary">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  <span>
                    Thank you{name ? `, ${name}` : ""}! Ready to send to
                    shari.tallon@gmail.com.
                  </span>
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
