import { useDashboardContext } from "../DashboardProvider";

function GenderOverview() {
  const { totalStudents } = useDashboardContext();

  const male = totalStudents.filter((std) => std.gender === "Male").length;
  const female = totalStudents.filter((std) => std.gender === "Female").length;
  const total = male + female;

  const malePercent = male / total;
  const femalePercent = female / total;
  const radius = 72;

  console.log(male);
  console.log(female);

  return (
    <div className=" basis-full sm:basis-2/5 p-6 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <svg
          className="h-6 w-6 text-primary-bg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="7" r="4" strokeWidth="2" />
          <path strokeWidth="2" d="M3 21v-2a6 6 0 0112 0v2" />
          <path strokeWidth="2" d="M16 3.5a4 4 0 010 7" />
        </svg>

        <h2 className="text-lg font-bold text-slate-900">Gender Overview</h2>
      </div>

      <div className="flex flex-col sm:flex-row min-w-full items-center justify-between gap-8">
        {/* DONUT */}
        <div className="relative h-44 w-44">
          <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
            {/* Background */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="#3631ad"
              strokeWidth="22"
            />

            {/* Male */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="#3631ad"
              strokeWidth="22"
              strokeLinecap="round"
              strokeDasharray={`${femalePercent} ${1 - femalePercent}`}
              strokeDashoffset="0"
              pathLength="1"
              className="transition-all duration-1000 ease-out"
            />

            {/* Female */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="#08DA78"
              strokeWidth="22"
              strokeLinecap="round"
              strokeDasharray={`${femalePercent} ${1 - femalePercent}`}
              strokeDashoffset={-malePercent}
              pathLength="1"
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          {/* Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-slate-900">{total}</span>

            <span className="text-xs text-slate-500">Total Students</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 rounded-full bg-primary-bg" />
              <span className="text-sm font-medium">Male</span>
            </div>

            <div className="flex gap-5">
              <span className="font-semibold">{male}</span>

              <span className="text-slate-400">
                {Math.round(malePercent * 100)}%
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 rounded-full bg-green-400" />
              <span className="text-sm font-medium">Female</span>
            </div>

            <div className="flex gap-5">
              <span className="font-semibold">{female}</span>

              <span className="text-slate-400">
                {Math.round(femalePercent * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenderOverview;
