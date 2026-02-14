"use client"

import { useState } from "react"
import { Clock, ChevronLeft, ChevronRight, X } from "lucide-react"
import { CustomButton } from "./custom-button"

interface ScheduleCalendarProps {
  onSchedule: (date: string, time: string) => void
  onClose: () => void
}

export function ScheduleCalendar({ onSchedule, onClose }: ScheduleCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    // Don't allow selecting dates in the past
    if (newDate >= new Date(new Date().setHours(0, 0, 0, 0))) {
      setSelectedDate(newDate)
      setSelectedTime(null)
    }
  }

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      const formattedDate = selectedDate.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
      onSchedule(formattedDate, selectedTime)
    }
  }

  const renderCalendarDays = () => {
    const days = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const isToday = date.getTime() === today.getTime()
      const isSelected = selectedDate && date.getTime() === selectedDate.getTime()
      const isPast = date < today

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          disabled={isPast}
          className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${
            isSelected
              ? "bg-pink text-white"
              : isToday
                ? "bg-yellow border border-black"
                : isPast
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:bg-gray-100"
          }`}
        >
          {day}
        </button>,
      )
    }

    return days
  }

  return (
    <div className="bg-white rounded-lg shadow-xl border-2 border-black p-4 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-ultra">Schedule a Call</h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
          <X size={20} />
        </button>
      </div>

      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft size={20} />
        </button>
        <h4 className="font-bold">{currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h4>
        <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="h-8 flex items-center justify-center font-medium text-sm">
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div className="mt-4">
          <h4 className="font-bold mb-2 flex items-center">
            <Clock size={16} className="mr-1" />
            Select a Time
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-3 rounded-md text-sm ${
                  selectedTime === time ? "bg-pink text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Schedule Button */}
      <div className="mt-6">
        <CustomButton
          href="#"
          color="pink"
          className={`w-full ${!selectedDate || !selectedTime ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleSchedule}
        >
          Schedule Call
        </CustomButton>
      </div>
    </div>
  )
}
