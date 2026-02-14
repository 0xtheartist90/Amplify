"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface AIChatInterfaceProps {
  skipIntro?: boolean
  welcomeMessage?: string
}

export function AIChatInterface({ skipIntro = false, welcomeMessage }: AIChatInterfaceProps) {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai"; time?: string }[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize with welcome message if not skipping intro
  useEffect(() => {
    if (!skipIntro && welcomeMessage) {
      setMessages([
        {
          text: welcomeMessage,
          sender: "ai",
          time: formatTime(new Date()),
        },
      ])
    }
  }, [skipIntro, welcomeMessage])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      text: inputValue,
      sender: "user" as const,
      time: formatTime(new Date()),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "I'd be happy to help you schedule a call with our team. What day works best for you?",
        "Great question! Our services include social media management, content creation, and digital marketing strategy.",
        "I can connect you with our branding specialist. They're available this week for a consultation.",
        "Our team typically responds within 24 hours to all inquiries.",
        "We have several portfolio examples I can share with you. What industry are you interested in?",
      ]
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage = {
        text: randomResponse,
        sender: "ai" as const,
        time: formatTime(new Date()),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex flex-col h-[400px] md:h-[350px]">
      {/* Chat messages */}
      <div className="flex-grow overflow-y-auto mb-4 p-2">
        {messages.map((message, index) => (
          <div key={index} className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-xl p-3 ${
                message.sender === "user"
                  ? "bg-pink text-white rounded-tr-none"
                  : "bg-white border-2 border-black rounded-tl-none"
              }`}
            >
              {message.sender === "ai" && <div className="font-bold mb-1">Sunny</div>}
              <p>{message.text}</p>
              <div className={`text-xs mt-1 ${message.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                {message.time}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start mb-3">
            <div className="bg-white border-2 border-black rounded-xl rounded-tl-none p-3 max-w-[80%]">
              <div className="font-bold mb-1">Sunny</div>
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input form - specifically fixed for mobile */}
      <div className="relative">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow p-3 pr-12 border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-pink"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 bg-pink text-white px-4 rounded-r-full hover:bg-pink/80 transition-colors flex items-center justify-center"
            disabled={!inputValue.trim()}
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M22 2L11 13"></path>
              <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
