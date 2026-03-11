"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useLocale } from "@/lib/i18n"

interface ContactFormProps {
  subtext?: string
  className?: string
}

export default function ContactForm({ subtext, className }: ContactFormProps) {
  const { locale } = useLocale()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const copy =
    locale === "nl"
      ? {
          title: "Neem contact op",
          thankYou: "Bedankt!",
          success: "Je bericht is succesvol verzonden. We nemen snel contact met je op.",
          name: "Naam",
          email: "E-mail",
          service: "Dienst",
          message: "Bericht",
          placeholderName: "Jouw naam",
          placeholderEmail: "jouw@email.com",
          placeholderMessage: "Hoe kunnen we helpen?",
          selectService: "Kies een dienst",
          website: "Website ontwikkeling",
          branding: "Branding",
          socials: "Social media",
          ads: "Advertising",
          other: "Anders",
          sending: "Verzenden...",
          send: "Verstuur bericht",
        }
      : {
          title: "Get in Touch",
          thankYou: "Thank You!",
          success: "Your message has been sent successfully. We'll get back to you soon!",
          name: "Name",
          email: "Email",
          service: "Service",
          message: "Message",
          placeholderName: "Your name",
          placeholderEmail: "your@email.com",
          placeholderMessage: "How can we help you?",
          selectService: "Select a service",
          website: "Website Development",
          branding: "Branding",
          socials: "Social Media",
          ads: "Advertising",
          other: "Other",
          sending: "Sending...",
          send: "Send Message",
        }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form and show success message
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8", className)}>
      <h2 className="text-3xl font-bold mb-2 text-center">{copy.title}</h2>

      {subtext && <p className="text-center text-gray-600 mb-6">{subtext}</p>}

      {isSubmitted ? (
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-green-600 mb-2">{copy.thankYou}</h3>
          <p className="text-gray-700">{copy.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {copy.name} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder={copy.placeholderName}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {copy.email} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder={copy.placeholderEmail}
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              {copy.service} <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="" disabled>
                {copy.selectService}
              </option>
              <option value="website">{copy.website}</option>
              <option value="branding">{copy.branding}</option>
              <option value="socials">{copy.socials}</option>
              <option value="ads">{copy.ads}</option>
              <option value="other">{copy.other}</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {copy.message} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder={copy.placeholderMessage}
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative px-8 py-3 text-white font-bold transition-transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src="/images/button-black.webp" alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
              <span className="relative z-10">{isSubmitting ? copy.sending : copy.send}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
