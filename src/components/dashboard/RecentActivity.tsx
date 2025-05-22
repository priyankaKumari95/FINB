import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

interface Transaction {
  id: string;
  type: 'transfer' | 'deposit' | 'expense';
  description: string;
  date: string;
  amount: number;
}

const RecentActivity: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'transfer',
      description: 'Transfer',
      date: 'Jan 23, 2023 • 9:41 PM',
      amount: 250
    },
    {
      id: '2',
      type: 'deposit',
      description: 'Deposit',
      date: 'Jan 21, 2023 • 11:21 AM',
      amount: 2500
    },
    {
      id: '3',
      type: 'expense',
      description: 'Groceries',
      date: 'Jan 19, 2023 • 3:16 PM',
      amount: -50
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'transfer':
        return <ArrowUpIcon className="h-5 w-5" />;
      case 'deposit':
        return <ArrowDownIcon className="h-5 w-5" />;
      default:
        return <ShoppingBagIcon className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Recent activity</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                {getIcon(transaction.type)}
              </div>
              <div>
                <div className="font-medium">{transaction.description}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
            </div>
            <span className={`font-medium ${transaction.amount >= 0 ? 'text-gray-900' : 'text-red-600'}`}>
              ${Math.abs(transaction.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;