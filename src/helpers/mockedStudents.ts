export interface Student {
  id: string;
  userName: string;
  lastName: string;
  firstName: string;
  dob: string;
  address: string;
  photo: string;
  isActive: boolean;
  trainers: string[];
  trainings: string[];
}

export const studentsData: Student[] = [
  {
    id: "2f1763a3-bbe8-4573-af65-bc88d9871911",
    userName: "stepan-mateiko",
    firstName: "Stepan",
    lastName: "Mateiko",
    dob: "2023-12-12",
    address: "Lviv, Muzyky 34",
    photo: "photo1.jpg",
    isActive: true,
    trainers: ["003", "007", "004"],
    trainings: ["002", "005", "010"],
  },
  {
    id: "001",
    userName: "student1",
    lastName: "Doe",
    firstName: "John",
    dob: "1990-01-01",
    address: "123 Main St",
    photo: "photo1.jpg",
    isActive: true,
    trainers: ["003", "005"],
    trainings: ["001", "002"],
  },
  {
    id: "002",
    userName: "student2",
    lastName: "Smith",
    firstName: "Jane",
    dob: "1992-03-15",
    address: "456 Oak St",
    photo: "photo2.jpg",
    isActive: false,
    trainers: ["002", "001", "003"],
    trainings: ["002", "003"],
  },
  {
    id: "003",
    userName: "student3",
    lastName: "Johnson",
    firstName: "Robert",
    dob: "1988-05-20",
    address: "789 Elm St",
    photo: "photo3.jpg",
    isActive: true,
    trainers: ["001", "004", "002"],
    trainings: ["003", "004"],
  },
  {
    id: "004",
    userName: "student4",
    lastName: "Williams",
    firstName: "Emily",
    dob: "1991-07-10",
    address: "101 Pine St",
    photo: "photo4.jpg",
    isActive: false,
    trainers: ["002", "003"],
    trainings: ["001"],
  },
  {
    id: "005",
    userName: "student5",
    lastName: "Brown",
    firstName: "Daniel",
    dob: "1987-09-25",
    address: "222 Maple St",
    photo: "photo5.jpg",
    isActive: true,
    trainers: ["004", "001"],
    trainings: ["002", "005"],
  },
  {
    id: "006",
    userName: "student6",
    lastName: "Davis",
    firstName: "Olivia",
    dob: "1993-12-03",
    address: "333 Oak St",
    photo: "photo6.jpg",
    isActive: false,
    trainers: ["005", "002"],
    trainings: ["003"],
  },
  {
    id: "007",
    userName: "student7",
    lastName: "Miller",
    firstName: "Michael",
    dob: "1985-04-18",
    address: "444 Birch St",
    photo: "photo7.jpg",
    isActive: true,
    trainers: ["003", "001"],
    trainings: ["001", "004"],
  },
  {
    id: "008",
    userName: "student8",
    lastName: "Garcia",
    firstName: "Sophia",
    dob: "1990-08-11",
    address: "555 Pine St",
    photo: "photo8.jpg",
    isActive: false,
    trainers: ["004", "005", "002"],
    trainings: ["005"],
  },
  {
    id: "009",
    userName: "student9",
    lastName: "Martinez",
    firstName: "David",
    dob: "1989-06-28",
    address: "666 Elm St",
    photo: "photo9.jpg",
    isActive: true,
    trainers: ["001", "003"],
    trainings: ["002"],
  },
  {
    id: "010",
    userName: "student10",
    lastName: "Clark",
    firstName: "Emma",
    dob: "1994-02-14",
    address: "777 Birch St",
    photo: "photo10.jpg",
    isActive: false,
    trainers: ["005", "002", "004"],
    trainings: ["003", "004"],
  },
];
