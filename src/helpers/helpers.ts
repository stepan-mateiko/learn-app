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
