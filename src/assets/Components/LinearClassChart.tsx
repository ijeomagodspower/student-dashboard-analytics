import { SquareUser } from "lucide-react";
import "./LinearClassChart.css";
import { useDashboardContext } from "../DashboardProvider";

const LinearClassChart = () => {
  const { totalStudents } = useDashboardContext();

  const jss1Std = totalStudents.filter((std) => std.class === "JSS 1").length;
  const jss2Std = totalStudents.filter((std) => std.class === "JSS 2").length;
  const jss3Std = totalStudents.filter((std) => std.class === "JSS 3").length;
  const ss1Std = totalStudents.filter((std) => std.class === "SS 1").length;
  const ss2Std = totalStudents.filter((std) => std.class === "SS 2").length;
  const ss3Std = totalStudents.filter((std) => std.class === "SS 3").length;
  const allStudent = totalStudents.length;

  const jss1Percentage = ((jss1Std * 2) / allStudent) * 100;
  const jss2Percentage = ((jss2Std * 2) / allStudent) * 100;
  const jss3Percentage = ((jss3Std * 2) / allStudent) * 100;
  const ss1Percentage = ((ss1Std * 2) / allStudent) * 100;
  const ss2Percentage = ((ss2Std * 2) / allStudent) * 100;
  const ss3Percentage = ((ss3Std * 2) / allStudent) * 100;

  console.log(`percent${jss1Percentage}`);
  return (
    <div className="flex-col w-3/5 p-5 space-y-6 shadow-2xl rounded-2xl">
      {/* JSS 1 */}
      <div className="flex gap-5 items-start">
        <SquareUser className="text-primary-bg" />
        <h2 className="text-lg font-bold text-black">Students by Class</h2>
      </div>

      <div className="w-full flex space-x-6 justify-between items-center">
        <h4 className="basis-10 font-semibold">Jss 1</h4>
        <div className="flex h-3 w-full overflow-hidden border-none bg-slate-200 rounded-3xl">
          <div
            className="bg-linear-to-r from-primary-bg to-green-400 rounded-3xl"
            style={{ width: `${jss1Percentage}%` } as React.CSSProperties}
          ></div>
        </div>
        <h4 className="font-semibold">{jss1Std}</h4>
      </div>

      {/* JSS 2 */}

      <div className="w-full flex space-x-6 justify-between items-center">
        <h4 className="basis-10 font-semibold">Jss 2</h4>
        <div className="flex h-3 w-full overflow-hidden border-none bg-slate-200 rounded-3xl">
          <div
            className="bg-linear-to-r from-primary-bg to-green-400 rounded-3xl "
            style={{ width: `${jss2Percentage}%` }}
          ></div>
        </div>
        <h4 className="font-semibold">{jss2Std}</h4>
      </div>

      {/* JSS 3 */}

      <div className="w-full flex space-x-6 justify-between items-center">
        <h4 className="basis-10 font-semibold">Jss 3</h4>
        <div className="flex h-3 w-full overflow-hidden border-none bg-slate-200 rounded-3xl">
          <div
            className="bg-linear-to-r from-primary-bg to-green-400 rounded-3xl "
            style={{ width: `${jss3Percentage}%` }}
          ></div>
        </div>
        <h4 className="font-semibold">{jss3Std}</h4>
      </div>

      {/* SS 1 */}
      <div className="w-full flex space-x-6 justify-between items-center">
        <h4 className="basis-10 font-semibold">SS 1</h4>
        <div className="flex h-3 w-full overflow-hidden border-none bg-slate-200 rounded-3xl">
          <div
            className="bg-linear-to-r from-primary-bg to-green-400 rounded-3xl "
            style={{ width: `${ss1Percentage}%` }}
          ></div>
        </div>
        <h4 className="font-semibold">{ss1Std}</h4>
      </div>

      {/* SS 2 */}
      <div className="w-full flex space-x-6 justify-between items-center">
        <h4 className="basis-10 font-semibold">SS 2</h4>
        <div className="flex h-3 w-full overflow-hidden border-none bg-slate-200 rounded-3xl">
          <div
            className="bg-linear-to-r from-primary-bg to-green-400 rounded-3xl "
            style={{ width: `${ss2Percentage}%` }}
          ></div>
        </div>
        <h4 className="font-semibold">{ss2Std}</h4>
      </div>

      {/* SS 3 */}

      <div className="w-full flex space-x-6 justify-between items-center">
        <h4 className="basis-10 font-semibold">SS 3</h4>
        <div className="flex h-3 w-full overflow-hidden border-none bg-slate-200 rounded-3xl">
          <div
            className="bg-linear-to-r from-primary-bg to-green-400 rounded-3xl"
            style={{ width: `${ss3Percentage}%` }}
          ></div>
        </div>
        <h4 className="font-semibold">{ss3Std}</h4>
      </div>
    </div>
  );
};

export default LinearClassChart;
