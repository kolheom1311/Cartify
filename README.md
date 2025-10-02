# 🛍️ Simple Shopping Cart – ASE Challenge Submission

Welcome to my submission for the **Associate Software Engineer (ASE) Challenge** at **Verto**. This project implements a **minimal e-commerce web application** with both **frontend** and **backend** components, designed to meet all the requirements outlined in the challenge.

---

## 🎯 Project Goal

A minimal e-commerce application to:

* List products fetched from a backend API.
* Add products to a cart.
* Manage and update cart state.
* Simulate a checkout process by sending cart data to a backend endpoint.

---

## 📦 Features Implemented

### 🖥️ Frontend

* Displays products in a responsive grid layout.
* "Add to Cart" button for each product.
* Cart state managed on the client side.
* Cart view page/modal shows items, quantity, and total price.
* "Checkout" button sends the cart data to the backend.
* Bonus ✅: Cart persists in `localStorage` so it remains after refresh.
* Bonus ✅: Quantity can be updated directly from the cart.

### 🔧 Backend

* **GET** `/api/products` – Returns a hardcoded JSON list of 8 products with `id`, `name`, `price`, and `imageUrl`.
* **POST** `/api/checkout` – Accepts product IDs and quantities, logs the order to the console, and returns a success message with an `orderId`.
* Bonus ✅: Includes a backend test file for the `/api/products` endpoint.

---

## 📁 Project Structure

```
├─ app/
│  ├─ api/
│  │  ├─ products/route.ts       # GET products API
│  │  ├─ checkout/route.ts       # POST checkout API
│  ├─ page.tsx                   # Main product listing page
│  ├─ cart/page.tsx              # Cart page
|
├─ package.json
├─ README.md
```

---

## 🚀 Live Demo (Deployed on Vercel)

🔗 [https://your-vercel-domain.vercel.app](https://your-vercel-domain.vercel.app)

* Products API: [https://your-vercel-domain.vercel.app/api/products](https://your-vercel-domain.vercel.app/api/products)
* Checkout API: [https://your-vercel-domain.vercel.app/api/checkout](https://your-vercel-domain.vercel.app/api/checkout)

---

## ⚙️ Local Setup & Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/simple-shopping-cart.git
cd simple-shopping-cart
npm install
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

* Backend endpoint: [http://localhost:3000/api/products](http://localhost:3000/api/products)

---

## 📡 API Endpoints

### **GET** `/api/products`

Returns a hardcoded list of products.

Example Response:

```json
[
  {
    "id": 1,
    "name": "Premium Wireless Headphones",
    "price": 1999,
    "image": "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
  }
]
```

### **POST** `/api/checkout`

Accepts a cart object and returns a simulated order confirmation.

Request:

```json
{
  "cart": [
    { "id": 1, "quantity": 2 }
  ]
}
```

Response:

```json
{
  "success": true,
  "orderId": "ORDER-1695901223456",
  "message": "Order placed successfully!"
}
```

---

## 🧪 Running Backend Tests

A test case for the `/api/products` endpoint is included.

You can also manually test this endpoint using tools like **Postman** or **Thunder Client** by sending an **HTTP GET** request to:

`GET /api/products`

This allows you to verify that the endpoint responds correctly and returns the expected product data.


📌 **Note:** As noted in the [Notion](https://giddy-runner-f4c.notion.site/ASE-Challenge-278c67fdf6d48038aec8d64bef58f5a4?p=279c67fdf6d48149a9dbf54a9e3a7279&pm=s&pvs=31) document, the endpoint is listed as `/products` however, since this implementation uses an API route, the correct endpoint is `/api/products`.

---

## 🧠 Assumptions & Design Choices

* No database is used, as per the project requirements – products are hardcoded.
* Cart state is managed entirely on the client side using React state and `localStorage`.
* The backend simply logs order data to the console to simulate checkout.
* Clean code and separation of concerns have been prioritized for clarity.

---

## 🧰 Tech Stack

* **Next.js 13.5 (App Router)** – Fullstack framework
* **TypeScript** – Strong typing and maintainability
* **TailwindCSS** – Rapid, responsive styling

---

## 🧑‍💻 About This Project

This project was built as part of the **Associate Software Engineer Challenge** for **Verto**, showcasing the ability to design and implement a simple full-stack solution with clean code, well-defined APIs, and effective state management.

It aligns with the challenge's evaluation criteria:

* ✅ Clear separation of frontend and backend
* ✅ Fully functional core features
* ✅ Bonus features implemented
* ✅ Backend test case provided

---

## 📹 Bonus: Video Walkthrough

(Optional but recommended) – A short video explaining:

* The project structure
* API design
* Frontend logic
* Testing strategy

---

### 📌 Notes for Reviewers

* This repository demonstrates fundamental fullstack skills with a focus on clarity and maintainability.
* The `/api/products` endpoint is functional both locally and in the deployed version.
* Backend test files are provided but excluded from deployment.

---

**Thank you for reviewing my submission!** 🚀
