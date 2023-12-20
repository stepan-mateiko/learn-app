export const trainingsHeadings: string[] = [
  "Date",
  "Name",
  "Type",
  "Trainer",
  "Students",
  "Duration",
];

interface Training {
  id: string;
  name: string;
  duration: number;
  trainer: string;
  type: string;
  date: string;
  description?: string;
  students: string[];
}

export const trainingsData: Training[] = [
  {
    id: "001",
    duration: 60,
    trainer: "004",
    type: "Full course",
    date: "2023-01-10",
    name: "JavaScript",
    description: "JavaScript training for beginners",
    students: ["005"],
  },
  {
    id: "002",
    duration: 45,
    trainer: "007",
    type: "Webinar",
    date: "2023-02-15",
    name: "GraphQL",
    description: "GraphQL for developers",
    students: ["007", "002"],
  },
  {
    id: "003",
    duration: 90,
    trainer: "002",
    type: "Workshop",
    date: "2023-03-20",
    name: "React Hooks",
    description: "Mastering React Hooks",
    students: ["004", "008"],
  },
  {
    id: "004",
    duration: 75,
    trainer: "009",
    type: "Full course",
    date: "2023-04-25",
    name: "Python Fundamentals",
    description: "Python fundamentals for beginners",
    students: ["001", "003", "009"],
  },
  {
    id: "005",
    duration: 120,
    trainer: "005",
    type: "Bootcamp",
    date: "2023-05-30",
    name: "Java Programming",
    description: "Intensive Java programming bootcamp",
    students: ["006", "010"],
  },
  {
    id: "006",
    duration: 60,
    trainer: "003",
    type: "Webinar",
    date: "2023-06-15",
    name: "C# Basics",
    description: "Understanding the basics of C#",
    students: ["007", "001"],
  },
  {
    id: "007",
    duration: 90,
    trainer: "006",
    type: "Workshop",
    date: "2023-07-20",
    name: "Ruby on Rails",
    description: "Building web applications with Ruby on Rails",
    students: ["002", "005", "008"],
  },
  {
    id: "008",
    duration: 45,
    trainer: "010",
    type: "Webinar",
    date: "2023-08-25",
    name: "Swift for iOS",
    description: "Introduction to Swift for iOS development",
    students: ["004", "006"],
  },
  {
    id: "009",
    duration: 75,
    trainer: "008",
    type: "Full course",
    date: "2023-09-30",
    name: "Vue.js Essentials",
    description: "Essential concepts of Vue.js framework",
    students: ["007", "001"],
  },
  {
    id: "010",
    duration: 120,
    trainer: "004",
    type: "Bootcamp",
    date: "2023-10-15",
    name: "Angular Advanced",
    description: "Advanced topics in Angular development",
    students: ["005", "009"],
  },
];
