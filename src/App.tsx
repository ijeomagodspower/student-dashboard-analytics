import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./assets/Pages/Students";
import Nav from "./assets/Components/Nav";
import Dashboard from "./assets/Pages/Dashboard";
import { sidebarContext } from "./assets/sidebarContext";
import { newStudentContext } from "./assets/ApiContext";
import { useState } from "react";
import AddStudent from "./assets/Pages/AddStudent";
import EditForm from "./assets/Pages/EditForm";

export interface newStudent {
  id: number;
  username: string;
  name: string;
  class: string;
  gender: string;
  status: boolean;
}

function App() {
  /* Sidebar Context */
  const [sidebar, setSideBar] = useState(false);
  const url = "https://6aa8679e9b08676cd32c04af.mockapi.io/students/students";

  const [newStudent, setNewStudent] = useState<newStudent>({
    id: 0,
    username: "",
    name: "",
    class: "",
    gender: "",
    status: false,
  });

  /* Success Notice */
  function NewStudentAdded() {
    const addedTimeout = setTimeout(() => {
      return alert("New Student Added Successfully!");
    }, 500);
    return () => clearTimeout(addedTimeout);
  }

  /* API For Add Student */

  const addNewStudent = async (std: newStudent): Promise<void> => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(std),
      });

      if (!response.ok) {
        throw new Error(`response unseccessful : ${response.status}`);
      }

      const data = await response.json();
      console.log(`added student : ${data}`);
      setNewStudent(data);
      console.log(`new std ${newStudent}`);
      NewStudentAdded();
    } catch (error) {
      console.error(`Fetch unsuccessful :${error}`);
    }
  };

  return (
    <newStudentContext.Provider value={{ addNewStudent }}>
      <sidebarContext.Provider value={{ sidebar, setSideBar }}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/students/:username" element={<Students />} />
            <Route path="/students/editform/:id" element={<EditForm />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </BrowserRouter>
      </sidebarContext.Provider>
    </newStudentContext.Provider>
  );
}

export default App;
