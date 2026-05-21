import SplitTitle from '../atoms/SplitTitle'
import RevealBlock from '../atoms/RevealBlock'
import { useI18n } from '../i18n'

export default function Experience() {
  const { content } = useI18n()

  return (
    <section className="section" id="experience">
      <div className="section-top">
        <div className="section-big-num">03</div>
        <div className="section-title-block">
          <SplitTitle className="title" tag="h2" delay={0.1}>
            {[content.experience.title]}
          </SplitTitle>
          <div className="subtitle">{content.experience.subtitle}</div>
        </div>
      </div>

      <div className="exp-list">
        {content.experience.items.map((e, i) => (
          <RevealBlock key={i} delay={i * 0.1}>
            <div className="exp-item">
              <div className="exp-date">{e.date}</div>
              <div className="exp-body">
                <h3>{e.role}</h3>
                <p>{e.desc}</p>
              </div>
            </div>
          </RevealBlock>
        ))}
      </div>
    </section>
  )
}
