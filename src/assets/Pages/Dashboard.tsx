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
    <div
      className="w-full max-w-[1400px] mx-auto my-10 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8 space-y-8 select-none"
      onClick={() => setSideBar(false)}
    >
      {/* STATUS CARD SECTION */}

      <section className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">
            Good Day, Overviewer
          </h1>

          <p className="text-sm sm:text-base">
            Here's the stats of students today.
          </p>
        </div>

        <Link to="/addstudent" className="w-fit">
          <div className="flex w-fit text-base sm:text-xl font-bold text-primary-bg gap-2 p-3 sm:p-4 items-center border-2 rounded-2xl hover:scale-105 transition duration-200 ease-in group">
            <div className="transition duration-200 group-hover:scale-105">
              Add Student
            </div>

            <div className="transition duration-200 group-hover:scale-120">
              <Plus className="text-primary-bg" />
            </div>
          </div>
        </Link>
      </section>

      {/* STATUS CARDS */}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex min-w-0 bg-slate-100 rounded-2xl shadow-2xl p-4 gap-3 border border-slate-200">
          <div className="flex shrink-0 items-center">
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

        <div className="flex min-w-0 bg-green-100 rounded-2xl shadow-2xl p-4 gap-3 border border-green-200">
          <div className="flex shrink-0 items-center">
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

        <div className="flex min-w-0 bg-red-100 rounded-2xl shadow-2xl p-4 gap-3 border border-red-200">
          <div className="flex shrink-0 items-center">
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

        <div className="flex min-w-0 bg-blue-100 rounded-2xl shadow-2xl p-4 gap-3 border border-blue-200">
          <div className="flex shrink-0 items-center">
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

      <section className="Chart-section grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="min-w-0 w-full">
          <LinearClassChart />
        </div>

        <div className="min-w-0 w-full">
          <GenderOverview />
        </div>
      </section>

      {/* STUDENT LIST */}

      <section className="Student-List w-full my-10 sm:my-16 overflow-x-auto shadow-2xl rounded-2xl">
        <div className="min-w-full">
          <StudentList />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
