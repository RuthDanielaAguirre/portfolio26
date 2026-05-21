import { useI18n } from '../i18n'

export default function Footer() {
  const { content } = useI18n()

  return (
    <footer className="footer">
      <div className="footer-left">{content.footer.copyright}</div>
      <div className="footer-links">
        {content.footer.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            data-cursor
            aria-label={link.aria}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
