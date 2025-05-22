import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import type { RootState } from '../store';

type TransactionType = 'All' | 'Income' | 'Expense' | 'Transfer';

// Update Transaction interface
interface Transaction {
    id: string;
    date: string;
    category: string;
    description: string;
    amount: number;
    type: 'Income' | 'Expense' | 'Transfer';
    transactionType: 'Credit' | 'Debit';
}

const Transactions: React.FC = () => {
    const [activeType, setActiveType] = useState<TransactionType>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const transactions = useSelector((state: RootState) => state.transactions.transactions);

    const filteredTransactions = transactions.filter(transaction => {
        if (activeType !== 'All' && transaction.type !== activeType) return false;
        if (searchQuery && !transaction.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        return true;
    });

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    const handleTypeChange = (type: TransactionType) => {
        setActiveType(type);
        setCurrentPage(1);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Transactions</h1>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-48 px-4 py-1.5 rounded-md bg-gray-50 border border-gray-100 text-sm focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex gap-6 mb-6 border-b">
                {['All', 'Income', 'Expense', 'Transfer'].map((type) => (
                    <button
                        key={type}
                        className={`pb-2 px-1 text-sm ${activeType === type 
                            ? 'border-b-2 border-blue-500 text-blue-500 font-medium' 
                            : 'text-gray-600 hover:text-gray-800'}`}
                        onClick={() => handleTypeChange(type as TransactionType)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="text-left p-4 font-medium text-gray-600">Date</th>
                            <th className="text-left p-4 font-medium text-gray-600">Category</th>
                            <th className="text-left p-4 font-medium text-gray-600">Description</th>
                            <th className="text-right p-4 font-medium text-gray-600">Type</th>
                            <th className="text-right p-4 font-medium text-gray-600">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedTransactions?.map((transaction) => (
                            <tr key={transaction.id} className="border-b hover:bg-gray-50 transition-colors duration-150">
                                <td className="p-4 text-gray-600">{formatDate(transaction.date)}</td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-sm ${
                                        transaction.type === 'Income' 
                                            ? 'bg-green-100 text-green-800' 
                                            : transaction.type === 'Expense' 
                                                ? 'bg-red-100 text-red-800' 
                                                : 'bg-blue-100 text-blue-800'
                                    }`}>
                                        {transaction.type}
                                    </span>
                                </td>
                                <td className="p-4 text-gray-700">{transaction.description}</td>
                                <td className={`p-4 text-right font-medium text-gray-700`}>
                                    {transaction.transactionType}
                                </td>
                                <td className={`p-4 text-right font-medium ${
                                    transaction.type === 'Income' 
                                        ? 'text-green-600' 
                                        : transaction.type === 'Expense' 
                                            ? 'text-red-600' 
                                            : 'text-blue-600'
                                }`}>
                                    {transaction.type === 'Income' ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between px-4 py-3 border-t">
                    <div className="flex items-center text-sm text-gray-500">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length} entries
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`p-1 rounded ${currentPage === 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`p-1 rounded ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;