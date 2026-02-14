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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

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
