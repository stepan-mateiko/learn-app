export interface User {
  id: string;
  userName: string;
  lastName: string;
  firstName: string;
  isActive: boolean;
  email: string;
  role: string;
  specialization: string;
  dob?: string;
  address?: string;
  trainers?: string[];
  trainings?: string[];
  students?: string[];
}

export const usersData: User[] = [];
