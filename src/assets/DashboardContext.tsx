import { createContext } from "react";

export interface TotalStudents {
  id: number;
  username: string;
  name: string;
  class: string;
  gender: string;
  status: boolean;
}

interface StudentsContextType {
  totalStudents: TotalStudents[];
  setTotalStudents: React.Dispatch<React.SetStateAction<TotalStudents[]>>;
  getStudents: () => Promise<TotalStudents[] | undefined>;
}

export const dashboardContext = createContext<StudentsContextType | undefined>(
  undefined,
);

// 2. Create the Provider component
