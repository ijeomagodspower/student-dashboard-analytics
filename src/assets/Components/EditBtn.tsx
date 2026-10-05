import { Link } from "react-router-dom";
/* import { useEditStudentContext } from "../EditProvider"; */
interface EditBtnProps {
  studentId: number;
}

const EditBtn = ({ studentId }: EditBtnProps) => {
  console.log("student obj id", studentId);

  return (
    <div>
      <Link to={`/students/editform/${studentId}`}>
        <button className="flex py-2 px-6 bg-green-100 text-black font-bold rounded-2xl transition-all duration-300 ease-in-out hover:bg-green-300 hover:scale-105 ">
          Edit
        </button>
      </Link>
    </div>
  );
};

export default EditBtn;
