import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  subject: string
  projectType: string
  message: string
}

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0] : request.ip || "unknown"
  return ip
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // Max 5 requests per 15 minutes

  const record = rateLimitStore.get(key)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

function validateFormData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || typeof data.name !== "string" || data.name.trim().length === 0) {
    errors.push("Name is required")
  }

  if (!data.email || typeof data.email !== "string") {
    errors.push("Email is required")
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Invalid email format")
  }

  if (!data.subject || typeof data.subject !== "string" || data.subject.trim().length === 0) {
    errors.push("Subject is required")
  }

  if (!data.projectType || typeof data.projectType !== "string") {
    errors.push("Project type is required")
  } else if (!["web-development", "design", "collaboration", "other"].includes(data.projectType)) {
    errors.push("Invalid project type")
  }

  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long")
  }

  return { isValid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    // Parse request body
    const body = await request.json()

    // Validate form data
    const { isValid, errors } = validateFormData(body)
    if (!isValid) {
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 400 })
    }

    const formData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      subject: body.subject.trim(),
      projectType: body.projectType,
      message: body.message.trim(),
    }

    // Log the contact form submission (in production, save to database)
    console.log("Contact form submission:", {
      ...formData,
      timestamp: new Date().toISOString(),
      ip: getRateLimitKey(request),
    })

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-reply email

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Send success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
