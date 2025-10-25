import { useMemo } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { addToCart, selectCartItems } from '../store/cartSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectAllProducts } from '../store/productsSlice'

const ProductListingPage = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectAllProducts)
  const cartItems = useAppSelector(selectCartItems)

  const groupedProducts = useMemo(() => {
    const map = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    }, {})

    return Object.entries(map)
  }, [products])

  const cartIds = useMemo(() => new Set(cartItems.map((item) => item.id)), [cartItems])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="catalog">
      <Header />
      <main className="catalog__main">
        <section className="catalog__intro">
          <h1>Curated Houseplants</h1>
          <p>
            Explore resilient indoor favorites, sun-loving succulents, and lush
            hanging varieties. Add your favorites to the cart to start building a
            personalized bundle.
          </p>
        </section>
        {groupedProducts.map(([category, items]) => (
          <section key={category} className="catalog__section" aria-label={category}>
            <div className="catalog__section-header">
              <h2>{category}</h2>
              <span>{items.length} plants</span>
            </div>
            <div className="catalog__grid">
              {items.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isInCart={cartIds.has(product.id)}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default ProductListingPage
