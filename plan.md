# 🗂️ Peer Review Assignment Plan

This document outlines the step-by-step plan to complete the **Paradise Nursery Shopping Application** project, fulfilling all 19 grading criteria (50 points total).

---

## ✅ 1. Setup & Environment (6 points)

### 🔧 GitHub Repository (2 pts)
- [ ] Create a **public GitHub repository** named `paradise-nursery-app`.
- [ ] Initialize with a `README.md` describing the project.
- [ ] Push all project files and commits regularly.

### 🧩 Redux Integration (4 pts)
- [ ] Set up Redux in the project.
- [ ] Create Redux **store** and **provider**.
- [ ] Implement **actions** and **reducers** for:
  - Cart management (add, remove, increment, decrement)
  - Product listing (optional if static)
- [ ] Organize Redux files in a `redux/` or `store/` directory.

---

## 🏠 2. Landing Page (5 points)

### 🎨 Design & Content
- [ ] Add a **background image** (1 pt).
- [ ] Include a **paragraph** describing the Paradise Nursery company (1 pt).
- [ ] Display the **company name** prominently (1 pt).
- [ ] Add a **"Get Started"** button (2 pts):
  - [ ] Navigates to the Product Listing Page.

---

## 🛒 3. Product Listing Page (9 points)

### 🪴 Product Display (3 pts)
- [ ] Show **6 unique houseplants**.
  - [ ] Each plant must have:
    - Thumbnail image
    - Name
    - Price
- [ ] Group plants into **at least 3 categories** (e.g., Indoor, Outdoor, Succulents) (1 pt)

### ➕ Add to Cart Functionality (6 pts)
- [ ] Each plant has an **Add to Cart** button.
  - [ ] On click:
    - [ ] Cart icon count increases by 1.
    - [ ] Button becomes **disabled**.
    - [ ] Plant is added to the **Redux cart state**.

---

## 🧭 4. Header Component (7 points)

### 🧱 Shared Header (2 pts)
- [ ] Create a **Header** component.
  - [ ] Displayed on both Product Listing and Shopping Cart pages.

### 🛍️ Cart Icon (3 pts)
- [ ] Include a **shopping cart icon**.
  - [ ] Displays **total number of items** in the cart (from Redux state).

### 🔗 Navigation (2 pts)
- [ ] Add navigation links:
  - [ ] Link to **Product Listing Page**
  - [ ] Link to **Shopping Cart Page**

---

## 🧾 5. Shopping Cart Page (23 points)

### 📦 Cart Summary
- [ ] Show **total number of plants** in the cart (2 pts).
- [ ] Show **total cost** of all items (2 pts).

### 🌿 Cart Items Display (6 pts)
- [ ] For each plant in the cart, display:
  - Thumbnail
  - Name
  - Unit price

### ➕➖ Item Controls (8 pts)
- [ ] **Increase** button:
  - [ ] Increments quantity by 1
  - [ ] Updates total count and cost (4 pts)
- [ ] **Decrease** button:
  - [ ] Decrements quantity by 1
  - [ ] Updates total count and cost (4 pts)

### ❌ Delete & Checkout (3 pts)
- [ ] **Delete** button to remove item from cart (2 pts)
- [ ] **Checkout** button:
  - [ ] Displays “Coming Soon” or similar message (1 pt)

### 🔁 Continue Shopping (2 pts)
- [ ] Add a **Continue Shopping** button:
  - [ ] Navigates back to Product Listing Page

---

## 📦 6. Final Steps

### 🔍 Testing
- [ ] Test all functionality:
  - Add to cart
  - Cart updates
  - Navigation
  - Redux state updates

### 📤 Submission
- [ ] Deploy the app (e.g., GitHub Pages, Netlify, Vercel).
- [ ] Copy the **live site URL** and **GitHub repo URL**.
- [ ] Submit both links on Coursera.