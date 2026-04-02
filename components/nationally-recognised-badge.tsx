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
      className={`national-badge ${className}`}
    >
      <Image
        src="/images/nationally-recognised.svg"
        alt="Nationally Recognised Training"
        width={22}
        height={22}
        className="w-[22px] h-[22px] object-contain"
      />
      <span className="text-[#3B3969]">{text}</span>
    </span>
  )
}
