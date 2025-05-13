import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Dimotiko from './pages/Dimotiko'
import Nipiagogio from './pages/Nipiagogio'
import Home from './pages/Home'
import ImerisioGimnasio from './pages/ImerisioGimnasio'
import EsperinoGimnasio from './pages/EsperinoGimnasio'
import ImerisioGenikoLikio from './pages/ImerisioGenikoLikio'
import EsperinoGenikoLikio from './pages/EsperinoGenikoLikio'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header toggleSidebar={toggleSidebar} />

          {/* Content */}
          <main className="flex-1 overflow-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dimotiko" element={<Dimotiko />} />
              <Route path="/nipiagogio" element={<Nipiagogio />} />
              <Route path="/imerisio-gymnasio" element={<ImerisioGimnasio />} />
              <Route path="/esperino-gymnasio" element={<EsperinoGimnasio />} />
              <Route path="/imerisio-geniko-lykeio" element={<ImerisioGenikoLikio />} />
              <Route path="/esperino-geniko-lykeio" element={<EsperinoGenikoLikio />} />
              {/* Add more routes here */}
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    
  )
}

export default App