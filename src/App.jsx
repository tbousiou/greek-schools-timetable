import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'

import Dimotiko from './pages/Dimotiko'
import Nipiagogio from './pages/Nipiagogio'

import GymnasioImerirsio from './pages/GymnasioImerisio'
import GymnasioEsperino from './pages/GymnasioEsperino'

import LykeioImerisio from './pages/LykeioImerisio'
import LykeioEsperino from './pages/LykeioEsperino'

import EpalImerisio from './pages/EpalImerisio'
import EpalEsperino from './pages/EpalEsperino'
import EpalProtypo from './pages/EpalProtypo'

import GymnasioEneegyl from './pages/GymnasioEneegyl'
import LykeioEneegyl from './pages/LykeioEneegyl'

import GymnasioEae from './pages/GymnasioEae'

import LykeioEae from './pages/LykeioEae'
import GymnasioMousiko from './pages/GymnasioMousiko'
import LykeioMousiko from './pages/LykeioMousiko'
import GymnasioKallitexniko from './pages/GymnasioKallitexniko'
import LykeioKallitexniko from './pages/LykeioKallitexniko'


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

            <Route path="/gymnasio-imerisio" element={<GymnasioImerirsio />} />
            <Route path="/gymnasio-esperino" element={<GymnasioEsperino />} />

            <Route path="/geniko-lykeio-imerisio" element={<LykeioImerisio />} />
            <Route path="/geniko-lykeio-esperino" element={<LykeioEsperino />} />

            <Route path="/epal-imerisio" element={<EpalImerisio />} />
            <Route path="/epal-esperino" element={<EpalEsperino />} />
            <Route path="/epal-protypo" element={<EpalProtypo />} />

            <Route path="/gymnasio-eneegyl" element={<GymnasioEneegyl />} />
            <Route path="/lykeio-eneegyl" element={<LykeioEneegyl />} />
            <Route path="/gymnasio-eae" element={<GymnasioEae />} />
            <Route path="/lykeio-eae" element={<LykeioEae />} />

            <Route path="/gymnasio-mousiko" element={<GymnasioMousiko />} />
            <Route path="/lykeio-mousiko" element={<LykeioMousiko />} />
            <Route path="/gymnasio-kallitexniko" element={<GymnasioKallitexniko />} />
            <Route path="/lykeio-kallitexniko" element={<LykeioKallitexniko />} />
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