export interface Student {
  id: string;
  userName: string;
  lastName: string;
  firstName: string;
  email: string;
  isActive: boolean;
  specialization: string;
  dob: string;
  address: string;
  trainers: string[];
  trainings: string[];
}

export const studentsData: Student[] = [
  {
    firstName: "Jon",
    lastName: "Snow",
    email: "mywatchbegins@gmail.com",
    dob: "",
    address: "",
    specialization: "student",
    trainings: [
      "edfd67f1-e5b8-418c-aa63-eacf32b4f00d",
      "f4c781d0-c84d-4e50-9aaa-aeb9d8d78fbb",
      "9037ce96-246a-4f7f-90ed-4684803acfea",
    ],
    trainers: [
      "3c372c23-3c3b-4bcd-9320-9b03f63ab3e3",
      "5d5630a6-d50a-4747-8ca6-74c57d581939",
    ],
    id: "29833a19-e909-4e5c-97ff-2ceee8bd476e",
    userName: "jon-snow",
    isActive: true,
  },
  {
    firstName: "Joffrey",
    lastName: "Baratheon",
    email: "stupidimp@gmail.com",
    dob: "",
    address: "",
    specialization: "student",
    trainers: ["5d5630a6-d50a-4747-8ca6-74c57d581939"],
    trainings: ["4dfd47f1-e5b8-418c-aa63-eacf32b4f00d"],
    id: "3713468a-4655-457d-a3d4-b17702695fbc",
    userName: "joffrey-baratheon",
    isActive: true,
  },
  {
    firstName: "Stepan",
    lastName: "Mateiko",
    email: "stepan.mateiko@gmail.com",
    dob: "1994-10-19",
    address: "Lviv, Muzyky 34",
    specialization: "student",
    trainers: [
      "3c372c23-3c3b-4bcd-9320-9b03f63ab3e3",
      "5d5630a6-d50a-4747-8ca6-74c57d581939",
    ],
    trainings: [
      "f067cae2-855b-4ec0-b046-6f2cf8e46b56",
      "888c9745-5238-4f45-8f39-4f99ec5390a3",
    ],
    id: "84d2f293-4862-4bab-a875-31745007a743",
    userName: "stepan-mateiko",
    isActive: true,
  },
  {
    firstName: "Daenerys",
    lastName: "Targaryen",
    email: "draccarys@gmail.com",
    dob: "",
    address: "",
    specialization: "student",
    trainers: [],
    trainings: [],
    id: "2ec0c77b-ecba-46e7-aa11-c99a23cef0a3",
    isActive: true,
    userName: "daynerys-targaryen",
  },
  {
    firstName: "Loras",
    lastName: "Tyrell",
    email: "riprenlyvd@gmail.com",
    dob: "",
    address: "",
    specialization: "student",
    trainers: [],
    trainings: [],
    id: "e0cb4c3e-03e7-40a2-abc1-206e5c220295",
    userName: "loras-tyrell",
    isActive: true,
  },
  {
    firstName: "Robert",
    lastName: "Arryn",
    email: "lethimfly@gmail.com",
    dob: "",
    address: "",
    specialization: "student",
    trainers: [],
    trainings: [],
    id: "adc9cf66-e158-4e69-95d7-33b208672d05",
    userName: "robert-arryn",
    isActive: true,
  },
];
