import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import Competitors from './pages/Competitors';
import Dashboard from './pages/Dashboard';
import GlobalExplorer from './pages/GlobalExplorer';
import History from './pages/History';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import NewAnalysis from './pages/NewAnalysis';
import NotFound from './pages/NotFound';
import ReportView from './pages/ReportView';
import Settings from './pages/Settings';
import Signup from './pages/Signup';
import Trends from './pages/Trends';

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
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Public Pages */}
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/api-docs" element={<ApiDocs />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/docs" element={<Guide />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/roi-calculator" element={<RoiCalculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookie-policy" element={<Cookies />} />
        <Route path="/refund-policy" element={<Refund />} />

        {/* Dashboard Routes (With Layout) */}
        <Route element={
          <div className="flex min-h-screen bg-zinc-950 text-zinc-200 antialiased font-sans">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col min-h-screen relative">
              <Header />
              <div className="flex-1 bg-zinc-950 relative z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/new-analysis" element={<NewAnalysis />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/report/:id" element={<ReportView />} />
                  <Route path="/competitors" element={<Competitors />} />
                  <Route path="/trends" element={<Trends />} />
                  <Route path="/global-explorer" element={<GlobalExplorer />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        } >
          {/* Sub-routes handled above */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
