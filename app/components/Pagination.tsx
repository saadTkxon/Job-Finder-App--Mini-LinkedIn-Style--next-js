// components/Pagination.tsx
'use client';

import { useState, useEffect } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push(-1); // ellipsis
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push(-1); // ellipsis
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push(-1); // ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push(-1); // ellipsis
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  // Don't render on server
  if (!isClient) {
    return null;
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        Previous
      </button>
      
      <div className="flex space-x-1">
        {getPageNumbers().map((page, index) => (
          page === -1 ? (
            <span
              key={`ellipsis-${index}`}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700'
              }`}
            >
              {page}
            </button>
          )
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        Next
      </button>
    </div>
  );
}