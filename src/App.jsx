import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Dimotiko from './pages/Dimotiko'
import Nipiagogio from './pages/Nipiagogio'
import Home from './pages/Home'
import ImerisioGymnasio from './pages/ImerisioGymnasio'
import EsperinoGymnasio from './pages/EsperinoGymnasio'
import ImerisioGenikoLykeio from './pages/ImerisioGenikoLykeio'
import EsperinoGenikoLykeio from './pages/EsperinoGenikoLykeio'
import ImerisioEPAL from './pages/ImerisioEPAL'
import EneegylGymnasio from './pages/EneegylGymnasio'
import EneegylLykeio from './pages/EneegylLykeio'
import EaeGymnasio from './pages/EaeGymnasio'
import EaeLykeio from './pages/EaeLykeio'
import MousikoGymnasio from './pages/MousikoGymnasio'
import MousikoLykeio from './pages/MousikoLykeio'
import KallitexnikoGymnasio from './pages/KallitexnikoGymnasio'
import KallitexnikoLykeio from './pages/KallitexnikoLykeio'


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
            <Route path="/imerisio-gymnasio" element={<ImerisioGymnasio />} />
            <Route path="/esperino-gymnasio" element={<EsperinoGymnasio />} />
            <Route path="/imerisio-geniko-lykeio" element={<ImerisioGenikoLykeio />} />
            <Route path="/esperino-geniko-lykeio" element={<EsperinoGenikoLykeio />} />
            <Route path="/imerisio-epal" element={<ImerisioEPAL />} />
            <Route path="/eneegyl-gymnasio" element={<EneegylGymnasio />} />
            <Route path="/eneegyl-lykeio" element={<EneegylLykeio />} />
            <Route path="/eae-gymnasio" element={<EaeGymnasio />} />
            <Route path="/eae-lykeio" element={<EaeLykeio />} />
            <Route path="/mousiko-gymnasio" element={<MousikoGymnasio />} />
            <Route path="/mousiko-lykeio" element={<MousikoLykeio />} />
            <Route path="/kallitexniko-gymnasio" element={<KallitexnikoGymnasio />} />
            <Route path="/kallitexniko-lykeio" element={<KallitexnikoLykeio />} />
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