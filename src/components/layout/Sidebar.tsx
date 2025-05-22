import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserCircleIcon,
  CreditCardIcon,
  UserGroupIcon,
  BoltIcon,
  ClipboardIcon,
  BanknotesIcon,
  QuestionMarkCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuickAction {
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  path: string;
}

const quickActions: QuickAction[] = [
  {
    name: 'Accounts',
    icon: UserCircleIcon,
    description: '2 accounts',
    path: '/accounts'
  },
  {
    name: 'Debit card',
    icon: CreditCardIcon,
    description: 'Mastercard ending in 1234',
    path: '/cards'
  },
  {
    name: 'Invite friends',
    icon: UserGroupIcon,
    description: 'Get $5 when you sign up',
    path: '/invite'
  },
  {
    name: 'Boosts',
    icon: BoltIcon,
    description: 'Get early access to direct deposit',
    path: '/boosts'
  },
  {
    name: 'Activity',
    icon: ClipboardIcon,
    description: 'See your recent transactions',
    path: '/transactions'
  },
  {
    name: 'Cash',
    icon: BanknotesIcon,
    description: 'Add cash to your balance',
    path: '/cash'
  },
  {
    name: 'Help',
    icon: QuestionMarkCircleIcon,
    description: 'Support available 24/7',
    path: '/help'
  }
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden ${isOpen ? 'opacity-100 z-40' : 'opacity-0 -z-10'}`}
        onClick={onClose}
      />
      <div
        className={`fixed md:static inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out z-50 w-64 bg-white h-screen overflow-y-auto`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center md:hidden mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-2">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.path}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => {
                  if (window.innerWidth < 768) onClose();
                }}
              >
                <action.icon className="h-6 w-6 text-gray-600" />
                <div className="text-left">
                  <div className="font-medium">{action.name}</div>
                  <div className="text-sm text-gray-500">{action.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;