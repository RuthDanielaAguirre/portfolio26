import SplitTitle from '../atoms/SplitTitle'
import RevealBlock from '../atoms/RevealBlock'
import { useI18n } from '../i18n'

export default function Closing() {
  const { content } = useI18n()

  return (
    <section className="closing" id="contact">
      <RevealBlock>
        <SplitTitle className="closing-title" tag="h2" delay={0.1}>
          {[
            content.closing.title[0],
            <>{content.closing.title[1].before}<em>{content.closing.title[1].emphasis}</em>?</>,
          ]}
        </SplitTitle>
      </RevealBlock>

      <RevealBlock delay={0.3}>
        <p className="closing-sub">
          {content.closing.subtitle}
        </p>
        <a
          href="mailto:hola@danielaaguirre.dev"
          className="closing-email"
          data-cursor
          aria-label={content.closing.emailAria}
        >
          hola@danielaaguirre.dev
        </a>
      </RevealBlock>
    </section>
  )
}
