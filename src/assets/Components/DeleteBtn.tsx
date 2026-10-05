interface Props {
  id: number;
}

const DeleteBtn = ({ id }: Props) => {
  return (
    <div>
      <button className="flex py-2 px-6 bg-primary-highlight text-black font-bold rounded-2xl transition-all duration-300 ease-in-out hover:bg-primary-bg hover:scale-105 ">
        Delete{id}
      </button>
    </div>
  );
};

export default DeleteBtn;
