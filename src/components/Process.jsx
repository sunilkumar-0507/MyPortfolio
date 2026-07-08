import { process } from '../data'

export default function Process() {
  return (
    <section id="process">
      <div className="section-inner">
        <div className="section-label">How I Work</div>
        <h2 className="section-title reveal">Development Process</h2>
        <p className="section-sub reveal">
          A clear, proven workflow that takes your idea from concept to a
          reliable, maintained product.
        </p>
        <div className="process-grid">
          {process.map((step) => (
            <div className="process-card reveal" key={step.n}>
              <div className="process-num">{step.n}</div>
              <div className="process-title">{step.title}</div>
              <div className="process-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
