import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './components/pages/Home'
import { Land } from './components/pages/Land'
import { Infrastructure } from './components/pages/Infrastructure'
import { Industries } from './components/pages/Industries'
import { LeaseModels } from './components/pages/LeaseModels'
import { Sustainability } from './components/pages/Sustainability'
import { Location } from './components/pages/Location'
import { Gallery } from './components/pages/Gallery'
import { About } from './components/pages/About'
import { Contact } from './components/pages/Contact'
import { ScrollToTop } from './components/utils/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-[70px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/land" element={<Land />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/lease-models" element={<LeaseModels />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/location" element={<Location />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
