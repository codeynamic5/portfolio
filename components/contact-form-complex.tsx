"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  subject: string
  projectType: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  projectType?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          projectType: "",
          message: "",
        })
        setErrors({})
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-2xl font-serif font-bold text-primary">Send Me a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`border-border bg-background ${errors.name ? "border-destructive" : ""}`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`border-border bg-background ${errors.email ? "border-destructive" : ""}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground font-medium">
              Subject *
            </Label>
            <Input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className={`border-border bg-background ${errors.subject ? "border-destructive" : ""}`}
              placeholder="Brief description of your inquiry"
            />
            {errors.subject && <p className="text-destructive text-sm">{errors.subject}</p>}
          </div>

          {/* Project Type Field */}
          <div className="space-y-2">
            <Label htmlFor="projectType" className="text-foreground font-medium">
              Project Type *
            </Label>
            <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
              <SelectTrigger
                className={`border-border bg-background ${errors.projectType ? "border-destructive" : ""}`}
              >
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="collaboration">Collaboration</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.projectType && <p className="text-destructive text-sm">{errors.projectType}</p>}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`border-border bg-background min-h-32 ${errors.message ? "border-destructive" : ""}`}
              placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
            />
            {errors.message && <p className="text-destructive text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-accent text-primary-foreground disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </Button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                Thank you for your message! I'll get back to you within 24 hours.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">
                Sorry, there was an error sending your message. Please try again or contact me directly.
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
