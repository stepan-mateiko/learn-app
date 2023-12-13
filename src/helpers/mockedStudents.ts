// studentsData.ts

interface Student {
  id: number;
  username: string;
  lastName: string;
  firstName: string;
  dob: string;
  address: string;
  photo: string;
  isActive: boolean;
  trainers: string[];
}

export const studentsHeadings: string[] = [
  "ID",
  "Username",
  "Last Name",
  "First Name",
  "DOB",
  "Address",
  "Photo",
  "Active",
  "Trainers",
];

export const studentsData: Student[] = [
  {
    id: 1,
    username: "student1",
    lastName: "Doe",
    firstName: "John",
    dob: "1990-01-01",
    address: "123 Main St",
    photo: "photo1.jpg",
    isActive: true,
    trainers: ["trainer1", "trainer2"],
  },
  {
    id: 2,
    username: "student2",
    lastName: "Smith",
    firstName: "Jane",
    dob: "1992-03-15",
    address: "456 Oak St",
    photo: "photo2.jpg",
    isActive: false,
    trainers: ["trainer2", "trainer3"],
  },
  // Add more student data
];
