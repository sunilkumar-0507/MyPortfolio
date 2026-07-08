import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-label">Career Path</div>
        <h2 className="section-title reveal">Experience</h2>
        <p className="section-sub reveal">
          Professional journey in web and software development.
        </p>

        {experience.map((e) => (
          <div className="exp-card reveal" key={e.role}>
            <div className="exp-head">
              <div className="exp-role">{e.role}</div>
              <div className="exp-badge">{e.badge}</div>
            </div>
            <div className="exp-company">{e.company}</div>
            <div className="exp-desc">{e.desc}</div>
            <div className="exp-tags">
              {e.tags.map((t) => (
                <span className="exp-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
