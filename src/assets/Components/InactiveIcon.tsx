import { FaCircle } from "react-icons/fa";

const InactiveIcon = () => {
  return (
    <div className="flex p-2 gap-4 bg-red-100 items-center rounded-2xl">
      <FaCircle className="text-red-500" />
      <p className="text-red-500 font-medium">Inactive</p>
    </div>
  );
};

export default InactiveIcon;
