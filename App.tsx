
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const GalleryView = lazy(() => import('./pages/GalleryView'));

const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white">
    <div className="text-[10px] uppercase kerning-wide animate-pulse">
      Fuzzy Visuals
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen selection:bg-black selection:text-white">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery/:categoryId" element={<GalleryView />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
