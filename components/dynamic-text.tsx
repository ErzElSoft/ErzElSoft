"use client"

import { useState, useEffect } from "react"

const dynamicWords = [
  "IT Solutions",
  "Web Development",
  "Mobile Apps",
  "Cloud Solutions",
  "Digital Strategy",
  "Software Development",
  "Tech Innovation",
  "Digital Transformation",
]

export default function DynamicText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex === dynamicWords.length - 1 ? 0 : prevIndex + 1))
        setIsVisible(true)
      }, 300)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`text-orange-500 relative transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {dynamicWords[currentWordIndex]}
      <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 animate-expand-width"></div>
    </span>
  )
}
