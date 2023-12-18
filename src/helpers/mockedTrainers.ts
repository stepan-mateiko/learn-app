export interface Trainer {
  id: string;
  userName: string;
  lastName: string;
  firstName: string;
  dob: string;
  address: string;
  specialization: string;
  photo: string;
  students: string[];
  trainings: string[];
}

export const trainersData: Trainer[] = [
  {
    id: "6cbff08f-9875-4a60-bb0a-b2ee26081ca9",
    userName: "stepan-mateiko",
    firstName: "Stepan",
    lastName: "Mateiko",
    dob: "2023-12-12",
    address: "Lviv, Muzyky 34",
    photo: "photo1.jpg",
    students: ["003", "007", "004"],
    trainings: ["002", "005", "010"],
    specialization: "JavaScript",
  },
  {
    id: "001",
    userName: "trainer1",
    lastName: "Johnson",
    firstName: "Michael",
    dob: "1985-05-20",
    address: "789 Elm St",
    specialization: "JavaScript",
    photo: "photo3.jpg",
    students: ["003", "005", "002"],
    trainings: ["003", "004"],
  },
  {
    id: "002",
    userName: "trainer2",
    lastName: "Anderson",
    firstName: "Laura",
    dob: "1988-07-10",
    address: "101 Pine St",
    specialization: "PHP",
    photo: "photo4.jpg",
    students: ["002"],
    trainings: ["002"],
  },
  {
    id: "003",
    userName: "trainer3",
    lastName: "Williams",
    firstName: "Jessica",
    dob: "1991-09-15",
    address: "222 Maple St",
    specialization: "React",
    photo: "photo5.jpg",
    students: ["003", "004"],
    trainings: ["001", "005"],
  },
  {
    id: "004",
    userName: "trainer4",
    lastName: "Davis",
    firstName: "Ryan",
    dob: "1987-12-03",
    address: "333 Oak St",
    specialization: "Python",
    photo: "photo6.jpg",
    students: ["005", "006"],
    trainings: ["002", "004"],
  },
  {
    id: "005",
    userName: "trainer5",
    lastName: "Garcia",
    firstName: "Mia",
    dob: "1993-04-18",
    address: "444 Birch St",
    specialization: "Java",
    photo: "photo7.jpg",
    students: ["007", "008"],
    trainings: ["005"],
  },
  {
    id: "006",
    userName: "trainer6",
    lastName: "Martinez",
    firstName: "James",
    dob: "1990-08-11",
    address: "555 Pine St",
    specialization: "C#",
    photo: "photo8.jpg",
    students: ["009", "001", "004"],
    trainings: ["003"],
  },
  {
    id: "007",
    userName: "trainer7",
    lastName: "Clark",
    firstName: "Sophie",
    dob: "1989-06-28",
    address: "666 Elm St",
    specialization: "Ruby",
    photo: "photo9.jpg",
    students: ["001", "002", "007"],
    trainings: ["002"],
  },
  {
    id: "008",
    userName: "trainer8",
    lastName: "Miller",
    firstName: "David",
    dob: "1994-02-14",
    address: "777 Birch St",
    specialization: "Angular",
    photo: "photo10.jpg",
    students: ["003", "004"],
    trainings: ["004"],
  },
  {
    id: "009",
    userName: "trainer9",
    lastName: "Anderson",
    firstName: "Emma",
    dob: "1985-11-22",
    address: "888 Oak St",
    specialization: "Vue.js",
    photo: "photo11.jpg",
    students: ["006"],
    trainings: ["005"],
  },
  {
    id: "010",
    userName: "trainer10",
    lastName: "Johnson",
    firstName: "Daniel",
    dob: "1992-06-15",
    address: "999 Pine St",
    specialization: "Swift",
    photo: "photo12.jpg",
    students: ["007", "008"],
    trainings: ["001", "004"],
  },
];
