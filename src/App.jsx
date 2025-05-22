import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
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

const router = createBrowserRouter([
  { path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dimotiko', element: <Dimotiko /> },
      { path: 'nipiagogio', element: <Nipiagogio /> },
      { path: 'gymnasio-imerisio', element: <GymnasioImerirsio /> },
      { path: 'gymnasio-esperino', element: <GymnasioEsperino /> },
      { path: 'lykeio-imerisio', element: <LykeioImerisio /> },
      { path: 'lykeio-esperino', element: <LykeioEsperino /> },
      { path: 'epal-imerisio', element: <EpalImerisio /> },
      { path: 'epal-esperino', element: <EpalEsperino /> },
      { path: 'epal-protypo', element: <EpalProtypo /> },
      { path: 'gymnasio-eneegyl', element: <GymnasioEneegyl /> },
      { path: 'lykeio-eneegyl', element: <LykeioEneegyl /> },
      { path: 'gymnasio-eae', element: <GymnasioEae /> },
      { path: 'lykeio-eae', element: <LykeioEae /> },
      { path: 'gymnasio-mousiko', element: <GymnasioMousiko /> },
      { path: 'lykeio-mousiko', element: <LykeioMousiko /> },
      { path: 'gymnasio-kallitexniko', element: <GymnasioKallitexniko /> },
      { path: 'lykeio-kallitexniko', element: <LykeioKallitexniko /> },
    ]
  }
]);

export default function App() {
  
  return <RouterProvider router={router} />;

}