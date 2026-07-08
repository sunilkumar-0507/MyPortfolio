import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-label">My Work</div>
        <h2 className="section-title reveal">Featured Projects</h2>
        <p className="section-sub reveal">
          Real-world projects showcasing my skills in front-end development,
          WordPress, and full-stack development.
        </p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="proj-card reveal" key={p.title}>
              <div className="proj-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="proj-title">{p.title}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-tech">
                {p.tech.map((t) => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link"
                  style={{ marginTop: 'auto' }}
                >
                  Visit Live Site →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
