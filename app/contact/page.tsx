import ContactForm from "@/components/ContactForm"

export default function DesktopContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section - adjusted height to match Portfolio page */}
      <div className="relative hero-background-container">
        <img src="/images/contact-hero-new.png" alt="Contact Us Background" className="hero-background-image" />
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
          <div className="contact-form-container mb-20">
            <ContactForm subtext="We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible." />
          </div>
        </div>
      </div>
    </div>
  )
}
