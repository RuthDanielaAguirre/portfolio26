import { motion } from 'framer-motion'
import SplitTitle from '../atoms/SplitTitle'
import { useI18n } from '../i18n'

export default function Hero() {
  const { content } = useI18n()

  return (
    <section className="hero" id="home">
      <div className="hero-noise" />

      <motion.div
        className="hero-chapter-label"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        — {content.hero.chapter}
      </motion.div>

      <SplitTitle className="hero-title" delay={0.7}>
        {[
          content.hero.title[0],
          <>{content.hero.title[1].before}<em>{content.hero.title[1].emphasis}</em></>,
          content.hero.title[2],
        ]}
      </SplitTitle>

      <motion.p
        className="hero-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        {content.hero.subtitle[0]}<br />
        {content.hero.subtitle[1]}
      </motion.p>

      <motion.div
        className="hero-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {content.hero.meta.map((item) => (
          <p key={item.label}>{item.label} <span>{item.value}</span></p>
        ))}
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="scroll-line" />
        {content.hero.scroll}
      </motion.div>
    </section>
  )
}
