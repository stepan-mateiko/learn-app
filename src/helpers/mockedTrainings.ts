export interface TrainingInterface {
  id: string;
  name: string;
  duration: string;
  trainer: string;
  type: string;
  date: string;
  description?: string;
  student: string;
}

export const trainingsData: TrainingInterface[] = [
  {
    name: "React",
    duration: "240",
    date: "12/12/2023",
    student: "29833a19-e909-4e5c-97ff-2ceee8bd476e",
    trainer: "3c372c23-3c3b-4bcd-9320-9b03f63ab3e3",
    type: "Bootcamp",
    description: " Lorem ipsum...",
    id: "edfd67f1-e5b8-418c-aa63-eacf32b4f00d",
  },
];
