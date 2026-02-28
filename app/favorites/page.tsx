'use client';

import { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import { jobsData } from '../data/jobs';
import { Job } from '../types';

export default function Favorites() {
  const [favoriteJobs, setFavoriteJobs] = useState<Job[]>([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    const favorites = jobsData.filter(job => savedIds.includes(job.id));
    setFavoriteJobs(favorites);

    // Listen for changes in localStorage
    const handleStorageChange = () => {
      const updatedSavedIds = JSON.parse(localStorage.getItem('savedJobs') || '[]');
      const updatedFavorites = jobsData.filter(job => updatedSavedIds.includes(job.id));
      setFavoriteJobs(updatedFavorites);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Saved Jobs
        </h1>
        
        {favoriteJobs.length > 0 ? (
          <div className="space-y-4">
            {favoriteJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
            <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              No saved jobs yet.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Jobs
            </a>
          </div>
        )}
      </main>
    </div>
  );
}