import React, { useState } from 'react';
import { BellIcon, UserCircleIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold">CashFlow</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Overview</Link>
            <Link to="/transactions" className="text-gray-600 hover:text-gray-900">Transactions</Link>
            <Link to="/budgets" className="text-gray-600 hover:text-gray-900">Budgets</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute left-3 top-2.5" />
          </div>
          <button className="p-2 text-gray-600 hover:text-gray-900 relative">
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <Link to='/profile' className="flex items-center space-x-2">
            <img
              src="./PriyankaPicture.jpg"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;