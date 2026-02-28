'use client';

import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import { jobsData } from './data/jobs';
import { Job, JobFilter } from './types';

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>(jobsData);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobsData);

  const handleSearch = (filters: JobFilter) => {
    const filtered = jobs.filter(job => {
      const matchesRole = !filters.role || 
        job.title.toLowerCase().includes(filters.role.toLowerCase());
      const matchesLocation = !filters.location || 
        job.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesType = !filters.type || 
        job.type === filters.type;
      
      return matchesRole && matchesLocation && matchesType;
    });
    
    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Find Your Dream Job
        </h1>
        
        <SearchBar onSearch={handleSearch} />
        
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No jobs found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}