import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MainLayout } from './components/layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const location = useLocation();
  const path = location.pathname;

  // Determine active nav item
  let activePath = 'home';
  if (path.startsWith('/service')) {
    activePath = 'services';
  } else if (path.startsWith('/resource')) {
    activePath = 'resources';
  } else if (path.startsWith('/about')) {
    activePath = 'about';
  } else if (path.startsWith('/contact')) {
    activePath = 'contact';
  }

  return (
    <MainLayout activePath={activePath}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onRequestInspection={() => {
                const el = document.getElementById('assessment-card');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onCalculateQuote={() => {
                const el = document.getElementById('assessment-card');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          }
        />
        <Route
          path="/service"
          element={
            <ServicesPage
              onRequestInspection={() => {
                const el = document.getElementById('module-433a');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onGetQuote={() => {
                const el = document.getElementById('module-433a');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          }
        />
        <Route path="/services" element={<Navigate to="/service" replace />} />
        <Route
          path="/resources"
          element={
            <ResourcesPage
              onRequestConsultation={() => {
                const el = document.getElementById('condo-park-financing');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          }
        />
        <Route path="/resource" element={<Navigate to="/resources" replace />} />
        <Route
          path="/about"
          element={
            <AboutPage
              onRequestInspection={() => {
                const el = document.getElementById('heritage-story');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          }
        />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
