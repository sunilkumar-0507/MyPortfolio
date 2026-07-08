import { lazy, Suspense } from 'react'
import CountUp from './CountUp'

const Hero3D = lazy(() => import('./Hero3D'))

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <Suspense fallback={null}>
        <Hero3D />
      </Suspense>
      <div className="hero-content">
        <div>
          <div className="hero-tag">Available for Work · Freelance & Full-Time</div>
          <h1 className="hero-name">
            Hi, I'm Sunil <span>Kumar</span>
          </h1>
          <p className="hero-title">
            Full Stack .NET Developer · React &amp; React Native Developer
          </p>
          <p className="hero-desc">
            I build modern, scalable, and high-performance web and mobile
            applications using ASP.NET Core, C#, React, React Native, SQL, and
            cloud technologies — secure back-end systems and intuitive
            interfaces that solve real-world problems.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Connect</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="avatar-ring">
              <span className="avatar-fallback">SK</span>
              <img
                src="/profile.jpg"
                alt="S. Sunilkumar"
                className="avatar-img"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem' }}>
              Sunil Kumar
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: 4 }}>
              Full Stack .NET Developer
            </div>
            <div className="available-badge">
              <span className="status-dot"></span>Available for new projects
            </div>
            <div className="stat-grid">
              <div className="stat"><div className="stat-num"><CountUp end={1} suffix="+" /></div><div className="stat-label">Yrs Experience</div></div>
              <div className="stat"><div className="stat-num"><CountUp end={7} suffix="+" /></div><div className="stat-label">Projects Done</div></div>
              <div className="stat"><div className="stat-num"><CountUp end={15} suffix="+" /></div><div className="stat-label">Technologies</div></div>
              <div className="stat"><div className="stat-num"><CountUp end={8.01} decimals={2} /></div><div className="stat-label">CGPA</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
