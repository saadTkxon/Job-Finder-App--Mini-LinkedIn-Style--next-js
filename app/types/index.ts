export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  postedDate: string;
  logo?: string;
}

export type JobFilter = {
  role: string;
  location: string;
  type: string;
};