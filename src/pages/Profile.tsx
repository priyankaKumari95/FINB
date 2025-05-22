import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../types';
import {
  UserCircleIcon,
  ShieldCheckIcon,
  BellIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
  ChevronRightIcon,
  CogIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header with background */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 relative"></div>
        
        {/* Profile info */}
        <div className="px-6 pb-6 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center -mt-16 mb-6">
            <div className="relative">
              <img
                src={user?.avatar || "./PriyankaPicture.jpg"}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-blue-500 text-white p-1.5 rounded-full hover:bg-blue-600 transition-colors">
                <CogIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h2 className="text-2xl font-bold">{user?.name || 'Priyanka'}</h2>
              <p className="text-gray-600">{user?.email || 'priyanka@example.com'}</p>
              <p className="text-sm text-blue-500 mt-1">Premium Member</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 mt-6 border-t border-b py-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">$12,580</p>
              <p className="text-sm text-gray-600">Total Balance</p>
            </div>
            <div className="text-center border-x">
              <p className="text-2xl font-bold text-green-500">$4,250</p>
              <p className="text-sm text-gray-600">Monthly Income</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-500">$2,180</p>
              <p className="text-sm text-gray-600">Monthly Expense</p>
            </div>
          </div>
          
          {/* Settings sections */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-blue-100 p-1.5 rounded-lg mr-2">
                  <UserCircleIcon className="h-5 w-5 text-blue-600" />
                </span>
                Account Settings
              </h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <button className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center justify-between border-b border-gray-100">
                  <span className="flex items-center">
                    <UserCircleIcon className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Edit Profile</span>
                  </span>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center justify-between border-b border-gray-100">
                  <span className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Security Settings</span>
                  </span>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center justify-between">
                  <span className="flex items-center">
                    <BellIcon className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Notification Preferences</span>
                  </span>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-green-100 p-1.5 rounded-lg mr-2">
                  <BuildingLibraryIcon className="h-5 w-5 text-green-600" />
                </span>
                Connected Accounts
              </h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <button className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center justify-between border-b border-gray-100">
                  <span className="flex items-center">
                    <BuildingLibraryIcon className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Bank Accounts</span>
                  </span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">3 Connected</span>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center justify-between">
                  <span className="flex items-center">
                    <CreditCardIcon className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Credit Cards</span>
                  </span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">2 Connected</span>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </button>
              </div>
            </div>
            
            <button className="w-full mt-8 py-3 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;