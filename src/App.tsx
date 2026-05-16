import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SolutionsPage from './pages/SolutionsPage';
import WorkPage from './pages/WorkPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SaaSMVPPage from './pages/solutions/SaaSMVPPage';
import DigitalLaunchpadPage from './pages/solutions/DigitalLaunchpadPage';
import AIAutomationPage from './pages/solutions/AIAutomationPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<ProjectDetailPage />} />
        <Route path="/solutions/saas-mvp" element={<SaaSMVPPage />} />
        <Route path="/solutions/digital-launchpad" element={<DigitalLaunchpadPage />} />
        <Route path="/solutions/ai-automation" element={<AIAutomationPage />} />
      </Routes>
    </Router>
  );
}
