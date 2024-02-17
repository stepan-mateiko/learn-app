import { StudentsType } from "../store/students/types";
import { TrainersType } from "../store/trainers/types";
import { TrainingsType } from "../store/trainings/types";

export const generatePassword = (length: number) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length },
    () => charset[Math.floor(Math.random() * charset.length)]
  ).join("");
};

export const handleInputChange =
  (setter: React.Dispatch<React.SetStateAction<string>>) =>
  (newValue: string | number | boolean) => {
    if (typeof newValue === "string") {
      setter(newValue);
    }
  };

export const formatTrainingData = (
  role: string,
  array: TrainingsType[],
  trainers: TrainersType[],
  students: StudentsType[]
): string[][] => {
  return array.map((training: TrainingsType) => [
    training.date,
    training.name,
    training.type,
    role === "student"
      ? `${
          trainers.find((item: TrainersType) => item.id === training.trainer)
            ?.firstName
        } ${
          trainers.find((item: TrainersType) => item.id === training.trainer)
            ?.lastName
        }`
      : `${
          students.find((item: StudentsType) => item.id === training.student)
            ?.firstName
        } ${
          students.find((item: StudentsType) => item.id === training.student)
            ?.lastName
        }`,

    training.duration,
  ]);
};

export const formatDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
