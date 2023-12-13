interface Training {
  id: number;
  duration: string;
  trainer: string;
  type: string;
  date: string;
  name: string;
  description: string;
  students: string[];
}

export const trainingsHeadings: string[] = [
  "ID",
  "Duration",
  "Trainer",
  "Type",
  "Date",
  "Name",
  "Description",
  "Students",
];

export const trainingsData: Training[] = [
  {
    id: 1,
    duration: "1 hour",
    trainer: "trainer1",
    type: "Fitness",
    date: "2023-01-10",
    name: "Training 1",
    description: "Fitness training for beginners",
    students: ["student1"],
  },
  {
    id: 2,
    duration: "45 minutes",
    trainer: "trainer2",
    type: "Yoga",
    date: "2023-02-15",
    name: "Training 2",
    description: "Yoga for flexibility",
    students: ["student1", "student2"],
  },
  // Add more training data
];
