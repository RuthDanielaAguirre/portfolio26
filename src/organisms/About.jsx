import SplitTitle from '../atoms/SplitTitle'
import RevealBlock from '../atoms/RevealBlock'
import { useI18n } from '../i18n'

export default function About() {
  const { content } = useI18n()

  return (
    <section className="section" id="about">
      <div className="section-top">
        <div className="section-big-num">01</div>
        <div className="section-title-block">
          <SplitTitle className="title" tag="h2" delay={0.1}>
            {[content.about.title]}
          </SplitTitle>
          <div className="subtitle">{content.about.subtitle}</div>
        </div>
      </div>

      <div className="about-grid">
        <RevealBlock delay={0.1}>
          <p className="about-text">
            {content.about.paragraphs[0]}{' '}
            <strong>{content.about.emphasis[0]}</strong>{' '}
            {content.about.paragraphs[1].replace(content.about.emphasis[0], '')}
            <br /><br />
            {content.about.paragraphs[2].split(content.about.emphasis[1])[0]}
            <strong>{content.about.emphasis[1]}</strong>
            {content.about.paragraphs[2].split(content.about.emphasis[1])[1]}
            <br /><br />
            {content.about.paragraphs[3]}
          </p>
        </RevealBlock>

        <RevealBlock delay={0.25}>
          <div className="skills-list">
            {content.about.skills.map((s) => (
              <div key={s.cat} className="skill-row">
                <span className="skill-cat">{s.cat}</span>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  )
}
