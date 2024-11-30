import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import Dashboard from '@/pages/dashboard';
import Users from '@/pages/users';
import Wallets from '@/pages/wallets';
import Transactions from '@/pages/transactions';
import Games from '@/pages/games';
import Notifications from '@/pages/notifications';
import Loans from '@/pages/loans';

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-0">
            <Header />
            <main className="flex-1 overflow-y-auto p-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/wallets" element={<Wallets />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/games" element={<Games />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/loans" element={<Loans />} />
              </Routes>
            </main>
          </div>
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}