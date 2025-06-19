"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Prescriptions() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    prescription_number: "",
    doctor_name: "",
    message: "",
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      const response = await fetch("/api/prescriptions.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({ submitting: false, submitted: true, error: null })
        setFormData({
          name: "",
          phone: "",
          email: "",
          prescription_number: "",
          doctor_name: "",
          message: "",
        })
      } else {
        setStatus({ submitting: false, submitted: false, error: data.error || "Something went wrong" })
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: "Failed to submit prescription refill request" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12">
        <div className="container max-w-3xl px-4 md:px-6">
          <Link to="/" className="mb-6 flex items-center text-sm font-medium text-[#2980b9]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Prescription Refill Request</h1>
            <p className="text-gray-500">
              Fill out the form below to request a refill of your prescription. Our pharmacy team will process your
              request and contact you when it's ready.
            </p>
          </div>

          <div className="mt-8">
            {status.submitted ? (
              <div className="rounded-lg border bg-green-50 p-6 text-green-700">
                <h3 className="text-xl font-bold">Request Submitted Successfully!</h3>
                <p className="mt-2">
                  Thank you for your prescription refill request. Our pharmacy team will process your request and
                  contact you shortly.
                </p>
                <Button
                  className="mt-4 bg-[#2980b9] hover:bg-[#2471a3]"
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="prescription_number" className="text-sm font-medium">
                    Prescription Number
                  </label>
                  <input
                    id="prescription_number"
                    value={formData.prescription_number}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Enter your prescription number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="doctor_name" className="text-sm font-medium">
                    Doctor's Name
                  </label>
                  <input
                    id="doctor_name"
                    value={formData.doctor_name}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Enter your doctor's name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Enter any additional information or special instructions"
                  />
                </div>

                {status.error && <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">{status.error}</div>}

                <Button type="submit" className="w-full bg-[#2980b9] hover:bg-[#2471a3]" disabled={status.submitting}>
                  {status.submitting ? "Submitting..." : "Submit Refill Request"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
