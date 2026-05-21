import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let p = 0
    const id = setInterval(() => {
      p += Math.random() * 18 + 4
      if (p >= 100) {
        p = 100
        clearInterval(id)
        setTimeout(() => {
          setVisible(false)
          setTimeout(onDone, 800)
        }, 300)
      }
      setProgress(Math.min(Math.round(p), 100))
    }, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="loader-name">Daniela Aguirre</div>
          <div className="loader-bar-wrap">
            <motion.div
              className="loader-bar"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="loader-num">{progress}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
