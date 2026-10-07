import AnalyticalCard from "../Components/AnalyticalCard";
import LinearClassChart from "../Components/LinearClassChart";
import {
  GraduationCap,
  UserGroup,
  UserRoundCheck,
  UserRoundX,
  Plus,
} from "lucide-react";
import GenderOverview from "../Components/GenderOverview";
import StudentList from "../Components/StudentList";
import { useSideBarContext } from "../sidebarContext";
import { useDashboardContext } from "../DashboardProvider";
import { Link } from "react-router-dom";

export interface totalStudents {
  id: number;
  username: string;
  name: string;
  class: string;
  gender: string;
  status: boolean;
}

function Dashboard() {
  const { totalStudents, setTotalStudents } = useDashboardContext();
  /*Post and Get From Mock API Server*/

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
  console.log(addStudent);

  /*
    function activeStudents() {
      totalStudents.filter((std) => (std.status === true)).length
    }
      */

  const { setSideBar, sidebar } = useSideBarContext();
  console.log(`sidebar: ${sidebar}`);

  return (
    /*
    <div
      className="flex-col min-w-10/12 justify-center justify-self-center align-center my-30 space-y-5 select-none"
      onClick={() => setSideBar(false)}
    >
      {/* STATUS CARD SECTION */
    /*
      <section className="flex mb-10 justify-between">
        <div className="flex-col space-y-4">
          <h1 className="text-3xl font-bold text-black">
            Good Day, Overviewer
          </h1>
          <p>Here's the stats of students today.</p>
        </div>

        <Link to="/addstudent">
          <div className="flex text-xl font-bold text-primary-bg gap-2 p-4 items-center border-2 rounded-2xl hover:scale-105 transition duration-200 ease-in group">
            <div className="text transition duration-200 group-hover:scale-105">
              Add Student
            </div>
            <div className=" transition duration-200 group-hover:scale-120">
              <Plus className="text-primary-bg" />
            </div>
          </div>
        </Link>
      </section>

      <section className="flex min-w-full justify-between ">
        <div className="flex bg-slate-100 rounded-2xl shadow-2xl p-4 gap-2 border border-slate-200">
          <div className="flex-col content-center">
            <span className="flex  rounded-full bg-primary-highlight p-2">
              <UserGroup className="text-primary-bg" />
            </span>
          </div>
          <AnalyticalCard
            title={"Total Students"}
            figure={totalStudents.length}
            info="Increment..."
          />
        </div>
        <div className="flex bg-green-100 rounded-2xl shadow-2xl p-4 gap-2 border border-green-200">
          <div className="flex-col content-center">
            <span className="flex  rounded-full bg-bg-accent p-2">
              <UserRoundCheck className="text-secondary-bg" />
            </span>
          </div>
          <AnalyticalCard
            title={"Active Students"}
            figure={totalStudents.filter((std) => std.status === true).length}
            info="80% of total"
          />
        </div>
        <div className="flex bg-red-100 rounded-2xl shadow-2xl p-4 gap-2 border border-red-200">
          <div className="flex-col content-center">
            <span className="flex rounded-full bg-red-500 p-2">
              <UserRoundX className="text-secondary-bg" />
            </span>
          </div>
          <AnalyticalCard
            title={"Inactive Students"}
            figure={totalStudents.filter((std) => std.status === false).length}
            info="20% of total"
          />
        </div>
        <div className="flex bg-blue-100 rounded-2xl shadow-2xl p-4 gap-2 border border-blue-200">
          <div className="flex-col content-center">
            <span className="flex rounded-full bg-blue-300 p-2">
              <GraduationCap className="text-blue-600" />
            </span>
          </div>
          <AnalyticalCard
            title={"Total Classes"}
            figure={new Set(totalStudents.map((std) => std.class)).size}
            info="_All classes"
          />
        </div>
      </section>
      {/* CHART SECTION */
    /*  <section className="Chart-section flex min-w-full gap-6 justify-between">
        <LinearClassChart />
        <GenderOverview />
      </section>
      <section className="Student-List flex min-w-full my-20">
        <StudentList />
      </section>
    </div>
    */

    <div
      className="flex-col min-w-11/12 sm:min-w-10/12 justify-center justify-self-center align-center my-30 space-y-5 select-none px-4 sm:px-6"
      onClick={() => setSideBar(false)}
    >
      {/* STATUS CARD SECTION */}

      <section className="flex mb-15 justify-between flex-col gap-5 sm:flex-col md:flex-row md:gap-2">
        <div className="flex-col space-y-4">
          <h1 className="text-3xl font-bold text-black">
            Good Day, Overviewer
          </h1>
          <p>Here's the stats of students today.</p>
        </div>

        <Link to="/addstudent">
          <div className="flex text-xl font-bold text-primary-bg gap-2 p-4 items-center border-2 rounded-2xl hover:scale-105 transition duration-200 ease-in group w-fit">
            <div className="text transition duration-200 group-hover:scale-105">
              Add Student
            </div>
            <div className=" transition duration-200 group-hover:scale-120">
              <Plus className="text-primary-bg" />
            </div>
          </div>
        </Link>
      </section>

      <section className="flex min-w-full justify-between flex-col gap-4 sm:grid sm:grid-cols-2 md:flex md:flex-row md:gap-0">
        <div className="flex bg-slate-100 rounded-2xl shadow-2xl p-4 gap-2 border border-slate-200">
          <div className="flex-col content-center">
            <span className="flex rounded-full bg-primary-highlight p-2">
              <UserGroup className="text-primary-bg" />
            </span>
          </div>
          <AnalyticalCard
            title={"Total Students"}
            figure={totalStudents.length}
            info="Increment..."
          />
        </div>

        <div className="flex bg-green-100 rounded-2xl shadow-2xl p-4 gap-2 border border-green-200">
          <div className="flex-col content-center">
            <span className="flex rounded-full bg-bg-accent p-2">
              <UserRoundCheck className="text-secondary-bg" />
            </span>
          </div>
          <AnalyticalCard
            title={"Active Students"}
            figure={totalStudents.filter((std) => std.status === true).length}
            info="80% of total"
          />
        </div>

        <div className="flex bg-red-100 rounded-2xl shadow-2xl p-4 gap-2 border border-red-200">
          <div className="flex-col content-center">
            <span className="flex rounded-full bg-red-500 p-2">
              <UserRoundX className="text-secondary-bg" />
            </span>
          </div>
          <AnalyticalCard
            title={"Inactive Students"}
            figure={totalStudents.filter((std) => std.status === false).length}
            info="20% of total"
          />
        </div>

        <div className="flex bg-blue-100 rounded-2xl shadow-2xl p-4 gap-2 border border-blue-200">
          <div className="flex-col content-center">
            <span className="flex rounded-full bg-blue-300 p-2">
              <GraduationCap className="text-blue-600" />
            </span>
          </div>
          <AnalyticalCard
            title={"Total Classes"}
            figure={new Set(totalStudents.map((std) => std.class)).size}
            info="_All classes"
          />
        </div>
      </section>

      {/* CHART SECTION */}

      <section className="Chart-section flex flex-col space-x-4 min-w-full justify-between md:flex-row">
        <LinearClassChart />
        <GenderOverview />
      </section>

      <section className="Student-List flex min-w-full my-20 overflow-x-auto shadow-2xl">
        <StudentList />
      </section>
    </div>
  );
}

export default Dashboard;
