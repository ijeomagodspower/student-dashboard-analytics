import { FaCircle } from "react-icons/fa";

const ActiveIcon = () => {
  return (
    <div className="flex p-2 gap-4 bg-green-100 items-center rounded-2xl">
      <FaCircle className="text-green-500" />
      <p className="text-green-500 font-medium">Active</p>
    </div>
  );
};

export default ActiveIcon;
