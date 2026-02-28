'use client';

import { Job } from '../types';
import { useState, useEffect } from 'react';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    setIsSaved(savedJobs.includes(job.id));
  }, [job.id]);

  const toggleSave = () => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    
    if (isSaved) {
      const newSaved = savedJobs.filter((id: string) => id !== job.id);
      localStorage.setItem('savedJobs', JSON.stringify(newSaved));
    } else {
      savedJobs.push(job.id);
      localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    }
    
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          {job.logo && (
            <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-full" />
          )}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
          </div>
        </div>
        
        <button
          onClick={toggleSave}
          className={`p-2 rounded-full transition-colors ${
            isSaved 
              ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
          aria-label={isSaved ? 'Remove from saved' : 'Save job'}
        >
          <svg className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {job.location}
          </span>
          
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {job.type}
          </span>
          
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {job.salary}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">{job.description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500 dark:text-gray-500">
            Posted: {new Date(job.postedDate).toLocaleDateString()}
          </span>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}