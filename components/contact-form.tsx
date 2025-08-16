"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-2xl font-serif font-bold text-primary">Send Me a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-foreground font-medium">
              Name *
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-border bg-background rounded-md px-3 py-2"
              placeholder="Your full name"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-accent text-primary-foreground"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
