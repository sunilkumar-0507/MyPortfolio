import { education, certifications } from '../data'

export default function Education() {
  return (
    <section id="education">
      <div className="section-inner">
        <div className="section-label">Academic Background</div>
        <h2 className="section-title reveal">Education</h2>
        <p className="section-sub reveal">
          A strong academic foundation in computer science engineering.
        </p>
        <div className="edu-grid">
          {education.map((e) => (
            <div className="edu-card reveal" key={e.degree}>
              <div className="edu-score">{e.score}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-meta">
                <span>{e.place}</span>
                <span>{e.years}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }} className="reveal">
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            Certifications & Achievements
          </div>
          {certifications.map((c) => (
            <div className="exp-card" key={c.role}>
              <div className="exp-role">{c.role}</div>
              <div className="exp-company" style={{ marginTop: '0.3rem' }}>{c.company}</div>
              <div className="exp-desc" style={{ marginTop: '0.5rem' }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
