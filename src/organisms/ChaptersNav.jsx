import { useI18n } from '../i18n'

const hrefs = ['#about', '#projects', '#experience', '#contact']

export default function ChaptersNav() {
  const { content } = useI18n()

  return (
    <div className="chapters-nav">
      {content.chapters.map((ch, i) => (
        <a
          key={ch.num}
          href={hrefs[i]}
          className="chapter-item"
          data-cursor
        >
          <div className="ch-num">{ch.num}</div>
          <div className="ch-title">{ch.title}</div>
          <div className="ch-hint">{ch.hint}</div>
        </a>
      ))}
    </div>
  )
}
