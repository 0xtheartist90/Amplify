import type React from "react"

interface TeamMemberCardProps {
  name: string
  role: string
  imageSrc: string
  bgColor: string
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageSrc, bgColor }) => {
  return (
    <div className="text-center">
      <div
        className={`mx-auto mb-4 ${bgColor} rounded-full border-2 border-black overflow-hidden`}
        style={{ width: "180px", height: "180px" }}
      >
        <img src={imageSrc || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-ultra mb-1 text-white text-shadow">{name}</h3>
      <p className="text-pink font-medium bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 inline-block">{role}</p>
    </div>
  )
}
