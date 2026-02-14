"use client"

import type React from "react"

import {
  BarChart,
  PenTool,
  Users,
  Search,
  Target,
  Calendar,
  ImageIcon,
  Type,
  Hash,
  MessageCircle,
  Bell,
  Heart,
  Globe,
  Layout,
  Code,
  Palette,
  Megaphone,
  LineChart,
  Briefcase,
} from "lucide-react"

interface ServiceIconProps {
  name: string
  size?: number
  className?: string
  color?: string
}

export default function ServiceIcon({ name, size = 24, className = "", color = "currentColor" }: ServiceIconProps) {
  // Map icon names to Lucide components
  const iconMap: Record<string, React.ReactNode> = {
    // Social Media Strategy icons
    strategy: <BarChart size={size} color={color} />,
    platform: <Globe size={size} color={color} />,
    competitor: <Search size={size} color={color} />,
    calendar: <Calendar size={size} color={color} />,

    // Content Creation icons
    content: <PenTool size={size} color={color} />,
    graphic: <ImageIcon size={size} color={color} />,
    copywriting: <Type size={size} color={color} />,
    hashtag: <Hash size={size} color={color} />,

    // Community Management icons
    community: <Users size={size} color={color} />,
    comment: <MessageCircle size={size} color={color} />,
    monitoring: <Bell size={size} color={color} />,
    building: <Heart size={size} color={color} />,

    // Website icons
    website: <Globe size={size} color={color} />,
    design: <Palette size={size} color={color} />,
    development: <Code size={size} color={color} />,
    ux: <Layout size={size} color={color} />,

    // Advertising icons
    advertising: <Megaphone size={size} color={color} />,
    ppc: <LineChart size={size} color={color} />,
    targeting: <Target size={size} color={color} />,
    campaign: <Briefcase size={size} color={color} />,

    // Branding icons
    branding: <Palette size={size} color={color} />,
    identity: <PenTool size={size} color={color} />,
    voice: <MessageCircle size={size} color={color} />,

    // Default fallback
    default: <BarChart size={size} color={color} />,
  }

  // Return the icon or default if not found
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {iconMap[name.toLowerCase()] || iconMap["default"]}
    </div>
  )
}
