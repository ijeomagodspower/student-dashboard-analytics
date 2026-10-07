import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ActiveIcon from "../Components/ActiveIcon";
import InactiveIcon from "../Components/InactiveIcon";
import EditBtn from "../Components/EditBtn";
import DeleteBtn from "../Components/DeleteBtn";
import { ChevronLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StudentList from "../Components/StudentList";
import { useSideBarContext } from "../sidebarContext";

interface studentData {
  id: number;
  username: string;
  name: string;
  class: string;
  gender: string;
  status: boolean;
}

const Students = () => {
  const { username } = useParams();
  const { setSideBar } = useSideBarContext();
  const navigate = useNavigate();

  console.log(username);

  const url = "https://6aa8679e9b08676cd32c04af.mockapi.io/students/students";

  const [studentData, setStudentData] = useState<studentData[]>([]);

  async function fetchStudent() {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`response unseccessful : ${response.status}`);
      }
      const stdData = await response.json();
      setStudentData(stdData);
      console.log(stdData);
    } catch (error) {
      console.error(`fetch unsuccessful ${error}`);
    }
  }

  useEffect(() => {
    fetchStudent();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [username]);

  const student = username
    ? studentData.find((std) => std.username === username)
    : undefined;

  if (!student) {
    console.log("return");
  }

  const stdId = student?.id;

  console.log("student obj", stdId);

  return (
    <div
      className="flex-con min-w-full px-6 text-gray-700 my-40 sm:px-30"
      onClick={() => setSideBar(false)}
    >
      <button
        className="flex justify-self-start p-2 absolute left-5 sm:left-10 top-25 rounded-full border-2 border-primary-bg transition duration-200 ease-in hover:scale-110"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="text-primary-bg" />
      </button>
      <section
        className="flex flex-col space-y-10 w-full justify-between sm:flex-row"
        id="student-info "
      >
        <div
          className={`flex-col min-w-4/12 p-6 space-y-6 rounded-2xl border-3 overflow-hidden ${student?.gender === "Male" ? "border-primary-bg" : "border-bg-accent"} ${!student && "hidden"}`}
        >
          <div className=" flex justify-between items-start">
            <div className="flex-col">
              <p>{student?.username}</p>
              <h3 className="text-bold text-2xl text-black">{student?.name}</h3>
              <p>{student?.class}</p>
            </div>
            <div className="flex-col space-y-4 content-between">
              {student?.status === true ? <ActiveIcon /> : <InactiveIcon />}
              <p
                className={`${student?.gender === "Male" ? "text-primary-bg" : "text-green-400"}`}
              >
                {student?.gender}
              </p>
            </div>
          </div>
          {/* Edit Btn and Delete Btn */}

          <div className="flex justify-between items-center">
            <EditBtn studentId={stdId} />
            <DeleteBtn />
          </div>
        </div>

        {/*Add Student*/}
        <Link to="/addstudent" className="flex-col min-w-4/12 ">
          <div
            className={`flex-col w-full p-6 space-y-6 rounded-2xl border-3 overflow-hidden justify-items-center ${student?.gender === "Male" ? "border-primary-bg" : "border-bg-accent"} group`}
          >
            <div className="w-4/12 justify-items-center p-8 rounded-full bg-bg-light-highlight group-hover:bg-primary-highlight group-hover:scale-105 transition duration-200 ease-in">
              <Plus className="w-10 h-10 text-primary-bg" />
            </div>
            <div>
              <h3 className="text-primary-bg">Add a Student</h3>
            </div>
          </div>
        </Link>
      </section>

      <section className="Student-List flex min-w-full my-20">
        <StudentList />
      </section>
    </div>
  );
};

export default Students;
