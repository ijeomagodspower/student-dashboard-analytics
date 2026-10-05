import { createContext } from "react";

export interface std {
  id: number;
  username: string;
  name: string;
  class: string;
  gender: string;
  status: boolean;
}

export interface estudentData {
  id: number;
  username: string;
  name: string;
  class: string;
  gender: string;
  status: boolean;
}

interface editContextType {
  ApiEdit: (std: std) => void;
  getStudentDetails: (id: number) => void;
  editStudentData: estudentData | undefined;
  setEditStudentData: React.Dispatch<
    React.SetStateAction<estudentData | undefined>
  >;
  allStudentData: estudentData[];
  setAllStudentData: React.Dispatch<
    React.SetStateAction<estudentData[] | undefined>
  >;
}

export const EditStudentContext = createContext<editContextType | undefined>(
  undefined,
);
