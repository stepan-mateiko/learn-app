export interface BoxProps {
  imgSrc: string;
  tag: string;
  title: string;
  date: string;
  time: number;
}

export interface BreadcrumbProps {
  links: string[];
  labels: string[];
}

export interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  isLink?: boolean;
  path?: string;
  isSubmit?: boolean;
  classOfBtn?: string;
}

export interface DatePickerProps {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  onDateChange: (startDate: Date | null, endDate: Date | null) => void;
}

export interface InputProps {
  type:
    | "text"
    | "textarea"
    | "select"
    | "date"
    | "checkbox"
    | "email"
    | "password"
    | "number";
  label: string;
  value?: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
  placeholder?: string;
  pattern?: string;
  title?: string;
  options?: string[] | number[];
  checked?: boolean;
  isRequired?: boolean;
  name?: string;
}

export interface JoinUsBoxProps {
  role: string;
}

export interface MiniProfileProps {
  name: string;
  email: string | undefined;
  photo: string;
  isMiniProfile: boolean;
  hideMiniProfile: () => void;
}

export interface ModalBoxProps {
  ID: string;
  token: string;
  isModalOpen: boolean;
  handleModalClose: () => void;
}

export interface MyAccountListProps {
  ID: string;
  userName: string;
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  email: string;
  specialization: string;
  isActive: boolean;
  role: string;
  photo: string;
}

export interface NavigationProps {
  links: { to: string; label: string }[];
}

export interface PasswordFormProps {
  setIsSuccess: (isSuccess: boolean) => void;
}

export interface RegistrationFormProps {
  role: string;
}

export interface SearchProps {
  role: string;
  data: string[][];
  update: (data: string[][]) => void;
}

export interface TableProps {
  title: string;
  headings: string[];
  data: string[][];
}
