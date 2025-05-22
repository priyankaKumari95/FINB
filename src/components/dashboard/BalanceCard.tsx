import React from 'react';

interface BalanceCardProps {
  title: string;
  amount: number;
  percentage: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, amount, percentage }) => {
  const isNegative = percentage < 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-gray-600 mb-2">{title}</h3>
      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-semibold">${amount.toLocaleString()}</span>
        <span className={`text-sm ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
          {isNegative ? '' : '+'}
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default BalanceCard;