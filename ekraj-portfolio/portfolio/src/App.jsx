import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, Download, ArrowUp, Menu, X, Sun, Moon, Copy, Check, ExternalLink, Plus, Minus } from 'lucide-react'
import { profile, links, allProjects, about, skills, education, publication, projects, awards } from './data/portfolio.js'

const nav = ['about', 'skills', 'education', 'projects', 'awards', 'contact']

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.12 })
    ref.current && io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`}>{children}</div>
}

function Ext({ href, children }) {
  return <a className="ext" href={href} target="_blank" rel="noreferrer">{children}<ExternalLink size={14} aria-hidden /></a>
}

function Project({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`card project ${open ? 'open' : ''}`}>
      <div className="ph" aria-hidden><span>{p.title.split(' ').map(w => w[0]).join('')}</span></div>
      <h3>{p.title}</h3>
      <p className="muted">{p.sub}</p>
      <ul className="tags">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
      {open && <ul className="points">{p.points.map(x => <li key={x}>{x}</li>)}</ul>}
      <div className="row">
        <button className="link" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? <Minus size={16} /> : <Plus size={16} />}{open ? 'Hide details' : 'Show details'}</button>
        {p.link && <Ext href={p.link}>Live</Ext>}
        {p.repo && <Ext href={p.repo}>Code</Ext>}
      </div>
    </article>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => {
    try { const s = localStorage.getItem('theme'); if (s) return s === 'dark' } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('')
  const [copied, setCopied] = useState(false)
  const [top, setTop] = useState(false)
  const hero = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(id => { const el = document.getElementById(id); el && io.observe(el) })
    const onScroll = () => setTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  const onMove = e => {
    const r = hero.current.getBoundingClientRect()
    hero.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    hero.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch {}
  }
  const send = e => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = `${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.get('name'))}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="bar">
        <a className="brand" href="#top" aria-label="Back to top"><span aria-hidden>◆</span> {profile.short}</a>
        <nav className={menu ? 'open' : ''} aria-label="Main">
          {nav.map(id => <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={() => setMenu(false)}>{id}</a>)}
        </nav>
        <div className="row">
          <button className="icon" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className="icon burger" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" ref={hero} onPointerMove={onMove}>
          <div className="lattice" aria-hidden /><div className="lattice glow" aria-hidden />
          <div className="wrap">
            <p className="muted kicker">{profile.title}</p>
            <h1>{profile.name.split(' ').map((w, i) => <span key={w} style={{ animationDelay: `${i * 110}ms` }}>{w}</span>)}</h1>
            <p className="lead">{profile.tagline}</p>
            <p className="intro">{profile.intro}</p>
            <div className="row cta">
              <a className="btn primary" href="#projects">Explore my work</a>
              <a className="btn" href="#contact">Contact me</a>
              <a className="btn" href={profile.cv} download="Ariful_Ekraj_Hridoy_CV.pdf"><Download size={16} />Download CV</a>
            </div>
          </div>
          <a className="scroll" href="#about" aria-label="Scroll to About"><span /></a>
        </section>

        <section id="about"><div className="wrap two">
          <h2>About</h2>
          <Reveal>{about.map(t => <p key={t} className="prose">{t}</p>)}</Reveal>
        </div></section>

        <section id="skills"><div className="wrap">
          <h2>Skills</h2>
          <Reveal className="grid3">{skills.map(s => (
            <div className="card" key={s.group}><h3>{s.group}</h3><ul className="tags">{s.items.map(i => <li key={i}>{i}</li>)}</ul></div>
          ))}</Reveal>
        </div></section>

        <section id="education"><div className="wrap two">
          <h2>Education</h2>
          <Reveal><ol className="timeline">{education.map(e => (
            <li key={e.years}><span className="muted">{e.years}</span><h3>{e.what}</h3><p className="muted">{[e.where, e.note].filter(Boolean).join(', ')}</p></li>
          ))}</ol></Reveal>
        </div></section>

        <section id="projects"><div className="wrap">
          <h2>Research and projects</h2>
          <Reveal><article className="card feature">
            <p className="badge">{publication.venue}</p>
            <h3>{publication.title}</h3>
            <ul className="points">{publication.points.map(x => <li key={x}>{x}</li>)}</ul>
            <div className="row">{Object.entries(publication.links).map(([k, v]) => <Ext key={k} href={v}>{k}</Ext>)}</div>
          </article></Reveal>
          <div className="grid2">{projects.map(p => <Project key={p.title} p={p} />)}</div>
          <p className="more"><Ext href={allProjects}>All repositories on GitHub</Ext></p>
        </div></section>

        <section id="awards"><div className="wrap two">
          <h2>Awards</h2>
          <Reveal><ul className="awards">{awards.map(a => (
            <li key={a.what + a.when}><h3>{a.what}</h3><p className="muted">{[a.when, a.by].filter(Boolean).join(', ')}</p></li>
          ))}</ul></Reveal>
        </div></section>

        <section id="contact"><div className="wrap two">
          <h2>Contact</h2>
          <Reveal>
            <p className="prose">Open to research collaboration and data science opportunities.</p>
            <div className="row stack">
              <button className="btn" onClick={copy}><Mail size={16} />{profile.email}{copied ? <Check size={16} /> : <Copy size={16} />}<span className="sr" aria-live="polite">{copied ? 'Email copied' : ''}</span></button>
              <a className="btn" href={`tel:${profile.phone}`}><Phone size={16} />{profile.phone}</a>
            </div>
            <div className="row socials">{Object.entries(links).map(([k, v]) => <Ext key={k} href={v}>{k}</Ext>)}</div>
            <form className="card form" onSubmit={send}>
              <label>Name<input name="name" required autoComplete="name" /></label>
              <label>Email<input name="email" type="email" required autoComplete="email" /></label>
              <label>Message<textarea name="message" rows="4" required /></label>
              <button className="btn primary" type="submit">Open in email app</button>
              <p className="muted small">This site has no server. The button opens your email app with the message filled in.</p>
            </form>
          </Reveal>
        </div></section>
      </main>

      <footer>
        <div className="wrap row between">
          <p className="muted small">© {new Date().getFullYear()} {profile.name}</p>
          <div className="row socials">{Object.entries(links).map(([k, v]) => <Ext key={k} href={v}>{k}</Ext>)}</div>
        </div>
      </footer>
      <a className={`totop ${top ? 'show' : ''}`} href="#top" aria-label="Back to top"><ArrowUp size={20} /></a>
    </>
  )
}
