import { PurchaseTable, StatCard } from "@/components/cards";
import AdminBreadcrumbs from "@/components/core/BreadCrumbs";
import { AdminLayout } from "@/layouts";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Fragment } from "react";
import {
  AiOutlineEye,
  AiOutlineUnorderedList,
  AiOutlineWarning,
  AiTwotonePieChart,
} from "react-icons/ai";

const ViewInventory = () => {
  const router = useRouter();
  return (
    <AdminLayout title="view Inventory">
      <section className="main-container">
        <AdminBreadcrumbs links={links} />
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 md:pt-4 pt-2 mb-6">
          <div className="flex lg:flex-row flex-col items-center lg:gap-6 gap-2">
            <h1 className="text-xl font-medium">Polo T-Shirt</h1>
            <p className="text-gray-500 text-sm">
              Date Added: 12 Sept 2022 - 12:55 pm
            </p>
            <p className="group text-gray-500 text-sm cursor-pointer">
              Product URL:{" "}
              <span className="group-hover:text-blue-500 group-hover:underline">
                1nancystores.com/polot-shirt
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="secondary-button flex justify-between items-center gap-2"
              onClick={() => router.push("/")}
            >
              Edit Product
              <KeyboardArrowDownOutlined />
            </button>
            <button
              className="tertiary-button"
              onClick={() => router.push("/")}
            >
              Unpublish Product
            </button>
          </div>
        </header>
        {/* mian section */}
        <Fragment>
          <aside className="flex flex-col gap-6 mb-7">
            {/* Stats Grid */}
            {/* 4 grid card */}
            <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-5">
              {/* image and order publish */}
              <div className="lg:w-1/2 w-full flex lg:flex-row flex-col items-center justify-center gap-5">
                <div className="bg-white shadow-md flex justify-center items-center rounded-lg p-2">
                  <img src="/3dshirt.png" className="h-full w-full" />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 h-full w-full flex flex-col justify-between gap-9">
                  <div className="flex flex-row items-center justify-between">
                    <p className="flex items-center gap-2 text-gray-400">
                      <span className="text-sm">Last order 12 Sept 2022</span>
                    </p>
                    <div className="flex justify-center items-center gap-2">
                      <span
                        className={`inline-block px-4 text-sm p-[3px] bg-green-400/40 text-green-700 rounded-md shadow-md`}
                      >
                        Published
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-20">
                    {productPricingAndStock?.map((items: any) => (
                      <div className="flex flex-col gap-1">
                        <p className="text-gray-500 text-sm capitalize">
                          {items?.name}
                        </p>
                        <h2 className="text-md font-medium text-gray-800">
                          {items?.value}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* total orders */}
              <div className="lg:w-1/2 w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
                <StatCard
                  title="Orders"
                  arr={totalOrderSummary}
                  icon={<AiTwotonePieChart />}
                  iconColor="bg-blue-300/40 text-blue-800"
                />
                <StatCard
                  title="Engagement"
                  arr={engagementStats}
                  icon={<AiOutlineEye />}
                  iconColor="bg-yellow-300/40 text-yellow-800"
                />
              </div>
            </div>
            {/* 2 grid card */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <StatCard
                title="Order Overview"
                arr={orderOverview}
                icon={<AiOutlineUnorderedList />}
                iconColor="bg-purple-300/40 text-purple-800"
              />
              <StatCard
                title="Order Status"
                arr={orderStatusCounts}
                icon={<AiOutlineWarning />}
                iconColor="bg-red-300/40 text-red-800"
              />
            </div>
          </aside>
          {/* Purchases Table */}
          <PurchaseTable />
        </Fragment>
      </section>
    </AdminLayout>
  );
};

export default ViewInventory;

const links = [
  { id: 1, page: "Dashboard", link: "/dashboard" },
  { id: 2, page: "View Inventory", link: "/view-inventory" },
];

const totalOrderSummary = [{ name: "Total Orders", value: "₦50,000.00" }];

const productPricingAndStock = [
  {
    name: "Price",
    value: "₦50,000.00",
  },
  {
    name: "In-Stock",
    value: "20",
  },
];
const orderOverview = [
  { name: "All Orders", value: "10" },
  { name: "Pending", value: "4" },
  { name: "Completed", value: "6" },
];
const orderStatusCounts = [
  { name: "Canceled", value: "5" },
  { name: "Returned", value: "10" },
  { name: "Damaged", value: "2" },
];
const engagementStats = [
  { name: "Views", value: "1,200" },
  { name: "Favorites", value: "23" },
];
