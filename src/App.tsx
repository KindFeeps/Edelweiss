import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import PortfolioPage from './pages/PortfolioPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/leadership-team" element={<TeamPage initialTab="leadership" />} />
        <Route path="/mergers-acquisitions-team" element={<TeamPage initialTab="ma" />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}