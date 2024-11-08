import { FaHeadphones } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import {
  FiGrid,
  FiShoppingBag,
  FiUser,
  FiCalendar,
  FiMessageSquare,
  FiSettings,
  FiLock,
  FiGift,
} from "react-icons/fi";

const useAdminSidebarItems = () => {
  return [
    {
      _id: "1",
      title: "Dashboard",
      route: "/admin/dashboard",
      icon: <FiGrid />,
    },
    {
      _id: "2",
      title: "Orders",
      route: "/admin/orders",
      icon: <FiShoppingBag />,
    },
    {
      _id: "3",
      title: "My Profile",
      route: "/admin/users",
      icon: <FiUser />,
    },
    {
      _id: "4",
      title: "Calendar",
      route: "/admin/calendar",
      icon: <FiCalendar />,
    },
    {
      _id: "5",
      title: "Messages",
      route: "/admin/messages",
      icon: <FiMessageSquare />,
    },
    {
      _id: "6",
      title: "Settings",
      route: "/admin/settings",
      icon: <FiSettings />,
    },
    {
      _id: "7",
      title: "Security",
      route: "/admin/security",
      icon: <FaHeadphonesSimple />,
    },
    {
      _id: "8",
      title: "Rewards",
      route: "/admin/rewards",
      icon: <FiGift />,
    },
  ];
};

export default useAdminSidebarItems;
