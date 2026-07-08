import { skills, skillCategories } from '../data'
import { skillIcons } from '../icons'

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-label">What I Know</div>
        <h2 className="section-title reveal">Technical Skills</h2>
        <p className="section-sub reveal">
          A full-stack toolkit spanning front-end, back-end, databases, cloud,
          and developer tools to deliver complete solutions.
        </p>

        {skillCategories.map((cat) => (
          <div className="skill-group reveal" key={cat}>
            <h3 className="skill-group-title">{cat}</h3>
            <div className="skills-grid">
              {skills
                .filter((s) => s.cat === cat)
                .map((s) => {
                  const { Icon, color } = skillIcons[s.icon] || {}
                  return (
                    <div className="skill-chip" key={s.name}>
                      <div className="skill-icon">
                        {Icon && <Icon size={30} color={color} />}
                      </div>
                      <div className="skill-name">{s.name}</div>
                    </div>
                  )
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
