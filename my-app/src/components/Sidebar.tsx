import React from 'react';
import {
  Home,
  Package,
  Users,
  MessageSquare,
  BarChart2,
  Settings,
  Globe,
  ShoppingCart,
  Heart,
  Clock,
  HelpCircle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  role: 'farmer' | 'buyer';
}

export const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const location = useLocation();

  const menuItems = role === 'farmer'
    ? [
        { icon: Home, label: 'Dashboard', path: '/dashboard' },
        { icon: Package, label: 'My Products', path: '/products' },
        { icon: Users, label: 'Requests', path: '/requests' },
        { icon: BarChart2, label: 'Analytics', path: '/analytics' },
        { icon: Clock, label: 'Order History', path: '/history' },
        { icon: Heart, label: 'Saved Items', path: '/saved' },
        { icon: MessageSquare, label: 'Support', path: '/support' },
        { icon: Globe, label: 'Language', path: '/language' },
        { icon: Settings, label: 'Settings', path: '/settings' },
      ]
    : [
        { icon: Home, label: 'Dashboard', path: '/dashboard' },
        { icon: ShoppingCart, label: 'Browse Products', path: '/browse' },
        { icon: Package, label: 'My Orders', path: '/orders' },
        { icon: Heart, label: 'Saved Items', path: '/saved' },
        { icon: BarChart2, label: 'Analytics', path: '/analytics' },
        { icon: Clock, label: 'Order History', path: '/history' },
        { icon: MessageSquare, label: 'Support', path: '/support' },
        { icon: Globe, label: 'Language', path: '/language' },
        { icon: Settings, label: 'Settings', path: '/settings' },
      ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0 flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          AgroConnect
        </h1>
      </div>

      <nav className="flex-1 overflow-y-auto py-6">
        <div className="px-4 mb-6">
          <span className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main Menu
          </span>
        </div>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors relative group ${
              location.pathname === item.path
                ? 'bg-green-50 text-green-600 border-r-4 border-green-600'
                : ''
            }`}
          >
            <item.icon className={`h-5 w-5 mr-3 transition-colors ${
              location.pathname === item.path ? 'text-green-600' : 'text-gray-400 group-hover:text-green-600'
            }`} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <HelpCircle className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-600">Need Help?</span>
          </div>
          <p className="text-xs text-gray-600 mb-3">
            Contact our support team for assistance
          </p>
          <button className="w-full px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};