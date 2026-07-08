import { services } from '../data'
import { serviceIcons } from '../icons'

export default function Services() {
  return (
    <section id="services">
      <div className="section-inner">
        <div className="section-label">What I Do</div>
        <h2 className="section-title reveal">Services</h2>
        <p className="section-sub reveal">
          From back-end logic to polished front-ends, I offer end-to-end web
          development services to bring your ideas online.
        </p>
        <div className="services-grid">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon]
            return (
              <div className="service-card reveal" key={s.title}>
                <div className="service-icon">{Icon && <Icon />}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
