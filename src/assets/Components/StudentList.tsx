import { ChevronUp, ExternalLink, UserRound } from "lucide-react";
import ActiveIcon from "./ActiveIcon";
import InactiveIcon from "./InactiveIcon";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDashboardContext } from "../DashboardProvider";

const StudentList = () => {
  const { totalStudents } = useDashboardContext();
  const [showAll, setShowAll] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  const filter = totalStudents.filter(
    (std) =>
      std.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      std.username.toLowerCase().includes(searchInput.toLowerCase()) ||
      std.class.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const displayAll = filter.map((std) => {
    return (
      <Link to={`/students/${std.username}`} key={std.id}>
        <div className="flex justify-between text-md p-4 border-b-5 border-bg-light-highlight transition-all duration-200 hover:bg-slate-300 hover:scale-101 rounded-3xl">
          <div className="flex basis-2/12">{`0${std.id}`}</div>
          <div className="flex basis-3/12">{std.name}</div>
          <div className="flex basis-2/12">{std.class}</div>
          <div className="flex basis-2/12">{std.gender}</div>
          <div className="flex basis-3/12">
            {std.status ? <ActiveIcon /> : <InactiveIcon />}
          </div>
        </div>
      </Link>
    );
  });

  const showLess = filter.slice(0, 5).map((std) => {
    return (
      <Link to={`/students/${std.username}`} key={std.id}>
        <div className="flex justify-between text-md p-4 border-b-5 border-bg-light-highlight items-center font-semibold transition-all duration-200 hover:bg-slate-300 hover:scale-101 rounded-3xl">
          <div className="flex basis-2/12">{`0${std.id}`}</div>
          <div className="flex basis-3/12">{std.name}</div>
          <div className="flex basis-2/12">{std.class}</div>
          <div className="flex basis-2/12">{std.gender}</div>
          <div className="flex basis-3/12">
            {std.status ? <ActiveIcon /> : <InactiveIcon />}
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className="flex-col min-w-full bg-bg-light-highlight space-y-4 p-6 rounded-2xl shadow-2xl">
      <div className="flex flex-wrap sm:flex-nowrap sm:w-full justify-between mb-10 gap-10">
        <div className="flex sm:min-w-2/8 gap-5 items-center">
          <UserRound className="text-primary-bg" />
          <h2 className="text-lg font-bold text-black">Recent Students</h2>
        </div>
        <section
          className="flex basis-full order-4 justify-between items-center gap-4 sm:min-w-4/8 sm:order-0 "
          id="search bar"
        >
          <input
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder="Enter student name or class"
            className="w-full border-2 border-bg-accent rounded-3xl p-3 outline-none focus:border-primary-bg"
          ></input>
        </section>
        <div className="flex gap-6 items-center sm:min-w-2/8">
          <button
            className={`flex items-center bg-green-100 rounded-full p-2 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-green-300 ${showAll ? "-rotate-180" : ""}`}
            onClick={() => setShowAll(!showAll)}
          >
            <ChevronUp className="text-green-700" />
          </button>
          <button className="flex items-center bg-primary-bg text-white font-semibold rounded-3xl gap-4 p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-bg-accent">
            View all
            <ExternalLink className="text-white w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex min-w-full gap-3 justify-between bg-bg-light-highlight text-md font-bold p-4 mb-10 rounded-2xl">
        <div className="flex basis-2/12">Student ID</div>
        <div className="flex basis-3/12">Name</div>
        <div className="flex basis-2/12">Class</div>
        <div className="flex basis-2/12">Gender</div>
        <div className="flex basis-3/12">Status</div>
      </div>

      {/* Students Name */}
      <div>{showAll ? displayAll : showLess}</div>
    </section>
  );
};

export default StudentList;
