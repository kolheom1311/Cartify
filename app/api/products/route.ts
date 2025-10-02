import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      "id": 1,
      "name": "Premium Wireless Headphones",
      "description": "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding for all-day listening.",
      "price": 18999,
      "image": "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      "id": 2,
      "name": "Smart Fitness Watch",
      "description": "Track your fitness goals with this advanced smartwatch. Monitor heart rate, steps, sleep patterns, and receive notifications. Water-resistant design perfect for any workout.",
      "price": 27999,
      "image": "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      "id": 3,
      "name": "Bluetooth Speaker",
      "description": "Portable wireless speaker with rich, room-filling sound. Features 12-hour battery life, waterproof design, and seamless Bluetooth connectivity for music anywhere.",
      "price": 4499,
      "image": "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      "id": 4,
      "name": "Wireless Charging Pad",
      "description": "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and overcharge protection for safe, convenient charging.",
      "price": 2199,
      "image": "https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      "id": 5,
      "name": "USB-C Hub",
      "description": "Expand your connectivity with this versatile USB-C hub. Features multiple ports including HDMI, USB 3.0, and SD card reader. Perfect for laptops and tablets.",
      "price": 4999,
      "image": "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      "id": 6,
      "name": "Laptop Stand",
      "description": "Ergonomic aluminum laptop stand that improves posture and reduces neck strain. Adjustable height with excellent heat dissipation and stable design.",
      "price": 1499,
      "image": "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      "id": 7,
      "name": "Mechanical Keyboard",
      "description": "Premium mechanical keyboard with tactile switches and RGB backlighting. Durable construction with customizable keys for gaming and productivity.",
      "price": 12499,
      "image": "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      "id": 8,
      "name": "Wireless Mouse",
      "description": "Precision wireless mouse with ergonomic design and long battery life. Features adjustable DPI settings and smooth tracking on any surface.",
      "price": 3999,
      "image": "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return NextResponse.json(products);
}