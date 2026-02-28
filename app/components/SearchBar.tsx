'use client';

import { useState } from 'react';
import { JobFilter } from '../types';

interface SearchBarProps {
  onSearch: (filters: JobFilter) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [filters, setFilters] = useState<JobFilter>({
    role: '',
    location: '',
    type: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={filters.role}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
        
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
        
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        >
          <option value="">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Remote">Remote</option>
        </select>
        
        <button
          onClick={() => {
            setFilters({ role: '', location: '', type: '' });
            onSearch({ role: '', location: '', type: '' });
          }}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}