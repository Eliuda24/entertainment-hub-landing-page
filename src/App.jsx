const shows = [
  { title: 'Neon Divide', category: 'Series', rating: '9.2', year: '2026', accent: '#b69cff', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85' },
  { title: 'Last Signal', category: 'Film', rating: '8.8', year: '2025', accent: '#ff6e9d', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85' },
  { title: 'Beyond Orbit', category: 'Documentary', rating: '9.0', year: '2026', accent: '#7dd3fc', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85' },
]

const releases = [
  { title: 'Afterglow', meta: 'Luna Vale · Album', type: 'Music', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=85' },
  { title: 'Starfall IX', meta: 'Nova Forge · Game', type: 'Gaming', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=85' },
  { title: 'Chrome Hearts', meta: 'Maya Reyes · Live', type: 'Live', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=85' },
  { title: 'The Last Room', meta: 'Ari Knox · Film', type: 'Film', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85' },
]

function Icon({ name }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></>,
    play: <path d="m9 7 8 5-8 5Z" fill="currentColor" stroke="none"/>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

export default function App() {
  return (
    <div className="app">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Pulse home">
          <span className="brand-mark"><span /></span>
          <span>PULSE</span>
        </a>
        <div className="nav-links">
          <a className="active" href="#discover">Discover</a>
          <a href="#trending">Movies</a>
          <a href="#trending">Music</a>
          <a href="#trending">Gaming</a>
          <a href="#live">Live</a>
        </div>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Search"><Icon name="search" /></button>
          <button className="avatar" aria-label="Open profile">E</button>
        </div>
      </nav>

      <main id="top">
        <section className="hero" id="discover">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="eyebrow"><span /> PULSE ORIGINAL</span>
            <h1>THE<br/><em>QUIET</em><br/>AFTER</h1>
            <p>When the world goes silent, the signal finds a way through.</p>
            <div className="hero-actions">
              <button className="primary-button"><Icon name="play" /> Watch now</button>
              <button className="secondary-button">+ My list</button>
            </div>
          </div>
          <div className="hero-meta">
            <span>2026</span><span>16+</span><span>1h 48m</span><span>Sci-fi Drama</span>
          </div>
        </section>

        <section className="content-section" id="trending">
          <div className="section-heading">
            <div>
              <span className="section-kicker">NOW PLAYING</span>
              <h2>Trending this week</h2>
            </div>
            <a href="#live">View all <Icon name="arrow" /></a>
          </div>

          <div className="trend-grid">
            {shows.map((show, index) => (
              <article className="trend-card" key={show.title}>
                <img src={show.image} alt="" />
                <div className="card-shade" />
                <span className="rank">0{index + 1}</span>
                <div className="trend-info">
                  <span className="category">{show.category}</span>
                  <h3>{show.title}</h3>
                  <div className="card-meta"><span>★ {show.rating}</span><span>{show.year}</span></div>
                </div>
                <button className="card-play" aria-label={`Play ${show.title}`}><Icon name="play" /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section latest" id="live">
          <div className="section-heading">
            <div>
              <span className="section-kicker">FRESH PICKS</span>
              <h2>Made for you</h2>
            </div>
            <a href="#discover">Explore <Icon name="arrow" /></a>
          </div>
          <div className="release-grid">
            {releases.map((item) => (
              <article className="release-card" key={item.title}>
                <div className="release-image">
                  <img src={item.image} alt="" />
                  <span>{item.type}</span>
                  <button aria-label={`Play ${item.title}`}><Icon name="play" /></button>
                </div>
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark"><span /></span><span>PULSE</span></a>
        <p>Entertainment moves with you.</p>
        <span>© 2026 PULSE</span>
      </footer>
    </div>
  )
}
