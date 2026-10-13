import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MainLayout } from './components/layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  // Determine active nav item
  let activePath = 'home';
  if (path.startsWith('/service')) {
    activePath = 'services';
  } else if (path.startsWith('/resource')) {
    activePath = 'resources';
  } else if (path.startsWith('/testimonial')) {
    activePath = 'testimonials';
  } else if (path.startsWith('/about')) {
    activePath = 'about';
  } else if (path.startsWith('/contact')) {
    activePath = 'contact';
  }

  const scrollToAssessmentCard = () => {
    const el = document.getElementById('assessment-card');
    if (el) {
      // 140px header offset accounts for the fixed header (Utility bar 40px + Main nav 80px + 20px breathing room)
      const headerOffset = 140;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Highlight the card briefly so the user sees the complete form clearly
      el.classList.add('ring-4', 'ring-secondary', 'ring-offset-2');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-secondary', 'ring-offset-2');
      }, 2000);
    }
  };

  return (
    <MainLayout activePath={activePath}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onRequestInspection={scrollToAssessmentCard}
              onCalculateQuote={scrollToAssessmentCard}
            />
          }
        />
        <Route
          path="/service"
          element={
            <ServicesPage
              onRequestInspection={(serviceId) => {
                navigate(serviceId ? `/contact?service=${serviceId}#dept-${serviceId}` : '/contact#direct-directory');
              }}
              onGetQuote={(serviceId) => {
                navigate(serviceId ? `/contact?service=${serviceId}#dept-${serviceId}` : '/contact#direct-directory');
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
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/testimonial" element={<Navigate to="/testimonials" replace />} />
        <Route path="/reviews" element={<Navigate to="/testimonials" replace />} />
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
