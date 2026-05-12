import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  textClassName?: string
}

const sizeMap = {
  sm: { container: "w-24 h-8", text: "text-sm", image: 96 },
  md: { container: "w-28 h-10", text: "text-base", image: 112 },
  lg: { container: "w-48 h-16", text: "text-lg", image: 192 },
  xl: { container: "w-64 h-20", text: "text-2xl", image: 256 },
}

export function Logo({ 
  className, 
  size = "md", 
  showText = true,
  textClassName 
}: LogoProps) {
  const dimensions = sizeMap[size]
  
  return (
    <a href="/" className={cn("flex items-center", className)}>
      <div className={cn(
        "relative overflow-hidden flex items-center justify-center",
        dimensions.container
      )}>
        <Image
          src="/msquaretransparentlogo.png"
          alt="M Square"
          width={dimensions.image}
          height={dimensions.image}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </a>
  )
}

export function LogoIcon({ 
  className, 
  size = "md" 
}: Omit<LogoProps, "showText" | "textClassName">) {
  const dimensions = sizeMap[size]
  
  return (
    <div className={cn(
      "relative overflow-hidden flex items-center justify-center",
      dimensions.container,
      className
    )}>
      <Image
        src="/msquaretransparentlogo.png"
        alt="M Square"
        width={dimensions.image}
        height={dimensions.image}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  )
}
