import { useEffect, useState } from "react";
import { useEditStudentContext } from "../EditProvider";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ApiEdit, editStudentData, getStudentDetails } =
    useEditStudentContext();

  const sId = Number(id);
  console.log("student SId", sId);

  /* Empty Form Field Notice  */
  const [emptyField, setEmptyField] = useState(false);

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [classes, setClass] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState(true);

  useEffect(() => {
    getStudentDetails(sId);
  }, [sId]);

  useEffect(() => {
    if (!editStudentData) {
      return;
    }

    setName(editStudentData.name);
    setUserName(editStudentData.username);
    setClass(editStudentData.class);
    setGender(editStudentData.gender);
    setStatus(editStudentData.status);

    console.log("class", classes);
    return;
  }, [editStudentData]);

  const HandleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const student = {
      id: sId,
      username: userName.toLowerCase(),
      name: name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      class: classes,
      gender: gender,
      status: status,
    };

    if (!name || !userName || !classes || !gender) {
      setEmptyField(true);
      return;
    }

    ApiEdit(student);
  };

  return (
    <form
      onSubmit={HandleSubmit}
      className="w-10/12 max-w-3xl mx-auto my-40 bg-primary-bg p-8 md:p-10 rounded-2xl text-white shadow-lg"
    >
      <button
        className="flex justify-self-start p-2 absolute left-10 top-25 rounded-full border-2 border-primary-bg transition duration-200 ease-in hover:scale-110"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="text-primary-bg" />
      </button>
      {emptyField && (
        <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
          Please fill in all fields
        </div>
      )}
      <div className="space-y-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="FullName" className="font-medium">
            Full Name
          </label>

          <input
            id="FullName"
            className="w-full border-2 border-bg-accent rounded-lg p-3 outline-none focus:border-blue-500"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="FullName"
            placeholder="Enter full name"
          />
        </div>

        {/* Username + Class */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="Username" className="font-medium">
              Username
            </label>

            <input
              id="Username"
              className="w-full border-2 border-bg-accent rounded-lg p-3 outline-none focus:border-blue-500"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              name="Username"
              placeholder="Enter username"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="Class" className="font-medium">
              Class
            </label>

            <select
              id="class"
              value={classes}
              onChange={(e) => setClass(e.target.value)}
              className="
      w-full
      appearance-none
      rounded-xl
      border border-slate-200
      bg-white
      px-4 py-3
      pr-10
      text-sm
      font-medium
      text-slate-800
      shadow-sm
      outline-none
      transition-all
      duration-200
      cursor-pointer
      hover:border-slate-300
      focus:border-primary-bg
      focus:ring-4
      focus:ring-primary-bg/10
    "
            >
              <option value="" className="border rounded-2xl">
                Select class
              </option>
              <option value="jss1">JSS 1</option>
              <option value="jss2">JSS 2</option>
              <option value="jss3">JSS 3</option>
              <option value="sss1">SSS 1</option>
              <option value="sss2">SSS 2</option>
              <option value="sss3">SSS 3</option>
            </select>
          </div>
        </div>

        {/* Gender + Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="Gender" className="font-medium">
              Gender
            </label>

            <select
              id="Gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              name="Gender"
              className="
      w-full
      appearance-none
      rounded-xl
      border border-slate-200
      bg-white
      px-4 py-3
      pr-10
      text-sm
      font-medium
      text-slate-800
      shadow-sm
      outline-none
      transition-all
      duration-200
      cursor-pointer
      hover:border-slate-300
      focus:border-primary-bg
      focus:ring-4
      focus:ring-primary-bg/10
    "
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="flex items-center gap-3 mt-7">
            <input
              id="Status"
              className="w-5 h-5"
              type="checkbox"
              onChange={(e) => setStatus(e.target.checked)}
              checked={status}
              name="Status"
            />

            <label htmlFor="Status" className="font-medium cursor-pointer">
              Active Student
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-bg-accent hover:opacity-90 transition rounded-lg p-3 font-semibold"
        >
          Add Student
        </button>
      </div>
    </form>
  );
};

export default EditForm;
