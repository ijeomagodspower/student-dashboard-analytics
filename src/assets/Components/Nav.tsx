import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import { useSideBarContext } from "../sidebarContext";

const open =
  "position: fixed left-0 top-0 min-w-full h-1/2 sm:min-w-1/5 sm:h-full bg-primary-bg shadow-2xl border-white duration-500 ease-in-out transform translate-x-0 z-50";
const close =
  "position: fixed left-0 top-0 min-w-full h-1/2 sm:min-w-1/5 sm:h-full bg-primary-bg shadow-2xl border-white transition duration-500 ease-in-out transform -translate-x-150 z-50";

const Nav = () => {
  const { sidebar, setSideBar } = useSideBarContext();

  return (
    <>
      <nav className="flex fixed top-0 sm:left-0 min-w-full z-100 ">
        <div className="flex justify-between min-w-full h-20 items-center align-middle p-4 bg-primary-bg text-white ">
          <header className="flex justify-center min-w-full gap-4 items-center p-4 text-white">
            <div className="flex justify-between min-w-full items-center  ">
              <a href="/">
                <div className="flex text-2xl sm:text-3xl font-bold gap-5">
                  <FaGraduationCap className="text-white w-10 h-10 " />
                  Overview
                </div>
              </a>
              <div>
                <MenuIcon
                  onClick={() => setSideBar(!sidebar)}
                  className="text-white cursor-pointer mt-1 stroke-3 w-6 h-6 transition-all duration-200 ease-out hover:scale-120"
                />
              </div>
            </div>
          </header>
        </div>
      </nav>

      <section
        className={`Dashboard-sidebar justify-items-center ${sidebar ? open : close} overflow-hidden mt-20 z-100`}
      >
        <div className="flex-col min-w-full justify-items-center my-5 px-10 text-md font-bold space-y-6 text-white ">
          <Link
            to="/"
            className="flex min-w-full bg-bg-highlight p-3 rounded-3xl transition-all
          duration-200 ease-out hover:scale-115 hover:text-bg-accent active:text-bg-accent "
          >
            <div className="w-full" onClick={() => setSideBar(false)}>
              Dashboard
            </div>
          </Link>

          <Link
            to="/students"
            className="flex min-w-full bg-bg-highlight p-3 rounded-3xl transition-all duration-200 ease-out hover:scale-115 hover:text-bg-accent active:text-bg-accent"
          >
            <div className="w-full" onClick={() => setSideBar(false)}>
              Students
            </div>
          </Link>
          <Link
            to="/addstudent"
            className="flex min-w-full bg-bg-highlight p-3 rounded-3xl transition-all duration-200 ease-out hover:scale-115 hover:text-bg-accent active:text-bg-accent"
          >
            <div className="w-full" onClick={() => setSideBar(false)}>
              Add Students
            </div>
          </Link>
        </div>

        <div className="flex relative w-100 justify-center h-100 ">
          <div className="flex bg-bg-highlight absolute rounded-full -left-10 -bottom-20 w-80 h-80 z-10"></div>
          <div className="flex bg-bg-highlight absolute rounded-full opacity-70 -left-25 bottom-20 w-50 h-50"></div>
          <div className="flex bg-bg-highlight absolute rounded-full opacity-70 right-0 bottom-15 w-70 h-70"></div>
        </div>
      </section>
    </>
  );
};

export default Nav;
