import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existing = state.items.find((item) => item.id === product.id)

      if (existing) {
        existing.quantity += 1
        return
      }

      state.items.push({
        ...product,
        quantity: 1,
      })
    },
    removeFromCart: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter((item) => item.id !== productId)
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload
      const target = state.items.find((item) => item.id === productId)

      if (target) {
        target.quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload
      const target = state.items.find((item) => item.id === productId)

      if (!target) return

      if (target.quantity <= 1) {
        state.items = state.items.filter((item) => item.id !== productId)
        return
      }

      target.quantity -= 1
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0)
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer
