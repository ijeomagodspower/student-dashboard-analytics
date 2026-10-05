import { useStudentContext } from "../Context";

const Functions = () => {
  const { totalStudents } = useStudentContext();

  return (
    <>
      <div>
        {totalStudents.map((student) => (
          <div>{student.name}</div>
        ))}
      </div>
      <div>{totalStudents.length}</div>
    </>
  );
};

export default Functions;
