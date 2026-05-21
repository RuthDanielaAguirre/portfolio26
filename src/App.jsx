import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Cursor from './atoms/Cursor'
import Loader from './atoms/Loader'
import Home from './pages/Home'
import { I18nProvider } from './i18n'
import { useLenis } from './hooks/useLenis'
import './styles/global.css'

function AppInner() {
  useLenis()
  return (
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <I18nProvider>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      {loaded && <AppInner />}
    </I18nProvider>
  )
}
