import SplitTitle from '../atoms/SplitTitle'
import RevealBlock from '../atoms/RevealBlock'
import { useI18n } from '../i18n'

const moreWorkUrl = 'https://github.com/RuthDanielaAguirre'

export default function Projects() {
  const { content } = useI18n()

  return (
    <section className="section" id="projects">
      <div className="section-top">
        <div className="section-big-num">02</div>
        <div className="section-title-block">
          <SplitTitle className="title" tag="h2" delay={0.1}>
            {[content.projects.title]}
          </SplitTitle>
          <div className="subtitle">{content.projects.subtitle}</div>
        </div>
      </div>

      <div className="projects-list" aria-label={content.projects.listLabel}>
        {content.projects.items.map((p, i) => (
          <RevealBlock key={p.num} delay={i * 0.08}>
            <article className="project-item">
              <div className="proj-num">{p.num}</div>
              <div className="proj-info">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="proj-stack">
                  {p.stack.map((t) => (
                    <span key={t} className="proj-tech">{t}</span>
                  ))}
                </div>

                <div className="proj-actions">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    data-cursor
                    aria-label={content.projects.openProjectAria.replace('{name}', p.name)}
                  >
                    {content.projects.visitProject}
                    <span className="proj-arrow" aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={moreWorkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                    data-cursor
                    aria-label={content.projects.openMoreWorkAria}
                  >
                    {content.projects.moreWork}
                  </a>
                </div>
              </div>
            </article>
          </RevealBlock>
        ))}
      </div>
    </section>
  )
}
