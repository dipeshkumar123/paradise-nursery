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
        <section className="cart-hero">
          <div className="cart-hero__summary">
            <span className="cart-pill">Step 1 of 3</span>
            <h1>Review your plant bundle</h1>
            <p>{summaryLabel}</p>
          </div>
          <div className="cart-hero__totals">
            <div>
              <span>Current total</span>
              <strong>{formattedTotal}</strong>
            </div>
            <p>Free shipping over $75 · 30-day happiness guarantee</p>
          </div>
        </section>

        {hasItems ? (
          <div className="cart-layout">
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

            <aside className="cart-sidebar">
              <section className="cart-steps" aria-label="Checkout steps">
                <h2>Checkout timeline</h2>
                <ol>
                  <li>
                    <span>1</span>
                    <div>
                      <strong>Review bundle</strong>
                      <p>Confirm plants, quantities, and add notes.</p>
                    </div>
                  </li>
                  <li>
                    <span>2</span>
                    <div>
                      <strong>Delivery details</strong>
                      <p>Choose delivery window and add gift options.</p>
                    </div>
                  </li>
                  <li>
                    <span>3</span>
                    <div>
                      <strong>Secure payment</strong>
                      <p>Checkout via card, UPI, or cash on delivery.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section className="cart-perks" aria-label="Order perks">
                <h2>Included with every order</h2>
                <ul>
                  <li>
                    <span>📦</span>
                    Sustainable, soil-secure packaging
                  </li>
                  <li>
                    <span>📘</span>
                    Care guide printed & emailed for quick reference
                  </li>
                  <li>
                    <span>💬</span>
                    Priority chat with horticulture specialists
                  </li>
                </ul>
              </section>
            </aside>
          </div>
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

        {hasItems && (
          <section className="cart-actions">
            <button type="button" className="cart-actions__checkout" onClick={handleCheckout}>
              Proceed to delivery
            </button>
            <Link to="/products" className="cart-actions__continue">
              Continue shopping
            </Link>
            {checkoutMessage && <p className="cart-actions__message">{checkoutMessage}</p>}
          </section>
        )}
      </main>
    </div>
  )
}

export default CartPage
