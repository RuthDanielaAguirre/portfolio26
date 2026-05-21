import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SplitTitle({ children, className = '', delay = 0, tag = 'h1' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  const lines = Array.isArray(children) ? children : [children]

  const Tag = tag

  return (
    <Tag className={className} ref={ref}>
      {lines.map((line, i) => (
        <span key={i} className="hero-title-line">
          <motion.span
            className="hero-title-inner"
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : { y: '110%' }}
            transition={{
              duration: 1.1,
              delay: delay + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
