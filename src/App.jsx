import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Paths from './pages/Paths';
import Hikes from './pages/Hikes';
import HikePage from './pages/HikePage';
import MountainPage from './pages/MountainPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hikes" element={<Hikes />} />
        <Route path="/hikes/:slug" element={<HikePage />} />
        <Route path="/paths" element={<Paths />} />
        <Route path="/about" element={<Navigate to="/paths" replace />} />
        <Route path="/mountains/:slug" element={<MountainPage />} />
        <Route path="/places/:slug" element={<MountainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}