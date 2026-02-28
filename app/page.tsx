'use client';

import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import Pagination from './components/Pagination';
import { jobsData } from './data/jobs';
import { Job, JobFilter } from './types';

const JOBS_PER_PAGE = 10;

export default function Home() {
  const [jobs] = useState<Job[]>(jobsData);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredJobs]);

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

  // Pagination calculations
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't render on server to prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Find Your Dream Job
        </h1>
        
        <SearchBar onSearch={handleSearch} />
        
        {/* Results count */}
        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredJobs.length)} of {filteredJobs.length} jobs
        </div>
        
        <div className="space-y-4">
          {currentJobs.length > 0 ? (
            currentJobs.map(job => (
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

        {/* Pagination */}
        {filteredJobs.length > JOBS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>
    </div>
  );
}