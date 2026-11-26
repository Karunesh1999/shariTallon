import { useState, type FormEvent } from "react"
import { Calendar, CheckCircle2, Clock, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
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

const sessionTypes = [
  "Free 15-Min Zoom Consultation",
  "Free Trial Online Lesson (30 min)",
  "Kids / Adult Online Lesson",
]

const instruments = [
  "Piano",
  "Flute",
  "Guitar",
  "Ukulele",
  "Singing / Voice",
  "Songwriting & Composition",
  "Exceptional Students Session",
]

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "2:00 PM",
  "4:00 PM",
  "5:30 PM",
  "7:00 PM",
]

export function ContactBookingsPage() {
  // General enquiry form state
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [enquiryType, setEnquiryType] = useState(enquiryOptions[0])
  const [message, setMessage] = useState("")

  // Online lesson appointment scheduler state
  const [sessionType, setSessionType] = useState(sessionTypes[0])
  const [instrument, setInstrument] = useState(instruments[0])
  const [appointmentDate, setAppointmentDate] = useState("")
  const [selectedTime, setSelectedTime] = useState(timeSlots[0])
  const [studentName, setStudentName] = useState("")
  const [studentEmail, setStudentEmail] = useState("")
  const [appointmentBooked, setAppointmentBooked] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleBookAppointment = (e: FormEvent) => {
    e.preventDefault()
    setAppointmentBooked(true)
  }

  const mailtoSubject = encodeURIComponent(
    `Online Lesson Appointment: ${sessionType} (${instrument})`
  )
  const mailtoBody = encodeURIComponent(
    `Hi Shari,\n\nI would like to book an online appointment:\n- Session: ${sessionType}\n- Instrument/Focus: ${instrument}\n- Date: ${appointmentDate || "Flexible"}\n- Time: ${selectedTime} (EST)\n- Name: ${studentName}\n- Email: ${studentEmail}\n\nThank you!`
  )

  return (
    <section className="py-section-sm lg:py-section-lg bg-light-surface">
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 flex flex-col gap-gutter-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl">
          {/* Left Column: Direct Details & External Portals */}
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

            <div className="bg-light-surface-container border border-light-outline rounded-xl p-6 flex flex-col gap-3">
              <h2 className="font-headline text-title-lg text-light-on-surface">
                External Booking Portals
              </h2>
              <p className="font-body text-body-sm text-light-on-surface-variant">
                Existing booking links preserved from sharitallonmusic.com:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
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
              Select your enquiry type so Shari can respond with availability
              and next steps.
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

        {/* Dedicated Online Lesson Appointment Scheduler */}
        <div
          id="book-lesson"
          className="bg-light-surface-container-low border border-light-outline rounded-xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Badge className="w-fit">Online Lesson Booking</Badge>
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-md text-light-on-surface">
                Book Free Online Lesson Here
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                Would you like to creatively explore the beautiful experience of
                playing music? Reserve a free 15-minute Zoom consultation or a
                trial online music lesson directly—no account login required.
              </p>
              <div className="flex flex-col gap-2.5 pt-2 text-body-sm text-light-on-surface-variant">
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4 text-light-primary shrink-0" />
                  <span>Live 1-on-1 via Zoom (Worldwide)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-light-primary shrink-0" />
                  <span>15-min Consultation or 30-min Trial Lesson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-light-primary shrink-0" />
                  <span>Kids, Adults &amp; Exceptional Students Welcome</span>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleBookAppointment}
              className="lg:col-span-7 bg-light-surface-container-high border border-light-outline rounded-xl p-6 sm:p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="session-type">Session Type</Label>
                  <Select value={sessionType} onValueChange={setSessionType}>
                    <SelectTrigger id="session-type">
                      <SelectValue placeholder="Choose session" />
                    </SelectTrigger>
                    <SelectContent>
                      {sessionTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="instrument-select">Instrument / Focus</Label>
                  <Select value={instrument} onValueChange={setInstrument}>
                    <SelectTrigger id="instrument-select">
                      <SelectValue placeholder="Choose instrument" />
                    </SelectTrigger>
                    <SelectContent>
                      {instruments.map((inst) => (
                        <SelectItem key={inst} value={inst}>
                          {inst}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="appointment-date">Preferred Date *</Label>
                  <Input
                    id="appointment-date"
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Preferred Time (EST)</Label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`px-3 py-2 rounded-full font-label text-label-md border transition-colors cursor-pointer ${selectedTime === slot
                            ? "bg-light-primary text-light-on-primary border-light-primary"
                            : "bg-light-surface border-light-outline text-light-on-surface hover:border-light-primary"
                          }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="student-name">Student / Parent Name *</Label>
                  <Input
                    id="student-name"
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Full name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="student-email">Email Address *</Label>
                  <Input
                    id="student-email"
                    type="email"
                    required
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <Button type="submit">Book Online Appointment</Button>
                {appointmentBooked && (
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 font-body text-body-sm text-light-primary">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>
                        Slot requested: {appointmentDate} at {selectedTime} EST
                      </span>
                    </span>
                    <a
                      href={`mailto:shari.tallon@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`}
                      className="font-label text-label-md text-light-primary underline"
                    >
                      Confirm via Email
                    </a>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
