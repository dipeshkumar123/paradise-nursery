import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <h1>Paradise Nursery Shopping App</h1>
        <p>
          Redux Toolkit is configured. Start building the landing and product
          experiences next.
        </p>
      </header>
      <main className="app-shell__main">
        <section>
          <h2>Next Steps</h2>
          <ol>
            <li>Build the landing page with hero content.</li>
            <li>Display products grouped by category.</li>
            <li>Hook up cart interactions using the Redux store.</li>
          </ol>
        </section>
      </main>
    </div>
  )
}

export default App
