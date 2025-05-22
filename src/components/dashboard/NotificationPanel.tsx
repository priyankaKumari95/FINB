import React from 'react';
import { BellIcon, ExclamationCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';

interface Notification {
  id: string;
  type: 'alert' | 'tip';
  message: string;
  timestamp: string;
}

const NotificationPanel: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'alert',
      message: 'Overspending on food category this month',
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      type: 'alert',
      message: 'Salary not received yet',
      timestamp: '5 hours ago'
    },
    {
      id: '3',
      type: 'tip',
      message: 'You could save $200 by reducing entertainment expenses',
      timestamp: '1 day ago'
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Notifications & Tips</h2>
        <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
          <BellIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50"
          >
            {notification.type === 'alert' ? (
              <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
            ) : (
              <LightBulbIcon className="h-6 w-6 text-yellow-500" />
            )}
            <div>
              <p className="text-gray-800">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;