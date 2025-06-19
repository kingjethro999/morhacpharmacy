import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Morhac Pharmacy & Stores",
  description:
    "Your complete health and wellness destination, combining pharmacy services with supermarket convenience.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
