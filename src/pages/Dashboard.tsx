import React, { useState } from 'react';
import UserGreeting from '../components/dashboard/UserGreeting';
import BalanceCard from '../components/dashboard/BalanceCard';
import Charts from '../components/dashboard/Charts';
import RecentActivity from '../components/dashboard/RecentActivity';
import CalendarTracker from '../components/dashboard/CalendarTracker';
import NotificationPanel from '../components/dashboard/NotificationPanel';

type TimeRange = 'Monthly' | 'Quarterly' | 'Year';

const Dashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('Monthly');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <UserGreeting />
      
      <div className="flex justify-end items-center">
        
        <div className="flex space-x-2">
          {['Monthly', 'Quarterly', 'Year'].map((range) => (
            <button
              key={range}
              className={`px-4 py-2 rounded-lg ${timeRange === range ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setTimeRange(range as TimeRange)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BalanceCard title="Total Balance" amount={25000} percentage={12} />
        <BalanceCard title="Monthly Income" amount={8500} percentage={5} />
        <BalanceCard title="Monthly Expenses" amount={3500} percentage={-2} />
        <BalanceCard title="Savings Ratio" amount={5000} percentage={15} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Charts />
        <RecentActivity />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CalendarTracker />
        <NotificationPanel />
      </div>
    </div>
  );
};

export default Dashboard;