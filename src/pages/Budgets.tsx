import React from 'react';

const budgetData = [
  { category: 'Home', spent: 400, budget: 1000 },
  { category: 'Food & Dining', spent: 250, budget: 600 },
  { category: 'Auto & Transport', spent: 900, budget: 900 },
  { category: 'Health & Fitness', spent: 120, budget: 300 },
  { category: 'Shopping', spent: 500, budget: 700 },
  { category: 'Travel', spent: 350, budget: 500 },
  { category: 'Entertainment', spent: 100, budget: 300 },
];

const Budgets: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Budgets</h1>
      <div className="mb-6 flex gap-3">
        <button className="px-4 py-1.5 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">Last month</button>
        <button className="px-4 py-1.5 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">This month</button>
        <button className="px-4 py-1.5 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">Last 3 months</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-5xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Spending Categories</h2>
        <div className="space-y-5">
          {budgetData.map(({ category, spent, budget }) => {
            const percent = Math.min(100, Math.round((spent / budget) * 100));
            return (
              <div key={category} className="flex items-center gap-4">
                <div className="w-40 text-blue-800 font-medium text-base">{category}</div>
                <div className="flex-1">
                  <div className="relative h-3 bg-gray-100 ">
                    <div
                      className="absolute left-0 top-0 h-3 bg-gray-300 border-r border-gray-500"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-24 text-right text-gray-500 text-sm">
                  ${spent} / ${budget}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Budgets;