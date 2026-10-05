import { useState, useEffect } from "react";
import { studentsContext } from "./assets/Context";
import App from "./App";

export interface totalStudents {
  id: number;
  username: string;
  name: string;
  class: string;
  gender: string;
  status: boolean;
}

export interface setTotalStudents {
  (students: totalStudents[]): void;
}

const API = () => {
  /* Post and Get From Mock API Server */
  const [totalStudents, setTotalStudents] = useState<totalStudents[]>([]);

  async function getStudents() {
    const url = "https://6aa8679e9b08676cd32c04af.mockapi.io/students/students";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `HTTP error! post not successful, status: ${response.status}`,
        );
      }

      const data = await response.json();
      console.log(`Success : ${response}`);
      setTotalStudents(data);
      return data;
    } catch (error) {
      console.error(`Post request Error : ${error}`);
    }
  }

  useEffect(() => {
    getStudents();
  }, []);

  console.log(totalStudents);

  function addStudent() {
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

  return (
    <studentsContext.Provider
      value={{ totalStudents, addStudent, setTotalStudents }}
    >
      <App />
    </studentsContext.Provider>
  );
};

export default API;
