import { Link } from 'react-router-dom'

const LandingPage = () => {
  const heroBackground = `${import.meta.env.BASE_URL}plants/hero-bg.svg`
  const heroFeature = `${import.meta.env.BASE_URL}plants/monstera.svg`

  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <span className="landing-nav__brand">Paradise Nursery</span>
        <div className="landing-nav__links">
          <a href="#why">Why Us</a>
          <a href="#collections">Collections</a>
          <a href="#care">Care Tips</a>
          <Link to="/products" className="landing-nav__cta">
            Shop Plants
          </Link>
        </div>
      </nav>

      <section
        className="landing-hero"
        style={{ backgroundImage: `linear-gradient(120deg, rgba(8, 43, 26, 0.85), rgba(8, 43, 26, 0.4)), url(${heroBackground})` }}
      >
        <div className="landing-hero__content">
          <span className="landing-pill">Indoor Jungles Made Simple</span>
          <h1>Find plants that thrive in your light, schedule, and style.</h1>
          <p>
            Personal curation, doorstep delivery, and friendly care support. We pair resilient greenery with
            thoughtful design so your space feels alive in every season.
          </p>
          <div className="landing-hero__actions">
            <Link to="/products" className="landing-button landing-button--primary">
              Browse Plants
            </Link>
            <a href="#collections" className="landing-button landing-button--ghost">
              Explore Collections
            </a>
          </div>
          <ul className="landing-hero__highlights">
            <li>✔ Hand-selected by horticulture experts</li>
            <li>✔ Care reminders tailored to your plants</li>
            <li>✔ Sustainable packaging and soil blends</li>
          </ul>
        </div>
        <aside className="landing-hero__card">
          <img src={heroFeature} alt="Monstera plant" />
          <div className="landing-hero__card-body">
            <h3>Monstera Deliciosa</h3>
            <p>
              A statement centerpiece with iconic fenestrated leaves. Loves bright, indirect light and weekly watering.
            </p>
            <dl>
              <div>
                <dt>Light</dt>
                <dd>Bright Indirect</dd>
              </div>
              <div>
                <dt>Water</dt>
                <dd>Every 7 days</dd>
              </div>
              <div>
                <dt>Pet Safe</dt>
                <dd>Not recommended</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="landing-stats" aria-label="Paradise Nursery benefits" id="why">
        <article>
          <strong>150+</strong>
          <span>Curated indoor plants ready to ship</span>
        </article>
        <article>
          <strong>48 hrs</strong>
          <span>From greenhouse to your doorstep</span>
        </article>
        <article>
          <strong>4.9 ★</strong>
          <span>Average rating from happy plant parents</span>
        </article>
        <article>
          <strong>365</strong>
          <span>Days of care support with every order</span>
        </article>
      </section>

      <section className="landing-section" id="collections">
        <header className="landing-section__header">
          <h2>Collections for every corner</h2>
          <p>
            Choose from curated bundles built for low-light apartments, sun-soaked studios, pet-friendly homes, and more.
            Each set includes matched pots and a quick-start guide.
          </p>
        </header>
        <div className="landing-feature-grid">
          <article className="landing-feature-card">
            <span className="landing-feature-card__icon">🌤️</span>
            <h3>Bright & Airy</h3>
            <p>
              Sun-loving botanicals that fill your windows with texture. Includes aloe, jade, and cascading pothos.
            </p>
          </article>
          <article className="landing-feature-card">
            <span className="landing-feature-card__icon">🌙</span>
            <h3>Low-Light Legends</h3>
            <p>
              Snake plants and ZZ plants that thrive where natural light is scarce, perfect for bedrooms and offices.
            </p>
          </article>
          <article className="landing-feature-card">
            <span className="landing-feature-card__icon">🐾</span>
            <h3>Pet-Friendly Pals</h3>
            <p>
              Non-toxic beauties like calatheas and peperomias so your furry roommates can roam worry-free.
            </p>
          </article>
        </div>
      </section>

      <section className="landing-section landing-section--split" id="care">
        <div className="landing-section__media">
          <div className="landing-tip-card">
            <h3>Monthly care membership</h3>
            <p>
              Subscribe for reminders, seasonal workshops, and one-on-one advice from our plant specialists.
            </p>
            <ul>
              <li>📅 Tailored watering reminders</li>
              <li>🧪 Access to soil refresh kits</li>
              <li>🎓 Live Q&A with horticulturists</li>
            </ul>
          </div>
        </div>
        <div className="landing-section__body">
          <h2>Care knowledge delivered with your plants</h2>
          <p>
            Every order includes detailed care cards, light-matching tips, and messaging access to our support team. We help
            you troubleshoot brown tips, repot with confidence, and celebrate every new leaf.
          </p>
          <Link to="/products" className="landing-button landing-button--primary">
            Start building your bundle
          </Link>
        </div>
      </section>

      <section className="landing-testimonials" aria-label="Customer testimonials">
        <header>
          <h2>Plant parents love Paradise</h2>
          <p>
            "The curated bundles took all the guesswork out of plant shopping. Delivery was immaculate and the care
            reminders keep my jungle thriving." – Mia L.
          </p>
        </header>
        <div className="landing-testimonials__grid">
          <article>
            <p>
              “I never imagined my apartment could look this vibrant. The care support team walked me through repotting and
              now I’m on my fifth leaf unfurl.”
            </p>
            <span>— Jordan P.</span>
          </article>
          <article>
            <p>
              “Fast shipping, sustainable packaging, and healthy plants. My cat-safe bundle arrived with everything I needed
              to set up a cozy green nook.”
            </p>
            <span>— Priya S.</span>
          </article>
          <article>
            <p>
              “Weekly reminders keep me on track, and the soils they send out are top-tier. Love the attention to detail and
              community workshops.”
            </p>
            <span>— Alex R.</span>
          </article>
        </div>
      </section>

      <footer className="landing-footer">
        <div>
          <strong>Paradise Nursery</strong>
          <p>Curating resilient greenery for mindful homes since 2012.</p>
        </div>
        <div className="landing-footer__links">
          <a href="#why">Benefits</a>
          <a href="#collections">Collections</a>
          <a href="#care">Care</a>
          <Link to="/products">Shop</Link>
        </div>
        <span className="landing-footer__note">© {new Date().getFullYear()} Paradise Nursery. All rights reserved.</span>
      </footer>
    </div>
  )
}

export default LandingPage
