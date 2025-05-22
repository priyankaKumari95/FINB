import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../types';

interface SavingsGoal {
  current: number;
  target: number;
}

const UserGreeting: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  
  // This would typically come from your Redux store
  const savingsGoal: SavingsGoal = {
    current: 2500,
    target: 5000
  };

  const progressPercentage = (savingsGoal.current / savingsGoal.target) * 100;

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          {/* <img
            src={user?.avatar || "./PriyankaPicture.jpg"}
            alt="Profile"
            className="h-16 w-16 rounded-full"
          /> */}
          <div>
            <h1 className="text-2xl font-semibold">
              Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'},
              {' '}{user?.name || 'Guest'}
            </h1>
            <p className="text-gray-600">Welcome back to your financial dashboard</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Monthly Savings Goal</span>
          <span className="font-medium">${savingsGoal.current} / ${savingsGoal.target}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-500">
          You're {progressPercentage.toFixed(0)}% of the way to your monthly savings goal
        </p>
      </div>
    </div>
  );
};

export default UserGreeting;