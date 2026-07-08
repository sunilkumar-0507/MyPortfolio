import { about, whyChooseMe } from '../data'
import { FaCheckCircle } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-label">Get To Know Me</div>
        <h2 className="section-title reveal">About Me</h2>

        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-objective">
              <span className="about-objective-label">Career Objective</span>
              <p>{about.objective}</p>
            </div>
          </div>

          <div className="about-why reveal">
            <h3 className="skill-group-title">Why Choose Me</h3>
            <ul className="why-list">
              {whyChooseMe.map((item) => (
                <li key={item}>
                  <FaCheckCircle className="why-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
