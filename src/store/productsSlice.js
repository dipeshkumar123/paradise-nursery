import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 'snake-plant',
      name: 'Snake Plant',
      price: 22,
      category: 'Indoor',
      description: 'Low-light tolerant plant with striking upright leaves.',
      image: '/plants/snake-plant.jpg',
    },
    {
      id: 'monstera-deliciosa',
      name: 'Monstera Deliciosa',
      price: 35,
      category: 'Indoor',
      description: 'Iconic split-leaf plant that thrives in bright, indirect light.',
      image: '/plants/monstera.jpg',
    },
    {
      id: 'pothos-golden',
      name: 'Golden Pothos',
      price: 18,
      category: 'Indoor',
      description: 'Fast-growing trailing plant perfect for beginners.',
      image: '/plants/pothos.jpg',
    },
    {
      id: 'aloe-vera',
      name: 'Aloe Vera',
      price: 15,
      category: 'Succulent',
      description: 'Healing succulent that loves bright windowsills.',
      image: '/plants/aloe.jpg',
    },
    {
      id: 'jade-plant',
      name: 'Jade Plant',
      price: 20,
      category: 'Succulent',
      description: 'Lucky succulent with thick, glossy leaves.',
      image: '/plants/jade.jpg',
    },
    {
      id: 'boston-fern',
      name: 'Boston Fern',
      price: 24,
      category: 'Hanging',
      description: 'Lush fern that enjoys humidity and indirect light.',
      image: '/plants/fern.jpg',
    },
  ],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export const selectAllProducts = (state) => state.products.items

export default productsSlice.reducer
