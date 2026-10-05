import { useState, useEffect, useContext } from "react";
import { dashboardContext } from "./DashboardContext";
import type { TotalStudents } from "./DashboardContext";

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [totalStudents, setTotalStudents] = useState<TotalStudents[]>([]);

  const getStudents = async () => {
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
  };

  useEffect(() => {
    getStudents();
  }, []);

  console.log(totalStudents);

  return (
    <dashboardContext.Provider
      value={{ totalStudents, getStudents, setTotalStudents }}
    >
      {children}
    </dashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(dashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider",
    );
  }
  return context;
};

export default DashboardProvider;
