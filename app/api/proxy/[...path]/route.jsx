// This file acts as a proxy to forward requests to PHP backend

export async function GET(request, { params }) {
  const { path } = params
  const { searchParams } = new URL(request.url)

  // Convert searchParams to query string
  const queryString = Array.from(searchParams.entries())
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&")

  // Construct the URL to the PHP endpoint
  const url = `${process.env.PHP_API_URL || "http://localhost/morhac/api"}/${path.join("/")}${queryString ? `?${queryString}` : ""}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: "Failed to fetch data from PHP backend" }, { status: 500 })
  }
}

export async function POST(request, { params }) {
  const { path } = params
  const body = await request.json()

  // Construct the URL to the PHP endpoint
  const url = `${process.env.PHP_API_URL || "http://localhost/morhac/api"}/${path.join("/")}`

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: "Failed to send data to PHP backend" }, { status: 500 })
  }
}
