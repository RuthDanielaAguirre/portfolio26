import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Nav() {
  const { language, setLanguage, content } = useI18n()

  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-name">Ruth Daniela Aguirre</div>

      <ul className="nav-links">
        {content.nav.links.map((l) => (
          <li key={l.label}>
            <a href={l.href} data-cursor>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-controls">
        <div className="lang-switch" role="group" aria-label={content.nav.languageLabel}>
          {['es', 'en'].map((option) => (
            <button
              key={option}
              type="button"
              className={`lang-button${language === option ? ' is-active' : ''}`}
              onClick={() => setLanguage(option)}
              aria-pressed={language === option}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="nav-status">
          <div className="status-dot" />
          {content.nav.status}
        </div>
      </div>

    </motion.nav>
  )
}
