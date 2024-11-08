import useAdminSidebarItems from "@/hooks/useAdminSidebarItems";
import { Logout } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const Drawer = () => {
  const MenuItems = useAdminSidebarItems();
  return (
    <section className="lg:block hidden sticky left-0 shadow-[rgba(0,_98,_90,_0.2)_0px_0px_12px] h-[100vh]">
      <aside className="h-full flex flex-col">
        {/* logo */}
        <div className="flex justify-center items-center gap-2 h-14">
          <img
            src="/logo.png"
            alt="inventory"
            className="w-12 cursor-pointer"
          />
        </div>
        {/* Main menu section */}
        <div className="flex flex-col mt-5 gap-4 flex-grow">
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
        <div className="mx-2 mt-auto mb-4">
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
    </section>
  );
};

export default Drawer;
