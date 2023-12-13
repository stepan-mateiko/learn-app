interface Trainer {
  id: number;
  username: string;
  lastName: string;
  firstName: string;
  dob: string;
  address: string;
  specialization: string;
  photo: string;
  students: string[];
}

export const trainersHeadings: string[] = [
  "ID",
  "Username",
  "Last Name",
  "First Name",
  "DOB",
  "Address",
  "Specialization",
  "Photo",
  "Students",
];

export const trainersData: Trainer[] = [
  {
    id: 1,
    username: "trainer1",
    lastName: "Johnson",
    firstName: "Michael",
    dob: "1985-05-20",
    address: "789 Elm St",
    specialization: "Fitness",
    photo: "photo3.jpg",
    students: ["student1", "student2"],
  },
  {
    id: 2,
    username: "trainer2",
    lastName: "Anderson",
    firstName: "Laura",
    dob: "1988-07-10",
    address: "101 Pine St",
    specialization: "Yoga",
    photo: "photo4.jpg",
    students: ["student1", "student2"],
  },
  // Add more trainer data
];
