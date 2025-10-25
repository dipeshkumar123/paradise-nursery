const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <article className="cart-item">
      <div className="cart-item__media">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="cart-item__info">
        <h3>{item.name}</h3>
        <p className="cart-item__price">${(item.price * item.quantity).toFixed(2)}</p>
        <p className="cart-item__unit">${item.price.toFixed(2)} each</p>
      </div>
      <div className="cart-item__controls">
        <div className="cart-item__quantity">
          <button type="button" onClick={() => onDecrement(item.id)} aria-label={`Decrease ${item.name} quantity`}>
            −
          </button>
          <span aria-live="polite">{item.quantity}</span>
          <button type="button" onClick={() => onIncrement(item.id)} aria-label={`Increase ${item.name} quantity`}>
            +
          </button>
        </div>
        <button
          type="button"
          className="cart-item__remove"
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name} from cart`}
        >
          Remove
        </button>
      </div>
    </article>
  )
}

export default CartItem
