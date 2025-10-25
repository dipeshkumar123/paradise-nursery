const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        <p className="product-card__description">{product.description}</p>
      </div>
      <button
        type="button"
        className="product-card__cta"
        disabled={isInCart}
        onClick={() => onAddToCart(product)}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </article>
  )
}

export default ProductCard
