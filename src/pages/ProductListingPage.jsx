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
        <section className="catalog-hero">
          <div className="catalog-hero__text">
            <span className="catalog-pill">Shop the greenhouse</span>
            <h1>Curated houseplants for every light level</h1>
            <p>
              Filter by lifestyle-friendly collections and discover plants loved by stylists and
              horticulture pros. Every plant ships with a tailored care guide and support from our
              team.
            </p>
            <div className="catalog-hero__meta">
              <article>
                <strong>Free potting</strong>
                <span>Complimentary soil & planters with bundles</span>
              </article>
              <article>
                <strong>Gift ready</strong>
                <span>Optional handwritten note and unwrap experience</span>
              </article>
            </div>
          </div>
          <aside className="catalog-hero__card">
            <h3>Trending this week</h3>
            <ul>
              <li>
                <span>🌿</span>
                <div>
                  <strong>ZZ Raven</strong>
                  <p>Thrives on neglect. Ideal for dim corners.</p>
                </div>
              </li>
              <li>
                <span>🪴</span>
                <div>
                  <strong>String of Pearls</strong>
                  <p>Trailing succulent with dramatic texture.</p>
                </div>
              </li>
              <li>
                <span>🌱</span>
                <div>
                  <strong>Fiddle Leaf Fig</strong>
                  <p>Statement tree for bright, airy rooms.</p>
                </div>
              </li>
            </ul>
          </aside>
        </section>

        <section className="catalog-toolbar" aria-label="Filter options">
          <div className="catalog-toolbar__chips">
            <button type="button">Beginner friendly</button>
            <button type="button">Low-light</button>
            <button type="button">Pet safe</button>
            <button type="button">Air purifying</button>
          </div>
          <div className="catalog-toolbar__meta">
            <span>{products.length} plants in collection</span>
            <span>Ships nationwide in eco packaging</span>
          </div>
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

        <section className="catalog-banner" aria-label="Specialist support">
          <div>
            <h3>Need help picking plants?</h3>
            <p>
              Book a free 15-minute styling session and we&apos;ll curate a bundle matched to your
              space, lighting, and schedule.
            </p>
          </div>
          <a href="#" className="catalog-banner__cta" aria-label="Schedule a plant styling session">
            Schedule a consult
          </a>
        </section>
      </main>
    </div>
  )
}

export default ProductListingPage
