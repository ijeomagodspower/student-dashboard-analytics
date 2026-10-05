import { createContext, useContext } from "react";
import type { newStudent } from "../App";

/*  newStudent: newStudent;
  setNewStudent: React.Dispatch<React.SetStateAction<newStudent>>;
  */

interface newStudentType {
  addNewStudent: (std: newStudent) => Promise<void>;
}

export const newStudentContext = createContext<newStudentType | undefined>(
  undefined,
);

export function useNewStudentContext() {
  const newStdContext = useContext(newStudentContext);

  if (newStdContext === undefined) {
    throw new Error("newStudentContext must be in useNewStudentContext");
  }

  return newStdContext;
}
