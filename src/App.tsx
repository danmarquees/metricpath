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
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import { ToastProvider } from './context/ToastContext';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            {/* ... routes ... */}
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  )
}

export default App

