import ContactForm from "@/components/ContactForm"

export default function DesktopContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section - adjusted height to match Portfolio page */}
      <div className="relative hero-background-container">
        <img src="/images/contact-hero-new.webp" alt="Contact Us Background" className="hero-background-image" />
      </div>

      {/* Contact Form Section with Video Background */}
      <div className="relative flex-1 bg-black py-20">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5084245-uhd_3840_2160_30fps-ffWSZHKNoupdQqz1fr2hYTPADPsoLW.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            <ContactForm
              className="h-full max-w-none mx-0"
              subtext="We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible."
            />

            <div className="h-full w-full">
              <iframe
                src="https://calendar.notion.so/meet/aurareingoud/virtual-coffee"
                title="Aura Notion Calendar"
                className="w-full h-full min-h-[32rem] rounded-xl border-2 border-black bg-white/90 backdrop-blur-sm shadow-xl"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
