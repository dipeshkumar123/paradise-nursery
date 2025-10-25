import { NavLink } from 'react-router-dom'
import { selectCartCount } from '../store/cartSlice'
import { useAppSelector } from '../store/hooks'

const Header = () => {
  const cartCount = useAppSelector(selectCartCount)

  const buildLinkClass = ({ isActive }) =>
    isActive ? 'app-header__link app-header__link--active' : 'app-header__link'

  const buildCartClass = ({ isActive }) =>
    isActive ? 'app-header__cart app-header__cart--active' : 'app-header__cart'

  return (
    <header className="app-header">
      <NavLink to="/" end className="app-header__brand">
        Paradise Nursery
      </NavLink>
      <nav className="app-header__nav">
        <NavLink to="/" end className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={buildCartClass} aria-label="Shopping cart">
          <span className="app-header__cart-icon" aria-hidden="true">
            🛒
          </span>
          <span className="app-header__cart-count">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
