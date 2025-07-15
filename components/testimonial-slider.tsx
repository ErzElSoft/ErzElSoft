"use client"

import "flickity/css/flickity.css" // brings Flickity’s styles into the bundle
import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "RetailMax Solutions",
    content:
      "ErzEl Soft transformed our e-commerce platform completely. The results exceeded our expectations with 300% faster loading times and significantly improved user experience.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    position: "CTO",
    company: "MedCare Hospital Network",
    content:
      "The healthcare management system from ErzEl Soft revolutionized our operations. Patient satisfaction increased by 95% and we reduced administrative costs by 50%.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "David Rodriguez",
    position: "Founder",
    company: "FinTech Innovations",
    content:
      "ErzEl Soft's financial dashboard solution provided us with real-time analytics that transformed our decision-making process. The ROI was evident within the first quarter.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Emily Watson",
    position: "Director of IT",
    company: "EduLearn Platform",
    content:
      "The education platform from ErzEl Soft has been a game-changer for our online learning initiatives. Student engagement increased by 200% since implementation.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "James Thompson",
    position: "Operations Manager",
    company: "Smart Industries",
    content:
      "ErzEl Soft's IoT dashboard solution streamlined our industrial operations. We now have complete visibility and control over all our smart devices and processes.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let flickity: any = null

    const initFlickity = async () => {
      if (typeof window !== "undefined") {
        const Flickity = (await import("flickity")).default

        if (sliderRef.current) {
          flickity = new Flickity(sliderRef.current, {
            cellAlign: "left",
            contain: true,
            wrapAround: true,
            autoPlay: 4000,
            pauseAutoPlayOnHover: true,
            prevNextButtons: true,
            pageDots: true,
            adaptiveHeight: false,
            groupCells: 1,
            selectedAttraction: 0.025,
            friction: 0.28,
          })
        }
      }
    }

    initFlickity()

    return () => {
      if (flickity) {
        flickity.destroy()
      }
    }
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-orange-400 fill-orange-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="testimonial-slider" ref={sliderRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide w-full md:w-1/2 lg:w-1/3 px-4">
              <Card className="h-full border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-orange-500 mr-3" />
                    <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.position} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
