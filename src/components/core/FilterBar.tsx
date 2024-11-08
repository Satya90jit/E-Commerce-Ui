import {
  Search,
  FilterAltOutlined,
  CalendarMonthOutlined,
  SendOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";

const filterItems = [
  { icon: <Search className="!text-gray-400" />, label: "Search", input: true },
  {
    icon: <FilterAltOutlined className="!text-gray-400 text-xl" />,
    label: "Filter",
  },
  {
    icon: <CalendarMonthOutlined className="!text-gray-400 text-xl" />,
    label: "Filter",
  },
  { icon: <SendOutlined className="!text-gray-400 text-xl" />, label: "Share" },
  {
    label: "Bulk Action",
    hasDropdown: true,
  },
];

export default function FilterBar() {
  return (
    <div className="flex gap-2">
      {filterItems.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 flex justify-center items-center gap-2 px-4 md:py-[4px] py-[2px] rounded-md"
        >
          {item.icon}
          {item.input ? (
            <input
              type="text"
              placeholder={item.label}
              className="outline-none text-gray-400"
            />
          ) : (
            <p className="text-gray-400 text-sm whitespace-nowrap">
              {item.label}
            </p>
          )}
          <span className="text-gray-400">
            {item.hasDropdown && <KeyboardArrowDownOutlined />}
          </span>
        </div>
      ))}
    </div>
  );
}
