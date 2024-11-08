import useAdminSidebarItems from "@/hooks/useAdminSidebarItems";
import {
  Close,
  ExpandLess,
  ExpandMore,
  Logout,
  Menu,
} from "@mui/icons-material";
import {
  Collapse,
  Drawer as MuiDrawer,
  List,
  ListItemButton,
  Tooltip,
} from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

const ResponsiveDrawer = () => {
  const [open, setOpen] = useState(false); // State to manage drawer open/close
  const router = useRouter();
  const MenuItems = useAdminSidebarItems();
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  useEffect(() => {
    if (!MenuItems?.length || !router?.asPath) return;
    const isExists =
      MenuItems?.length &&
      MenuItems?.find(
        (item: any) =>
          item?.submenus?.length &&
          item?.submenus?.find((data: any) => data?.route === router?.asPath)
      );

    isExists && setSelectedSubMenu(isExists?._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.asPath, MenuItems?.length]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      {/* Menu button for small and medium screens */}
      <div className="lg:hidden block px-1 py-3">
        <span className="" onClick={() => setOpen(!open)}>
          {open ? (
            <Close className="!text-3xl !text-red-600" />
          ) : (
            <Menu className="!text-3xl !text-primary" />
          )}
        </span>
      </div>

      {/* Responsive Drawer */}
      <MuiDrawer
        open={open}
        onClose={handleDrawerToggle}
        className="lg:w-60 xl:w-72 lg:p-5 xl:p-8"
      >
        <div className="flex justify-center items-center gap-2 h-14">
          <img
            src="/logo.png"
            alt="inventory"
            className="w-12 cursor-pointer"
          />
        </div>
        <aside className="flex flex-col justify-between h-full">
          {/* Main menu section */}
          <div className="flex flex-col mt-5 gap-2 flex-grow">
            {MenuItems?.map((menuItem: any) => (
              <div key={menuItem?._id} className="mx-2">
                <Tooltip
                  title={menuItem?.title}
                  followCursor
                  arrow
                  placement="top-end"
                >
                  <div
                    className={`w-full group py-3 px-3 text-gray-500 hover:text-white rounded-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-150 ease-in-out cursor-pointer`}
                  >
                    <div className="">
                      <span className="text-gray-500 text-2xl group-hover:text-white common-transition">
                        {menuItem?.icon}
                      </span>
                    </div>
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
          {/* Logout button */}
          <div className="mx-2 mb-4">
            <Tooltip
              title="logout"
              followCursor
              arrow
              placement="top-end"
              sx={{
                zIndex: "9900",
              }}
            >
              <div
                className={`w-full group py-3 px-3 text-gray-500 hover:text-red-600 rounded-lg hover:bg-red-500/10 hover:shadow-xl transition-all duration-150 ease-in-out cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <span className="group-hover:text-red-400">
                    <Logout />
                  </span>
                </div>
              </div>
            </Tooltip>
          </div>
        </aside>
      </MuiDrawer>
    </Fragment>
  );
};

export default ResponsiveDrawer;
