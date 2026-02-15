import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { PublicLayout } from './components/layout/PublicLayout';
import { AuthLayout } from './components/layout/AuthLayout';
import PrivateRoute from './components/PrivateRoute';

// Pages
import Dashboard from './pages/Dashboard';
import NewAnalysis from './pages/NewAnalysis';
import ReportView from './pages/ReportView';
import History from './pages/History';
import Competitors from './pages/Competitors';
import Trends from './pages/Trends';
import GlobalExplorer from './pages/GlobalExplorer';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';

import Features from './pages/public/Features';
import PricingPage from './pages/public/PricingPage';
import ApiDocs from './pages/public/ApiDocs';
import Changelog from './pages/public/Changelog';
import Blog from './pages/public/Blog';
import Guide from './pages/public/Guide';
import Glossary from './pages/public/Glossary';
import RoiCalculator from './pages/public/RoiCalculator';
import About from './pages/public/About';
import Roadmap from './pages/public/Roadmap';
import Contact from './pages/public/Contact';
import Privacy from './pages/public/Privacy';
import Terms from './pages/public/Terms';
import Cookies from './pages/public/Cookies';
import Refund from './pages/public/Refund';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/api" element={<ApiDocs />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/roi-calculator" element={<RoiCalculator />} />
              <Route path="/about" element={<About />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/refund" element={<Refund />} />
            </Route>

            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            {/* Private App Routes */}
            <Route element={<PrivateRoute />}>
              <Route element={
                <div className="flex bg-zinc-950 min-h-screen font-sans antialiased text-zinc-100">
                  <Sidebar />
                  <div className="flex-1 ml-64 flex flex-col">
                    <Header />
                    <main className="flex-1 overflow-y-auto bg-black/50 p-8">
                      <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/new-analysis" element={<NewAnalysis />} />
                        <Route path="/report/:id" element={<ReportView />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/competitors" element={<Competitors />} />
                        <Route path="/trends" element={<Trends />} />
                        <Route path="/global-explorer" element={<GlobalExplorer />} />
                        <Route path="/settings" element={<Settings />} />
                      </Routes>
                    </main>
                  </div>
                </div>
              }>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/new-analysis" element={<NewAnalysis />} />
                <Route path="/report/:id" element={<ReportView />} />
                <Route path="/history" element={<History />} />
                <Route path="/competitors" element={<Competitors />} />
                <Route path="/trends" element={<Trends />} />
                <Route path="/global-explorer" element={<GlobalExplorer />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Route>

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  )
}

export default App
