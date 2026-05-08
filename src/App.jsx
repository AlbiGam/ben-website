import './App.css'
import { useEffect, useState } from 'react'

const partners = [
  {
    name: 'NOKAD',
    logo: '/NOKAD.jpeg',
    description:
      'Noel O Keeffe Auto Developments (NOKAD) was founded in 2001 by Noel O Keeffe to proudly serve automobile owners in the Waterford area. Now proudly by his side, Noel\'s son Colm has joined the family business. Together they are building the company from strength to strength, into the successful multifunctional business we see today.',
  },
  {
    name: 'Naas Road Autos',
    logo: '/naas_road_autos.jpeg',
    description:
      'As one of Dublin\'s leading independent car dealers, Naas Road Autos offers top quality cars at superb prices. They carry a wide range of vehicles including saloons, hatchbacks, estates, MPVs and SUVs to suit all budgets, with stock changing daily and every vehicle inspected in their workshop before sale.',
  },
  {
    name: 'Tom Geraghty Tyre Services',
    logo: '/tom_geraghity_tyres.jpeg',
    description:
      'Tom Geraghty Tyre Services Ltd was established in 1981 as the first independent tyre company in Waterford. Since then, it has become a major tyre business in the region for choice, service and price, offering standout value on alloy wheel and tyre packages on quality wheels.',
  },
  {
    name: 'Wyse\'s BMW Breakers',
    logo: '/wyes_bmw_breakers.jpeg',
    description:
      'Based in Clogheen, Co. Tipperary, Wyse\'s BMW Breakers is Ireland\'s leading specialist BMW vehicle dismantler and recycled parts supplier. Established in 2002, the company has built unrivalled expertise and become a first choice for quality BMW recycled parts across Ireland.',
  },
]

const calendarEvents = [
  {
    date: '22 Mar',
    event: 'KT Cup Kiltorcan',
    status: 'Completed',
    result: 'P3',
  },
  {
    date: '12 Apr',
    event: 'Round 1 Whiteriver Park',
    status: 'Canceled',
    result: 'Canceled',
  },
  {
    date: '2-3 May',
    event: 'Round 2 Watergrasshill',
    status: 'Completed',
    result: 'P7',
  },
  {
    date: '24 May',
    event: 'Round 3 Kiltorcan',
    status: 'Scheduled',
    result: '',
  },
  {
    date: '12 Jul',
    event: 'Round 4 Kiltorcan',
    status: 'Scheduled',
    result: '',
  },
  {
    date: '17-19 Jul',
    event: 'T4 Euro Cup Kiltorcan',
    status: 'Scheduled',
    result: '',
  },
  {
    date: '2 Aug',
    event: 'Round 5 Watergrasshill',
    status: 'Scheduled',
    result: '',
  },
  {
    date: '23 Aug',
    event: 'Round 6 Athboy',
    status: 'Scheduled',
    result: '',
  },
  {
    date: '5-6 Sep',
    event: 'Round 7 Kiltorcan',
    status: 'Scheduled',
    result: '',
  },
  {
    date: '30 Sep - 1 Oct',
    event: 'T4 Nations Cup Valencia, Spain',
    status: 'Scheduled',
    result: '',
  },
]

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <div className="page-shell">
      <header className="top-nav">
        <div className="brand-block">
          <img className="brand-logo" src="/logo.png" alt="Ben O Keeffe logo" />
          <div className="brand-text-wrap">
            <span className="brand-name">BEN O KEEFFE</span>
          </div>
        </div>

        <nav className="menu-items" aria-label="Main navigation">
          <a href="#about" className="menu-link active">
            About
          </a>
          <a href="#partners" className="menu-link">
            Partners
          </a>
          <a href="#calendar" className="menu-link">
            Calendar
          </a>
          <a href="#contact" className="menu-link">
            Contact
          </a>
        </nav>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-sidebar"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          Menu
        </button>
      </header>

      <div
        className={`mobile-sidebar-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden={!isMobileMenuOpen}
      />

      <aside
        id="mobile-sidebar"
        className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-sidebar-head">
          <img className="mobile-sidebar-logo" src="/logo.png" alt="Ben O Keeffe logo" />
          <button className="mobile-sidebar-close" type="button" onClick={closeMobileMenu}>
            Close
          </button>
        </div>

        <nav className="mobile-sidebar-nav" aria-label="Mobile menu options">
          <a href="#about" className="mobile-sidebar-link" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#partners" className="mobile-sidebar-link" onClick={closeMobileMenu}>
            Partners
          </a>
          <a href="#calendar" className="mobile-sidebar-link" onClick={closeMobileMenu}>
            Calendar
          </a>
          <a href="#contact" className="mobile-sidebar-link" onClick={closeMobileMenu}>
            Contact
          </a>
        </nav>
      </aside>

      <main className="hero-grid">
        <section className="hero-image" aria-label="Driver racing on track">
          <div className="image-fade" />
        </section>

        <section className="hero-content">
          <p className="kicker">Racing Driver</p>
          <h1>
            Ben O
            <span>Keeffe</span>
          </h1>
          <p className="description">Racing driver from Ireland.</p>
          <button className="cta" type="button">
            Learn More
          </button>
        </section>

        <div className="slider-dots" aria-hidden="true">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </main>

      <section className="about-section" id="about">
        <div className="about-copy">
          <p className="about-kicker">01. My Story</p>
          <h2>
            About
            <span>Me</span>
          </h2>

          <p>
            My name is Ben O&apos;Keeffe, and I first sat in a kart in February 2020, aged 8. I had
            never done it before, but the moment I got on ,track, I knew this was what I wanted
            to do with my life. I started going every week, and within months I was at the top
            split of the rental leaderboards.
          </p>

          <p>
            In the summer of 2020, I attended the Wexford youth academy which is a competitive
            learning series based around a rental kart championship with hands on learning with
            cars and karts combined. But at the time, we could not afford to race professionally.
            So I kept showing up, kept doing rentals and sprint races, kept getting faster.
          </p>
        </div>

        <aside className="about-card" aria-label="Ben O Keeffe profile highlights">
          <img src="/about_me.jpeg" alt="Ben O Keeffe racing kart" />
          <div className="about-card-body">
            <h3>
              BEN <span>O&apos;KEEFFE</span>
            </h3>
            <p className="about-meta">Ireland · Racing Driver</p>
            <div className="about-stats">
              <div>
                <strong>2020</strong>
                <span>First kart year</span>
              </div>
              <div>
                <strong>8</strong>
                <span>Age started</span>
              </div>
              <div>
                <strong>Weekly</strong>
                <span>Training rhythm</span>
              </div>
              <div>
                <strong>Top Split</strong>
                <span>Rental leaderboard</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="partners-section" id="partners">
        <div className="partners-heading">
          <p className="partners-kicker">02. Partners</p>
          <h2>
            Backing
            <span>The Journey</span>
          </h2>
          <p className="partners-intro">
            The people and businesses supporting Ben O&apos;Keeffe on and off the track.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <article className="partner-card" key={partner.name}>
              <div className="partner-logo-wrap">
                <img src={partner.logo} alt={`${partner.name} logo`} />
              </div>
              <div className="partner-card-body">
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="calendar-section" id="calendar">
        <div className="calendar-hero">
          <div className="calendar-copy">
            <p className="calendar-kicker">Calendar</p>
            <h2>
              2026 Racing
              <span>Season Calendar</span>
            </h2>
            <p className="calendar-note">Round 1 canceled, Round 2 finished P7.</p>
          </div>

          <div className="calendar-image-wrap">
            <img src="/calendar.jpeg" alt="Ben O Keeffe competing during a race weekend" />
          </div>
        </div>

        <div className="calendar-list" aria-label="2026 race calendar">
          {calendarEvents.map((event) => (
            <article className="calendar-row" key={`${event.date}-${event.event}`}>
              <p className="calendar-date">{event.date}</p>
              <p className="calendar-event">{event.event}</p>
              <div className="calendar-meta">
                <span className={`calendar-status ${event.status.toLowerCase()}`}>{event.status}</span>
                {event.result ? <span className="calendar-result">{event.result}</span> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-photo-wrap">
          <img src="/contact.jpeg" alt="Ben O Keeffe at the track" />
        </div>

        <div className="contact-content">
          <p className="contact-kicker">03. Contact</p>
          <h2>
            Let&apos;s Build
            <span>A Winning Season</span>
          </h2>
          <p>
            For sponsorship opportunities, race updates, media requests, or collaborations, reach
            out directly and we&apos;ll get back to you shortly.
          </p>

          <div className="contact-actions">
            <a className="contact-btn" href="mailto:Colmokeeffe@hotmail.com">
              Colmokeeffe@hotmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
