"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const caseStudies = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    client: "RetailMax Solutions",
    industry: "E-commerce & Retail",
    description: "A comprehensive online shopping solution with advanced features and seamless user experience.",
    image: "/placeholder.svg?height=300&width=500",
    results: ["300% faster loading", "99.9% uptime", "150% conversion boost"],
  },
  {
    slug: "healthcare-management",
    title: "Healthcare Management System",
    client: "MedCare Hospital Network",
    industry: "Healthcare",
    description: "Digital transformation of healthcare operations with patient management and telemedicine features.",
    image: "/placeholder.svg?height=300&width=500",
    results: ["80% time saved", "95% satisfaction", "50% cost reduction"],
  },
]

export default function CaseStudiesPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/#showcase")}
            className="text-orange-500 hover:text-orange-600"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore detailed insights into our successful projects and see how we've helped businesses achieve their
            digital transformation goals.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {caseStudies.map((study) => (
              <Card key={study.slug} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-900">{study.title}</CardTitle>
                    <span className="text-sm text-orange-500 font-medium">{study.industry}</span>
                  </div>
                  <CardDescription className="text-gray-600 mb-4">{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {study.results.map((result, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        • {result}
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => router.push(`/case-studies/${study.slug}`)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
