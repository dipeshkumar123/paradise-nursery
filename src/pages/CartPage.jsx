import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import CartItem from '../components/CartItem'
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from '../store/cartSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const CartPage = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(selectCartItems)
  const cartCount = useAppSelector(selectCartCount)
  const cartTotal = useAppSelector(selectCartTotal)
  const [checkoutMessage, setCheckoutMessage] = useState('')

  const hasItems = cartItems.length > 0

  const summaryLabel = useMemo(() => {
    if (!hasItems) return 'Your cart is empty'
    return cartCount === 1 ? '1 plant in cart' : `${cartCount} plants in cart`
  }, [cartCount, hasItems])

  const formattedTotal = useMemo(() => currencyFormatter.format(cartTotal), [cartTotal])

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId))
  }

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId))
  }

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const handleCheckout = () => {
    setCheckoutMessage('Checkout is coming soon. Stay tuned!')
  }

  return (
    <div className="cart">
      <Header />
      <main className="cart__main" aria-live="polite">
        <section className="cart-summary">
          <div className="cart-summary__totals">
            <h1>Shopping Cart</h1>
            <p>{summaryLabel}</p>
          </div>
          <div className="cart-summary__amount">
            <span>Total</span>
            <strong>{formattedTotal}</strong>
          </div>
        </section>

        {hasItems ? (
          <>
            <section className="cart-items">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  onRemove={handleRemove}
                />
              ))}
            </section>

            <section className="cart-actions">
              <button type="button" className="cart-actions__checkout" onClick={handleCheckout}>
                Checkout
              </button>
              <Link to="/products" className="cart-actions__continue">
                Continue Shopping
              </Link>
            </section>

            {checkoutMessage && <p className="cart-actions__message">{checkoutMessage}</p>}
          </>
        ) : (
          <section className="cart-empty">
            <p>
              You have not added any plants yet. Browse our collection and find the perfect greenery
              for your space.
            </p>
            <Link to="/products" className="cart__cta">
              Explore Plants
            </Link>
          </section>
        )}
      </main>
    </div>
  )
}

export default CartPage
