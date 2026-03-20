import Image from "next/image"

interface NationallyRecognisedBadgeProps {
  className?: string
  text?: string
}

export function NationallyRecognisedBadge({
  className = "",
  text = "Nationally Recognised Training Provider",
}: NationallyRecognisedBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-xs font-semibold shadow-sm border border-gray-100 ${className}`}
    >
      <Image
        src="/images/nationally-recognised.svg"
        alt="Nationally Recognised Training"
        width={22}
        height={22}
        className="w-[22px] h-[22px] object-contain"
      />
      <span className="text-[#333333]">{text}</span>
    </span>
  )
}
