import { Link } from 'react-router-dom'

const LandingPage = () => {
  const backgroundImage = `${import.meta.env.BASE_URL}plants/hero-bg.svg`

  return (
    <div className="landing" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="landing__overlay">
        <header className="landing__header">
          <span className="landing__tag">Paradise Nursery</span>
          <h1 className="landing__title">Bring Lush Life Into Your Home</h1>
          <p className="landing__description">
            We handpick resilient houseplants, curate care guides, and deliver
            joy in every pot. Whether you are a seasoned plant parent or just
            getting started, Paradise Nursery makes it effortless to grow a
            thriving indoor jungle.
          </p>
          <Link to="/products" className="landing__cta">
            Get Started
          </Link>
        </header>
      </div>
    </div>
  )
}

export default LandingPage
