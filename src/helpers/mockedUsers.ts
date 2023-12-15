interface User {
  id: string;
  userName: string;
  lastName: string;
  firstName: string;
  dob?: string;
  address?: string;
  photo?: string;
  isActive: boolean;
  trainers?: string[];
  trainings?: string[];
  role: string | undefined;
  specialization: string;
}

export const usersData: User[] = [];
