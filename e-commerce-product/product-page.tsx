"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState("/placeholder.svg?height=600&width=600&text=Headphones")

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const thumbnails = [
    "/placeholder.svg?height=100&width=100&text=Front",
    "/placeholder.svg?height=100&width=100&text=Side",
    "/placeholder.svg?height=100&width=100&text=Back",
    "/placeholder.svg?height=100&width=100&text=Detail",
  ]

  const changeMainImage = (image: string) => {
    setMainImage(image.replace("100", "600"))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-white">
            <img
              src={mainImage || "/placeholder.svg"}
              alt="Premium Wireless Headphones"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-md border bg-white cursor-pointer hover:border-primary"
                onClick={() => changeMainImage(thumbnail)}
              >
                <img
                  src={thumbnail || "/placeholder.svg"}
                  alt={`Product Thumbnail ${index + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Premium Wireless Headphones</h1>
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < 4 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">4.0 (128 reviews)</span>
            </div>
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">$299.99</span>
              <span className="text-sm text-muted-foreground line-through">$399.99</span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Save 25%</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Free shipping on orders over $50</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium">Color</p>
            <div className="flex gap-2">
              <button className="h-8 w-8 rounded-full bg-black ring-2 ring-primary ring-offset-2"></button>
              <button className="h-8 w-8 rounded-full bg-white border"></button>
              <button className="h-8 w-8 rounded-full bg-blue-500"></button>
              <button className="h-8 w-8 rounded-full bg-red-500"></button>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium">Quantity</p>
            <div className="flex items-center">
              <Button variant="outline" size="icon" onClick={decrementQuantity}>
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={incrementQuantity}>
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button className="flex-1 gap-2">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1">
              Buy Now
            </Button>
          </div>

          <div className="space-y-4 border-t pt-4">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Experience premium sound quality with our wireless headphones. Featuring active noise cancellation,
                  these headphones deliver an immersive audio experience. With up to 30 hours of battery life,
                  comfortable ear cushions, and intuitive touch controls, they're perfect for everyday use.
                </p>
              </TabsContent>
              <TabsContent value="specifications" className="pt-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Driver Size:</strong> 40mm
                  </li>
                  <li>
                    <strong>Frequency Response:</strong> 20Hz - 20kHz
                  </li>
                  <li>
                    <strong>Battery Life:</strong> Up to 30 hours
                  </li>
                  <li>
                    <strong>Charging Time:</strong> 2 hours
                  </li>
                  <li>
                    <strong>Bluetooth Version:</strong> 5.0
                  </li>
                  <li>
                    <strong>Weight:</strong> 250g
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="reviews" className="pt-4">
                <div className="space-y-4">
                  {[1, 2].map((review) => (
                    <div key={review} className="border-b pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xs font-medium">JD</span>
                          </div>
                          <span className="font-medium">John Doe</span>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        These headphones are amazing! The sound quality is excellent and the noise cancellation works
                        perfectly. Battery life is impressive too.
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">You might also like</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Wireless Earbuds", "Bluetooth Speaker", "Noise-Cancelling Headphones", "Gaming Headset"].map(
            (productName, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=${productName.replace(" ", "+")}`}
                    alt={productName}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">{productName}</h3>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="font-bold">${(99 + index * 30).toFixed(2)}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="ml-1 text-xs text-muted-foreground">4.{5 - (index % 2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

