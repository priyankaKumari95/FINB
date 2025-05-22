import React from 'react';

interface Day {
  date: number;
  expenses: number;
  hasTransactions: boolean;
}

const CalendarTracker: React.FC = () => {
  const generateDays = (): Day[] => {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => ({
      date: i + 1,
      expenses: Math.random() * 1000, // Mock data
      hasTransactions: Math.random() > 0.5,
    }));
  };

  const days = generateDays();

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Monthly Expense Tracker</h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day.date}
            className={`p-2 text-center rounded-lg ${day.hasTransactions ? 'bg-blue-50' : ''}`}
          >
            <div className="text-sm">{day.date}</div>
            {day.hasTransactions && (
              <div className="text-xs text-blue-600">${day.expenses.toFixed(2)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarTracker;