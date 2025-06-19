import Image from "next/image"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

// This would normally fetch from the API, but for demonstration we'll use static data
// In a real implementation, you would use getServerSideProps or a client-side fetch
const products = [
  // Medication
  {
    id: 1,
    name: "Paracetamol",
    description: "Pain reliever and fever reducer",
    price: 800,
    category: "medication",
    image: "/images/paracetamol.jpg",
  },
  {
    id: 2,
    name: "Ibuprofen",
    description: "Anti-inflammatory pain reliever",
    price: 1200,
    category: "medication",
    image: "/images/ibuprofen.jpg",
  },
  {
    id: 3,
    name: "Non-Alcoholic Wine",
    description: "Premium sparkling grape juice beverage",
    price: 20000,
    category: "grocery",
    image: "/images/wine.jpg",
  },
  // Supplements
  {
    id: 4,
    name: "Vitamin C",
    description: "Immune system support supplement",
    price: 400,
    category: "supplements",
    image: "/images/vitamin-c.jpg",
  },
  {
    id: 5,
    name: "Wellkid Multivitamin",
    description: "Complete daily vitamin supplement for children with 21 nutrients",
    price: 3500,
    category: "supplements",
    image: "/images/wellkid-multivitamin.jpg",
  },
  {
    id: 6,
    name: "Body Spray Set",
    description: "Collection of premium deodorant body sprays in assorted fragrances",
    price: 1500,
    category: "grocery",
    image: "/images/body-spray.jpg",
  },
  // Equipment
  {
    id: 7,
    name: "Aneroid Sphygmomanometer",
    description: "Manual blood pressure monitoring device with analog gauge",
    price: 15000,
    category: "equipment",
    image: "/images/aneroid-sphygmomanometer.jpg",
  },
  {
    id: 8,
    name: "Digital Thermometer",
    description: "Non-contact infrared thermometer for safe temperature measurement",
    price: 10000,
    category: "equipment",
    image: "/images/infrared-thermometer.jpg",
  },
  {
    id: 9,
    name: "Glucose D",
    description: "Instant glucose energy supplement for quick energy boost",
    price: 2500,
    category: "supplements",
    image: "/images/glucose.jpg",
  },
  // Grocery
  {
    id: 10,
    name: "Mentos",
    description: "Chewy lemon flavored candy roll",
    price: 250,
    category: "grocery",
    image: "/images/mentos.png",
  },
  {
    id: 11,
    name: "Colgate Toothpaste",
    description: "Cavity protection toothpaste for daily oral care",
    price: 1800,
    category: "grocery",
    image: "/images/toothpaste.png",
  },
  {
    id: 12,
    name: "Milo",
    description: "Chocolate malt drink mix for energy and nutrition",
    price: 1200,
    category: "grocery",
    image: "/images/milo.jpg",
  },
]

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation would be here, but we're focusing on the products section */}

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Products</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our selection of pharmaceutical products, supplements, and grocery items.
                </p>
              </div>
            </div>

            {/* Category Filter */}
            <div className="my-8 flex flex-wrap justify-center gap-2">
              <Button variant="outline" className="rounded-full">
                All Products
              </Button>
              <Button variant="outline" className="rounded-full">
                Medication
              </Button>
              <Button variant="outline" className="rounded-full">
                Supplements
              </Button>
              <Button variant="outline" className="rounded-full">
                Equipment
              </Button>
              <Button variant="outline" className="rounded-full">
                Grocery
              </Button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <div key={product.id} className="group relative overflow-hidden rounded-lg border bg-background p-2">
                  <div className="aspect-square overflow-hidden rounded-md">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-medium">₦{product.price.toLocaleString()}</span>
                      <Button size="sm" className="bg-[#2980b9] hover:bg-[#2471a3]">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer would be here */}
    </div>
  )
}
