import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const StatCard = ({
  iconColor,
  icon,
  title,
  arr,
  cardBgColor,
}: {
  iconColor: string;
  icon: any;
  title: string;
  arr: any;
  cardBgColor?: string;
}) => (
  <div
    className={`${
      cardBgColor ? cardBgColor : "bg-white"
    } shadow-md rounded-lg p-4 h-full w-full flex flex-col justify-between gap-9`}
  >
    <div className="flex flex-row items-center justify-between">
      <div className="flex justify-center items-center gap-2">
        <span className={`inline-block p-2 ${iconColor} rounded-md shadow-md`}>
          {icon}
        </span>
        <p className="text-gray-700 text-lg font-medium">{title}</p>
      </div>
      <p className="flex items-center gap-2 text-gray-400">
        <span className="text-sm">All-time</span>
        <KeyboardArrowDownOutlined className="!text-md" />
      </p>
    </div>
    <div className="flex items-center lg:gap-16 md:gap-14 gap-10">
      {arr?.map((items: any) => (
        <div className="flex flex-col gap-1">
          <p className="text-gray-500 text-sm capitalize">{items?.name}</p>
          <h2 className="text-md font-medium text-gray-800">{items?.value}</h2>
        </div>
      ))}
    </div>
  </div>
);
export default StatCard;
