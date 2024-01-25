export interface Trainer {
  id: string;
  email: string;
  userName: string;
  lastName: string;
  firstName: string;
  isActive: boolean;
  specialization: string;
  dob: string;
  address: string;
  students: string[];
  trainings: string[];
}

export const trainersData: Trainer[] = [
  {
    firstName: "Olenna",
    lastName: "Tyrell",
    email: "iwasgood@gmail.com",
    dob: "",
    address: "",
    specialization: "Angular",
    students: [],
    trainings: [],
    id: "1e3176b7-39b9-421e-8c71-1c583ad33bb7",
    userName: "olenna-tyrell",
    isActive: true,
  },
  {
    firstName: "Eddard",
    lastName: "Stark",
    email: "winteriscomin@gmail.com",
    dob: "",
    address: "",
    specialization: "UI/UX Design",
    students: [
      "29833a19-e909-4e5c-97ff-2ceee8bd476e",
      "84d2f293-4862-4bab-a875-31745007a743",
    ],
    trainings: [
      "edfd67f1-e5b8-418c-aa63-eacf32b4f00d",
      "888c9745-5238-4f45-8f39-4f99ec5390a3",
    ],
    id: "3c372c23-3c3b-4bcd-9320-9b03f63ab3e3",
    userName: "eddard-stark",
    isActive: true,
  },
  {
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "serceisucks@gmail.com",
    dob: "",
    address: "",
    specialization: "Angular",
    students: [
      "3713468a-4655-457d-a3d4-b17702695fbc",
      "29833a19-e909-4e5c-97ff-2ceee8bd476e",
      "84d2f293-4862-4bab-a875-31745007a743",
    ],
    trainings: [
      "4dfd47f1-e5b8-418c-aa63-eacf32b4f00d",
      "f4c781d0-c84d-4e50-9aaa-aeb9d8d78fbb",
      "9037ce96-246a-4f7f-90ed-4684803acfea",
      "f067cae2-855b-4ec0-b046-6f2cf8e46b56",
    ],
    id: "5d5630a6-d50a-4747-8ca6-74c57d581939",
    userName: "tyrion-lannister",
    isActive: true,
  },
  {
    firstName: "Rhaeghar",
    lastName: "Targaryen",
    email: "threeheads@gmail.com",
    dob: "",
    address: "",
    specialization: "Vue",
    students: [],
    trainings: [],
    id: "e0d90296-d56a-49f1-8913-6cfb4354575e",
    userName: "rhaeghar-targaryen",
    isActive: true,
  },
  {
    firstName: "Iryna",
    lastName: "Mateiko",
    email: "ira@gmail.com",
    dob: "",
    address: "",
    specialization: "QA",
    students: [],
    trainings: [],
    id: "e2db5979-4a52-4bb3-9bc7-ad13cbb1d956",
    userName: "iryna-mateiko",
    isActive: true,
  },
];
