import { useContext, useState } from "react";
import { EditStudentContext } from "../assets/EditStudentContext";
import type { std, estudentData } from "../assets/EditStudentContext";
import { useDashboardContext } from "./DashboardProvider";

export const EditProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { totalStudents, setTotalStudents } = useDashboardContext();
  const url = "https://6aa8679e9b08676cd32c04af.mockapi.io/students/students";

  const [editStudentData, setEditStudentData] = useState<
    estudentData | undefined
  >();
  const [allStudentData, setAllStudentData] = useState<estudentData[]>([]);

  const getStudentDetails = async (sId: number) => {
    // Implement the logic to upload student details here
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response Unsuccessful ${response.status}`);
      }

      const data = await response.json();
      setAllStudentData(data);
      console.log("student Data", allStudentData);
      setEditStudentData(
        data.find((student: estudentData) => student.id === sId),
      );
    } catch (error) {
      console.error(`Fetch  Unsuccesssful ${error}`);
    }
  };

  /* editsucess Alert */
  const EditSuccess = () => {
    const editTimeout = setTimeout(() => {
      return alert("Student Details Edited Successfully!");
    }, 500);
    return () => clearTimeout(editTimeout);
  };

  const ApiEdit = async (student: std) => {
    // Implement the logic to handle the edit action here

    try {
      const response = await fetch(`${url}/${student.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (!response.ok) {
        throw new Error(`Response unsuccessful : ${response.status}`);
      }

      const data = await response.text();

      setTotalStudents(
        totalStudents.map((item) => (item.id === student.id ? student : item)),
      );
      console.log("Edited student:", data);
      EditSuccess();
    } catch (error) {
      console.error(`Fetch unsuccessful: ${error}`);
    }
  };

  return (
    <EditStudentContext.Provider
      value={{
        ApiEdit,
        getStudentDetails,
        editStudentData,
        setEditStudentData,
      }}
    >
      {children}
    </EditStudentContext.Provider>
  );
};

export const useEditStudentContext = () => {
  const context = useContext(EditStudentContext);

  if (!context) {
    throw new Error(
      "useEditStudentContext must be used within an EditProvider",
    );
  }
  return context;
};

export default EditProvider;
