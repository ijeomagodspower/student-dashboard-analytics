import { createContext, useContext } from "react";
import type { totalStudents } from "./Pages/Dashboard";

interface StudentsContextType {
  totalStudents: totalStudents[];
  addStudent: () => void;
  setTotalStudents: React.Dispatch<React.SetStateAction<totalStudents[]>>;
}

export const studentsContext = createContext<StudentsContextType | undefined>(
  undefined,
);

export function useStudentContext() {
  const context = useContext(studentsContext);

  if (context === undefined) {
    throw new Error("studentsContext must be in useStudentContext");
  }

  return context;
}

/*export function addStudent() {
    setTotalStudents((prevStudents) => [
      ...prevStudents,
      {
        id: prevStudents.length + 1,
        username: "student",
        name: "New Student",
        class: "JSS 1",
        gender: "Male",
        status: true,
      },
    ]);
  }
*/
