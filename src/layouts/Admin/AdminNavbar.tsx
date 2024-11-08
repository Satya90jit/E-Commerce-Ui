import {
  BadgeOutlined,
  KeyboardArrowDownOutlined,
  LogoutOutlined,
  Notifications,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useState } from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";

const AdminNavbar = () => {
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const openProfile = Boolean(profileAnchorEl);
  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  return (
    <nav className="sticky z-[90] w-full h-16 flex items-center">
      <section className="w-full bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-1">
        <div className="px-4 w-full flex justify-between items-center  gap-4">
          <ResponsiveDrawer />
          <aside className="hidden md:block">
            <p className="text-xl font-medium">Inventory</p>
          </aside>
          <aside className="w-1/4 flex gap-5 items-center justify-end">
            <div className="bg-yellow-50 rounded-md shadow-md px-2 py-1 cursor-pointer flex justify-center items-center gap-2">
              <span className="text-gray-800 text-sm whitespace-nowrap">
                Nanny's shop
              </span>
              <KeyboardArrowDownOutlined />
            </div>
            <Notifications className="text-blue-500 bg-white p-1 shadow-md rounded-md !text-3xl cursor-pointer" />
            <div className="group">
              <Button
                id="basic-button"
                aria-controls={openProfile ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openProfile ? "true" : undefined}
                onClick={handleProfileClick}
              >
                <img
                  src="/profile.jpg"
                  className="h-10 w-10 object-cover rounded-xl shadow-md p-1 object-center"
                ></img>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={profileAnchorEl}
                open={openProfile}
                onClose={handleProfileClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleProfileClose}>
                  <aside className="flex flex-col px-3 pb-2">
                    <p className="text-lg font-semibold capitalize">
                      Inventory
                    </p>
                    <p className="text-lg font-medium">inventory@gmail.com</p>
                  </aside>{" "}
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleProfileClose}>
                  <Link href="/">
                    <p className="flex gap-2 items-center px-3 hover:bg-primary/10 py-2 text-base tracking-wider font-medium cursor-pointer">
                      <BadgeOutlined className="!text-primary !text-3xl" />
                      MyProfile
                    </p>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <div className="flex gap-2 items-center px-3 hover:bg-primary/10 cursor-pointer py-2 text-base tracking-wider font-medium">
                    <LogoutOutlined className="!text-primary !text-3xl" />
                    <p className=""> LogOut</p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </aside>
        </div>
      </section>
    </nav>
  );
};

export default AdminNavbar;
