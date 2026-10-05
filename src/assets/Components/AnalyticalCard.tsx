interface Props {
  figure: number;
  title: string;
  info: string;
}

const AnalyticalCard = ({ title, figure, info }: Props) => {
  return (
    <div className="flex-col min-w-full px-2 rounded-2xl">
      <div className="flex-col">
        <span className="space-y-2">
          <div className="font-medium text-md text-gray-700">{title}</div>
          <div className="text-2xl font-bold text-black">{figure}</div>
          <div>{info}</div>
        </span>
      </div>
    </div>
  );
};

export default AnalyticalCard;
