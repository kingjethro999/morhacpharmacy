import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, MapPin, Phone, ShoppingBag, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/pharm-amorha.png"
              alt="Pharm. Chinedum Amorha"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-medium">Pharm. Chinedum Amorha</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#pharmacy" className="text-sm font-medium transition-colors hover:text-primary">
              Pharmacy
            </Link>
            <Link href="#supermarket" className="text-sm font-medium transition-colors hover:text-primary">
              Supermarket
            </Link>
            <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="/prescriptions" className="text-sm font-medium transition-colors hover:text-primary">
              Refill Prescription
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm" className="hidden md:flex">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="hidden md:flex bg-[#2980b9] hover:bg-[#2471a3]">
                Sign Up
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ebf5fb] to-sky-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Welcome to Morhac Pharmacy & Stores
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Morhac combines a full-service pharmacy with a convenient supermarket, offering everything you need
                  for your health and daily essentials in one place.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#2980b9] hover:bg-[#2471a3]">
                    <Stethoscope className="mr-2 h-4 w-4" /> Pharmacy Services
                  </Button>
                  <Button variant="outline">
                    <ShoppingBag className="mr-2 h-4 w-4" /> Shop Products
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/morhac-storefront.jpg"
                  alt="Morhac Pharmacy and Supermarket Storefront"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#d4e6f1] px-3 py-1 text-sm text-[#2980b9]">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">All Your Needs in One Place</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Morhac offers a unique combination of pharmacy services and supermarket convenience, saving you time
                  and providing expert care.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#d4e6f1] p-3">
                  <Stethoscope className="h-6 w-6 text-[#2980b9]" />
                </div>
                <h3 className="text-xl font-bold">Expert Pharmacists</h3>
                <p className="text-center text-gray-500">
                  Our licensed pharmacists provide personalized medication counseling and health advice.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#d4e6f1] p-3">
                  <ShoppingBag className="h-6 w-6 text-[#2980b9]" />
                </div>
                <h3 className="text-xl font-bold">Quality Products</h3>
                <p className="text-center text-gray-500">
                  We stock a wide range of high-quality groceries, household items, and health products.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#d4e6f1] p-3">
                  <Clock className="h-6 w-6 text-[#2980b9]" />
                </div>
                <h3 className="text-xl font-bold">Convenient Hours</h3>
                <p className="text-center text-gray-500">
                  Open extended hours to accommodate your busy schedule and urgent needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pharmacy Section */}
        <section id="pharmacy" className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#d4e6f1] px-3 py-1 text-sm text-[#2980b9]">
                  Pharmacy Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Complete Pharmaceutical Care
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our pharmacy offers prescription filling, medication management, health consultations, and a wide
                  range of over-the-counter medications.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm">
                  <ChevronRight className="h-5 w-5 text-[#2980b9] flex-shrink-0" />
                  <span className="font-medium">Prescription Filling & Refills</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm">
                  <ChevronRight className="h-5 w-5 text-[#2980b9] flex-shrink-0" />
                  <span className="font-medium">Medication Counseling</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm">
                  <ChevronRight className="h-5 w-5 text-[#2980b9] flex-shrink-0" />
                  <span className="font-medium">Health Screenings</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm">
                  <ChevronRight className="h-5 w-5 text-[#2980b9] flex-shrink-0" />
                  <span className="font-medium">Immunizations & Vaccinations</span>
                </div>
              </div>
              <Button className="bg-[#2980b9] hover:bg-[#2471a3]">Learn More About Our Pharmacy</Button>
            </div>
          </div>
        </section>

        {/* Supermarket Section */}
        <section id="supermarket" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-700">Supermarket</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Fresh & Essential Products
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our supermarket offers fresh produce, pantry staples, household essentials, and specialty health foods
                  to meet all your daily needs.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border">
                  <ChevronRight className="h-5 w-5 text-sky-600 flex-shrink-0" />
                  <span className="font-medium">Fresh Fruits & Vegetables</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border">
                  <ChevronRight className="h-5 w-5 text-sky-600 flex-shrink-0" />
                  <span className="font-medium">Dairy & Refrigerated Items</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border">
                  <ChevronRight className="h-5 w-5 text-sky-600 flex-shrink-0" />
                  <span className="font-medium">Pantry Staples & Dry Goods</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border">
                  <ChevronRight className="h-5 w-5 text-sky-600 flex-shrink-0" />
                  <span className="font-medium">Health Foods & Specialty Items</span>
                </div>
              </div>
              <Button className="bg-sky-600 hover:bg-sky-700">Explore Our Products</Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Morhac</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Morhac Pharmacy and Supermarket was founded with a vision to provide comprehensive health services
                  alongside everyday essentials, creating a one-stop destination for our community.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <p className="mb-6 text-gray-500">
                Since our establishment, we've been committed to delivering exceptional pharmaceutical care and quality
                products. Our team of experienced pharmacists and friendly staff work together to ensure every customer
                receives personalized attention and expert advice.
              </p>
              <p className="mb-6 text-gray-500">
                We believe in making healthcare accessible and convenient, which is why we've combined our full-service
                pharmacy with a well-stocked supermarket. This unique combination allows our customers to address their
                health needs while completing their regular shopping in one visit.
              </p>
              <p className="text-gray-500">
                At Morhac, we're more than just a pharmacy and supermarket – we're a health partner dedicated to
                improving the wellbeing of our community through quality products, professional services, and genuine
                care.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about our services or products? Our team is here to help. Reach out to us through any
                  of the following methods.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-[#2980b9]" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-gray-500">
                        Suite 5, Mazafalah Shopping Complex, Karu Site Roundabout, Karu, Abuja
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-[#2980b9]" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-500">08023240153, 08054427266</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 text-[#2980b9]" />
                    <div>
                      <h3 className="font-bold">Hours</h3>
                      <p className="text-gray-500">Monday-Friday: 8:00 AM - 11:00 PM</p>
                      <p className="text-gray-500">Saturday: 9:00 AM - 11:00 PM</p>
                      <p className="text-gray-500">Sunday: 10:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form component */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/pharm-amorha.png"
                  alt="Pharm. Chinedum Amorha"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-medium">Pharm. Chinedum Amorha</span>
              </div>
              <p className="text-sm text-gray-500">
                Your complete health and wellness destination, combining pharmacy services with supermarket convenience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#pharmacy" className="text-gray-500 hover:text-primary">
                    Pharmacy Services
                  </Link>
                </li>
                <li>
                  <Link href="#supermarket" className="text-gray-500 hover:text-primary">
                    Supermarket
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-500 hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-500 hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Prescription Filling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Medication Counseling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Health Screenings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Grocery Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Special Orders
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#2980b9]" />
                  <span className="text-gray-500">
                    Suite 5, Mazafalah Shopping Complex, Karu Site Roundabout, Karu, Abuja
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#2980b9]" />
                  <span className="text-gray-500">08023240153, 08054427266</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#2980b9]"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-gray-500">morhac@yahoo.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Morhac Pharmacy and Supermarket. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
