export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { cart } = await request.json();

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json(
        { success: false, message: "Invalid cart data" },
        { status: 400 }
      );
    }

    console.log("✅ New Order Received:");
    cart.forEach((item) => {
      console.log(`- ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`);
    });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({
      success: true,
      orderId: `ORDER-${Date.now()}`,
      message: "Order placed successfully!",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to process order" },
      { status: 500 }
    );
  }
}