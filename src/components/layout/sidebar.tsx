import { Link, useLocation } from 'react-router-dom';
import {
  Users,
  Wallet,
  History,
  GamepadIcon,
  Bell,
  BanknoteIcon,
  LayoutDashboard,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Wallets', href: '/wallets', icon: Wallet },
  { name: 'Transactions', href: '/transactions', icon: History },
  { name: 'Games', href: '/games', icon: GamepadIcon },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Loans', href: '/loans', icon: BanknoteIcon },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col gap-y-5 bg-white dark:bg-gray-900 border-r px-6 py-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="/logo.svg"
          alt="Panyero"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6',
                        isActive
                          ? 'bg-gray-50 dark:bg-gray-800 text-primary'
                          : 'text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}