import { Link } from 'react-router-dom'
import Header from '../components/Header'

const CartPage = () => {
  return (
    <div className="cart cart--placeholder">
      <Header />
      <main className="cart__main">
        <h1>Shopping Cart</h1>
        <p>
          Cart management arrives in Step 5. For now, keep browsing our plants
          and add favorites to your wishlist.
        </p>
        <Link to="/products" className="cart__cta">
          Continue Shopping
        </Link>
      </main>
    </div>
  )
}

export default CartPage
