import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Links from './pages/Links'
import TrackMyTime from './pages/apps/TrackMyTime'
import TrackMyTimePrivacy from './pages/apps/TrackMyTimePrivacy'
import LaraJones from './pages/apps/LaraJones'
import LaraJonesPrivacy from './pages/apps/LaraJonesPrivacy'
import DraftHome from './pages/draft/DraftHome'

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/applications/track-my-time" element={<TrackMyTime />} />
        <Route path="/applications/track-my-time/privacy" element={<TrackMyTimePrivacy />} />
        <Route
          path="/applications/lara-jones-and-the-caves-of-madness"
          element={<LaraJones />}
        />
        <Route
          path="/applications/lara-jones-and-the-caves-of-madness/privacy"
          element={<LaraJonesPrivacy />}
        />
        <Route path="/draft/home" element={<DraftHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
